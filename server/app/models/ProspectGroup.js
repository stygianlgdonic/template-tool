// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const prospectGroupSchema = new Schema(
  {
    id: String,
    fileName: String,
    ownerId: String,
    workspaceId: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

prospectGroupSchema.statics = {
  /**
   * Create a Single New ProspectGroup
   * @param {object} newProspectGroup - an instance of ProspectGroup
   * @returns {Promise<ProspectGroup, APIError>}
   */
  async createProspectGroup(newProspectGroup) {
    const duplicate = await this.findOne({ id: newProspectGroup.id });
    if (duplicate) {
      throw new APIError(
        409,
        "ProspectGroup Already Exists",
        `There is already a prospectGroup with id '${newProspectGroup.id}'.`
      );
    }
    const prospectGroup = await newProspectGroup.save();
    return prospectGroup.toObject();
  },
  /**
   * Delete a single ProspectGroup
   * @param {String} id - the ProspectGroup's id
   * @returns {Promise<ProspectGroup, APIError>}
   */
  async deleteProspectGroup(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(
        404,
        "ProspectGroup Not Found",
        `No prospectGroup '${id}' found.`
      );
    }
    return deleted.toObject();
  },
  /**
   * Get a single ProspectGroup by id
   * @param {String} id - the ProspectGroup's id
   * @returns {Promise<ProspectGroup, APIError>}
   */
  async readProspectGroup(id) {
    const prospectGroup = await this.findOne({ id });

    if (!prospectGroup) {
      throw new APIError(
        404,
        "ProspectGroup Not Found",
        `No prospectGroup '${id}' found.`
      );
    }
    return prospectGroup.toObject();
  },
  /**
   * Get a list of ProspectGroups
   * @param {Object} query - pre-formatted query to retrieve prospectGroups.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<ProspectGroups, APIError>}
   */
  async readProspectGroups(query, fields, skip, limit) {
    const prospectGroups = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!prospectGroups.length) {
      return [];
    }
    return prospectGroups.map((prospectGroup) => prospectGroup.toObject());
  },
  /**
   * Patch/Update a single ProspectGroup
   * @param {String} id - the ProspectGroup's id
   * @param {Object} prospectGroupUpdate - the json containing the ProspectGroup attributes
   * @returns {Promise<ProspectGroup, APIError>}
   */
  async updateProspectGroup(id, prospectGroupUpdate) {
    const prospectGroup = await this.findOneAndUpdate(
      { id },
      prospectGroupUpdate,
      {
        new: true,
      }
    );
    if (!prospectGroup) {
      throw new APIError(
        404,
        "ProspectGroup Not Found",
        `No prospectGroup '${id}' found.`
      );
    }
    return prospectGroup.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!prospectGroupSchema.options.toObject)
  prospectGroupSchema.options.toObject = {};
prospectGroupSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
prospectGroupSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("ProspectGroup", prospectGroupSchema);
