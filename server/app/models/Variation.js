// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const variationSchema = new Schema(
  {
    name: String,
    shapes: Object,
    images: Object,
    svgs: Object,
    texts: Object,
    face: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

variationSchema.statics = {
  /**
   * Create a Single New Variation
   * @param {object} newVariation - an instance of Variation
   * @returns {Promise<Variation, APIError>}
   */
  async createVariation(newVariation) {
    const duplicate = await this.findOne({ id: newVariation.id });
    if (duplicate) {
      throw new APIError(
        409,
        "Variation Already Exists",
        `There is already a variation with id '${newVariation.id}'.`
      );
    }
    const variation = await newVariation.save();
    return variation.toObject();
  },
  /**
   * Delete a single Variation
   * @param {String} id - the Variation's id
   * @returns {Promise<Variation, APIError>}
   */
  async deleteVariation(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(
        404,
        "Variation Not Found",
        `No variation '${id}' found.`
      );
    }
    return deleted.toObject();
  },
  /**
   * Get a single Variation by id
   * @param {String} id - the Variation's id
   * @returns {Promise<Variation, APIError>}
   */
  async readVariation(id) {
    const variation = await this.findOne({ id });

    if (!variation) {
      throw new APIError(
        404,
        "Variation Not Found",
        `No variation '${id}' found.`
      );
    }
    return variation.toObject();
  },
  /**
   * Get a list of Variations
   * @param {Object} query - pre-formatted query to retrieve variations.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Variations, APIError>}
   */
  async readVariations(query, fields, skip, limit) {
    const variations = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!variations.length) {
      return [];
    }
    return variations.map((variation) => variation.toObject());
  },
  /**
   * Patch/Update a single Variation
   * @param {String} id - the Variation's id
   * @param {Object} variationUpdate - the json containing the Variation attributes
   * @returns {Promise<Variation, APIError>}
   */
  async updateVariation(id, variationUpdate) {
    const variation = await this.findOneAndUpdate({ id }, variationUpdate, {
      new: true,
    });
    if (!variation) {
      throw new APIError(
        404,
        "Variation Not Found",
        `No variation '${id}' found.`
      );
    }
    return variation.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!variationSchema.options.toObject) variationSchema.options.toObject = {};
variationSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
variationSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Variation", variationSchema);
