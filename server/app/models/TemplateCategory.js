// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const templateCategorySchema = new Schema({
  id: String,
  name: String,
  templateList: [String],
});

templateCategorySchema.statics = {
  /**
   * Create a Single New TemplateCategory
   * @param {object} newTemplateCategory - an instance of TemplateCategory
   * @returns {Promise<TemplateCategory, APIError>}
   */
  async createTemplateCategory(newTemplateCategory) {
    const duplicate = await this.findOne({ id: newTemplateCategory.id });
    if (duplicate) {
      throw new APIError(
        409,
        "TemplateCategory Already Exists",
        `There is already a templateCategory with id '${newTemplateCategory.id}'.`
      );
    }
    const templateCategory = await newTemplateCategory.save();
    return templateCategory.toObject();
  },
  /**
   * Delete a single TemplateCategory
   * @param {String} id - the TemplateCategory's id
   * @returns {Promise<TemplateCategory, APIError>}
   */
  async deleteTemplateCategory(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(404, "TemplateCategory Not Found", `No templateCategory '${id}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single TemplateCategory by id
   * @param {String} id - the TemplateCategory's id
   * @returns {Promise<TemplateCategory, APIError>}
   */
  async readTemplateCategory(id) {
    const templateCategory = await this.findOne({ id });

    if (!templateCategory) {
      throw new APIError(404, "TemplateCategory Not Found", `No templateCategory '${id}' found.`);
    }
    return templateCategory.toObject();
  },
  /**
   * Get a list of TemplateCategorys
   * @param {Object} query - pre-formatted query to retrieve templateCategorys.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<TemplateCategorys, APIError>}
   */
  async readTemplateCategorys(query, fields, skip, limit) {
    const templateCategorys = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!templateCategorys.length) {
      return [];
    }
    return templateCategorys.map(templateCategory => templateCategory.toObject());
  },
  /**
   * Patch/Update a single TemplateCategory
   * @param {String} id - the TemplateCategory's id
   * @param {Object} templateCategoryUpdate - the json containing the TemplateCategory attributes
   * @returns {Promise<TemplateCategory, APIError>}
   */
  async updateTemplateCategory(id, templateCategoryUpdate) {
    const templateCategory = await this.findOneAndUpdate({ id }, templateCategoryUpdate, {
      new: true
    });
    if (!templateCategory) {
      throw new APIError(404, "TemplateCategory Not Found", `No templateCategory '${id}' found.`);
    }
    return templateCategory.toObject();
  }
};

/* Transform with .toObject to remove __v and _id from response */
if (!templateCategorySchema.options.toObject) templateCategorySchema.options.toObject = {};
templateCategorySchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
templateCategorySchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("TemplateCategory", templateCategorySchema);
