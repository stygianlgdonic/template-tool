// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  categoryId: String,
  dimensions: Object,
  variations: [Object],
  palette: [Object],
  tags: [String],
  dateCreated: String,
  usageCount: Number
});

templateSchema.statics = {
  /**
   * Create a Single New Template
   * @param {object} newTemplate - an instance of Template
   * @returns {Promise<Template, APIError>}
   */
  async createTemplate(newTemplate) {
    // const duplicate = await this.findOne({ id: newTemplate.id });
    // if (duplicate) {
    //   throw new APIError(
    //     409,
    //     "Template Already Exists",
    //     `There is already a template with id '${newTemplate.id}'.`
    //   );
    // }
    try {
      const template = await newTemplate.save();
      return template._id;
    } catch (error) {
      console.log(error)
      return error
    }
  },
  /**
   * Delete a single Template
   * @param {String} id - the Template's id
   * @returns {Promise<Template, APIError>}
   */
  async deleteTemplate(id) {
    const deleted = await this.findOneAndRemove({ _id: id });
    if (!deleted) {
      throw new APIError(404, "Template Not Found", `No template '${id}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single Template by id
   * @param {String} id - the Template's id
   * @returns {Promise<Template, APIError>}
   */
  async readTemplate(id) {
    const template = await this.findOne({ _id : id });
    if (!template) {
      throw new APIError(404, "Template Not Found", `No template '${id}' found.`);
    }
    return template.toObject();
  },
  /**
   * Get a list of Templates
   * @param {Object} query - pre-formatted query to retrieve templates.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Templates, APIError>}
   */
  async readTemplates(query, fields, skip, limit) {
    const templates = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!templates.length) {
      return [];
    }
    //Since Documents donot contain Doc ID by Default, Adding it manually
    const templatesWithId = templates.map((item)=>{
      const convertedToObject = item.toObject()
      return {...convertedToObject, id: item._id}
    })
    return templatesWithId;
  },
  /**
   * Patch/Update a single Template
   * @param {String} id - the Template's id
   * @param {Object} templateUpdate - the json containing the Template attributes
   * @returns {Promise<Template, APIError>}
   */
  async updateTemplate(id, templateUpdate) {
    const template = await this.findOneAndUpdate({ _id: id }, templateUpdate, {
      new: true
    });
    if (!template) {
      throw new APIError(404, "Template Not Found", `No template '${id}' found.`);
    }
    return template.toObject();
  }
};

/* Transform with .toObject to remove __v and _id from response */
if (!templateSchema.options.toObject) templateSchema.options.toObject = {};
templateSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
templateSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Template", templateSchema);
