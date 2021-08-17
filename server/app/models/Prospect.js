// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const prospectSchema = new Schema(
  {
    id: String,
    prospectGroup: Object,
    firstName: String,
    lastName: String,
    emailAddress: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

prospectSchema.statics = {
  /**
   * Create a Single New Prospect
   * @param {object} newProspect - an instance of Prospect
   * @returns {Promise<Prospect, APIError>}
   */
  async createProspect(newProspect) {
    const duplicate = await this.findOne({ id: newProspect.id });
    if (duplicate) {
      throw new APIError(
        409,
        "Prospect Already Exists",
        `There is already a prospect with id '${newProspect.id}'.`
      );
    }
    const prospect = await newProspect.save();
    return prospect.toObject();
  },
  /**
   * Delete a single Prospect
   * @param {String} id - the Prospect's id
   * @returns {Promise<Prospect, APIError>}
   */
  async deleteProspect(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(
        404,
        "Prospect Not Found",
        `No prospect '${id}' found.`
      );
    }
    return deleted.toObject();
  },
  /**
   * Get a single Prospect by id
   * @param {String} id - the Prospect's id
   * @returns {Promise<Prospect, APIError>}
   */
  async readProspect(id) {
    const prospect = await this.findOne({ id });

    if (!prospect) {
      throw new APIError(
        404,
        "Prospect Not Found",
        `No prospect '${id}' found.`
      );
    }
    return prospect.toObject();
  },
  /**
   * Get a list of Prospects
   * @param {Object} query - pre-formatted query to retrieve prospects.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Prospects, APIError>}
   */
  async readProspects(query, fields, skip, limit) {
    const prospects = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!prospects.length) {
      return [];
    }
    return prospects.map((prospect) => prospect.toObject());
  },
  /**
   * Patch/Update a single Prospect
   * @param {String} id - the Prospect's id
   * @param {Object} prospectUpdate - the json containing the Prospect attributes
   * @returns {Promise<Prospect, APIError>}
   */
  async updateProspect(id, prospectUpdate) {
    const prospect = await this.findOneAndUpdate({ id }, prospectUpdate, {
      new: true,
    });
    if (!prospect) {
      throw new APIError(
        404,
        "Prospect Not Found",
        `No prospect '${id}' found.`
      );
    }
    return prospect.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!prospectSchema.options.toObject) prospectSchema.options.toObject = {};
prospectSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
prospectSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Prospect", prospectSchema);
