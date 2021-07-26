// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const workSpaceSchema = new Schema({
  id: String,
  brandKit: Object,
  name: String,
  owner: String,
  usersList: [String],
});

workSpaceSchema.statics = {
  /**
   * Create a Single New WorkSpace
   * @param {object} newWorkSpace - an instance of WorkSpace
   * @returns {Promise<WorkSpace, APIError>}
   */
  async createWorkSpace(newWorkSpace) {
    const duplicate = await this.findOne({ id: newWorkSpace.id });
    if (duplicate) {
      throw new APIError(
        409,
        "WorkSpace Already Exists",
        `There is already a workSpace with id '${newWorkSpace.id}'.`
      );
    }
    const workSpace = await newWorkSpace.save();
    return workSpace.toObject();
  },
  /**
   * Delete a single WorkSpace
   * @param {String} id - the WorkSpace's id
   * @returns {Promise<WorkSpace, APIError>}
   */
  async deleteWorkSpace(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(404, "WorkSpace Not Found", `No workSpace '${id}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single WorkSpace by id
   * @param {String} id - the WorkSpace's id
   * @returns {Promise<WorkSpace, APIError>}
   */
  async readWorkSpace(id) {
    const workSpace = await this.findOne({ id });

    if (!workSpace) {
      throw new APIError(404, "WorkSpace Not Found", `No workSpace '${id}' found.`);
    }
    return workSpace.toObject();
  },
  /**
   * Get a list of WorkSpaces
   * @param {Object} query - pre-formatted query to retrieve workSpaces.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<WorkSpaces, APIError>}
   */
  async readWorkSpaces(query, fields, skip, limit) {
    const workSpaces = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!workSpaces.length) {
      return [];
    }
    return workSpaces.map(workSpace => workSpace.toObject());
  },
  /**
   * Patch/Update a single WorkSpace
   * @param {String} id - the WorkSpace's id
   * @param {Object} workSpaceUpdate - the json containing the WorkSpace attributes
   * @returns {Promise<WorkSpace, APIError>}
   */
  async updateWorkSpace(id, workSpaceUpdate) {
    const workSpace = await this.findOneAndUpdate({ id }, workSpaceUpdate, {
      new: true
    });
    if (!workSpace) {
      throw new APIError(404, "WorkSpace Not Found", `No workSpace '${id}' found.`);
    }
    return workSpace.toObject();
  }
};

/* Transform with .toObject to remove __v and _id from response */
if (!workSpaceSchema.options.toObject) workSpaceSchema.options.toObject = {};
workSpaceSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
workSpaceSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("WorkSpace", workSpaceSchema);
