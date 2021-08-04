// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  id: String,
  ownerId: [String],
  images: [Object],
  textBoxes: [Object],
  shapes: [Object],
  dimensions: Object,
  templateId: String,
  workspaceId: String,
});

cardSchema.statics = {
  /**
   * Create a Single New Card
   * @param {object} newCard - an instance of Card
   * @returns {Promise<Card, APIError>}
   */
  async createCard(newCard) {
    // const duplicate = await this.findOne({ id: newCard.id });
    // if (duplicate) {
    //   throw new APIError(
    //     409,
    //     "Card Already Exists",
    //     `There is already a card with id '${newCard.id}'.`
    //   );
    // }
    try {
      const card = await newCard.save();
      return card.toObject();
    } catch (error) {
      console.log(error)
      return error
    }
  },
  /**
   * Delete a single Card
   * @param {String} id - the Card's id
   * @returns {Promise<Card, APIError>}
   */
  async deleteCard(id) {
    const deleted = await this.findOneAndRemove({ _id: id });
    if (!deleted) {
      throw new APIError(404, "Card Not Found", `No card '${id}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single Card by id
   * @param {String} id - the Card's id
   * @returns {Promise<Card, APIError>}
   */
  async readCard(id) {
    const card = await this.findOne({ _id: id });

    if (!card) {
      throw new APIError(404, "Card Not Found", `No card '${id}' found.`);
    }
    return card.toObject();
  },
  /**
   * Get a list of Cards
   * @param {Object} query - pre-formatted query to retrieve cards.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Cards, APIError>}
   */
  async readCards(query, fields, skip, limit) {
    const cards = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!cards.length) {
      return [];
    }
    //Since Documents donot contain Doc ID by Default, Adding it manually
    const cardsWithId = cards.map((item) => {
      const convertedToObject = item.toObject()
      return { ...convertedToObject, id: item._id }
    })
    return cardsWithId;
  },
  /**
   * Patch/Update a single Card
   * @param {String} id - the Card's id
   * @param {Object} cardUpdate - the json containing the Card attributes
   * @returns {Promise<Card, APIError>}
   */
  async updateCard(id, cardUpdate) {
    const card = await this.findOneAndUpdate({ _id: id }, cardUpdate, {
      new: true
    });
    if (!card) {
      throw new APIError(404, "Card Not Found", `No card '${id}' found.`);
    }
    return card.toObject();
  }
};

/* Transform with .toObject to remove __v and _id from response */
if (!cardSchema.options.toObject) cardSchema.options.toObject = {};
cardSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
cardSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Card", cardSchema);
