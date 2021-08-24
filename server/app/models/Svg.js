// npm packages
const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require("mongoose-fuzzy-searching");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const svgSchema = new Schema(
  {
    id: String,
    svgString: String,
    svgURL: String,
    tags: [String],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

svgSchema.statics = {
  /**
   * Create a Single New Schedule
   * @param {object} newSvg - an instance of Schedule
   * @returns {Promise<svgString, APIError>}
   */
  async createSvg(newSvg) {
    // const duplicate = await this.findOne({ id: newSchedule.id });
    // if (duplicate) {
    //   throw new APIError(
    //     409,
    //     "Schedule Already Exists",
    //     `There is already a svg with id '${newSvg.id}'.`
    //   );
    // }
    console.log({ newSvg });
    const svg = await newSvg.save();
    return svg.toObject();
  },
  /**
   * Delete a single Svg
   * @param {String} id - the Svg's id
   * @returns {Promise<Svg, APIError>}
   */
  async deleteSvg(id) {
    const deleted = await this.findOneAndRemove({ _id: id });
    if (!deleted) {
      throw new APIError(404, "Svg Not Found", `No Svg '${id}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single Svg by id
   * @param {String} id - the Svg's id
   * @returns {Promise<Svg, APIError>}
   */
  async readSvg(id) {
    const svg = await this.findOne({ _id: id });

    if (!svg) {
      throw new APIError(404, "Svg Not Found", `No Svg '${id}' found.`);
    }
    return svg.toObject();
  },
  /**
   * Get a list of Svgs
   * @param {Object} query - pre-formatted query to retrieve svgs.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Svg, APIError>}
   */
  async readSvgs(query, fields, skip, limit) {
    const svgs = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!svgs.length) {
      return [];
    }
    return svgs.map((svg) => svg.toObject());
  },
  /**
   * Patch/Update a single Svg
   * @param {String} id - the Svg's id
   * @param {Object} svgUpdate - the json containing the Svg attributes
   * @returns {Promise<Svg, APIError>}
   */
  async updateSvg(id, svgUpdate) {
    const svg = await this.findOneAndUpdate({ _id: id }, svgUpdate, {
      new: true,
    });
    if (!svg) {
      throw new APIError(404, "Svg Not Found", `No Svg '${id}' found.`);
    }
    return svg.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!svgSchema.options.toObject) svgSchema.options.toObject = {};
svgSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  // delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
svgSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Svg", svgSchema);
