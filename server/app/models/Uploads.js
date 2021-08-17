// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const uploadsSchema = new Schema(
  {
    id: String,
    name: String,
    storageURL: String,
    userId: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

uploadsSchema.statics = {
  /**
   * Create a Single New Uploads
   * @param {object} newUploads - an instance of Uploads
   * @returns {Promise<Uploads, APIError>}
   */
  async createUploads(newUploads) {
    const duplicate = await this.findOne({ id: newUploads.id });
    if (duplicate) {
      throw new APIError(
        409,
        "Uploads Already Exists",
        `There is already a uploads with id '${newUploads.id}'.`
      );
    }
    const uploads = await newUploads.save();
    return uploads.toObject();
  },
  /**
   * Delete a single Uploads
   * @param {String} id - the Uploads's id
   * @returns {Promise<Uploads, APIError>}
   */
  async deleteUploads(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(404, "Uploads Not Found", `No uploads '${id}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single Uploads by id
   * @param {String} id - the Uploads's id
   * @returns {Promise<Uploads, APIError>}
   */
  async readUploads(id) {
    const uploads = await this.findOne({ id });

    if (!uploads) {
      throw new APIError(404, "Uploads Not Found", `No uploads '${id}' found.`);
    }
    return uploads.toObject();
  },
  /**
   * Get a list of Uploadss
   * @param {Object} query - pre-formatted query to retrieve uploadss.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Uploadss, APIError>}
   */
  async readUploadss(query, fields, skip, limit) {
    const uploadss = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!uploadss.length) {
      return [];
    }
    return uploadss.map((uploads) => uploads.toObject());
  },
  /**
   * Patch/Update a single Uploads
   * @param {String} id - the Uploads's id
   * @param {Object} uploadsUpdate - the json containing the Uploads attributes
   * @returns {Promise<Uploads, APIError>}
   */
  async updateUploads(id, uploadsUpdate) {
    const uploads = await this.findOneAndUpdate({ id }, uploadsUpdate, {
      new: true,
    });
    if (!uploads) {
      throw new APIError(404, "Uploads Not Found", `No uploads '${id}' found.`);
    }
    return uploads.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!uploadsSchema.options.toObject) uploadsSchema.options.toObject = {};
uploadsSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
uploadsSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Uploads", uploadsSchema);
