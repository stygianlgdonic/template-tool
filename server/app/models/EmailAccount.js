// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const emailAccountSchema = new Schema({
  id: String,
  email: String,
  smtp: Object,
  imap: Object,
  credentials: Object,
  type: Object
});

emailAccountSchema.statics = {
  /**
   * Create a Single New EmailAccount
   * @param {object} newEmailAccount - an instance of EmailAccount
   * @returns {Promise<EmailAccount, APIError>}
   */
  async createEmailAccount(newEmailAccount) {
    const duplicate = await this.findOne({ id: newEmailAccount.id });
    if (duplicate) {
      throw new APIError(
        409,
        "EmailAccount Already Exists",
        `There is already a emailAccount with id '${newEmailAccount.id}'.`
      );
    }
    const emailAccount = await newEmailAccount.save();
    return emailAccount.toObject();
  },
  /**
   * Delete a single EmailAccount
   * @param {String} id - the EmailAccount's id
   * @returns {Promise<EmailAccount, APIError>}
   */
  async deleteEmailAccount(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(404, "EmailAccount Not Found", `No emailAccount '${id}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single EmailAccount by id
   * @param {String} id - the EmailAccount's id
   * @returns {Promise<EmailAccount, APIError>}
   */
  async readEmailAccount(id) {
    const emailAccount = await this.findOne({ id });

    if (!emailAccount) {
      throw new APIError(404, "EmailAccount Not Found", `No emailAccount '${id}' found.`);
    }
    return emailAccount.toObject();
  },
  /**
   * Get a list of EmailAccounts
   * @param {Object} query - pre-formatted query to retrieve emailAccounts.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<EmailAccounts, APIError>}
   */
  async readEmailAccounts(query, fields, skip, limit) {
    const emailAccounts = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!emailAccounts.length) {
      return [];
    }
    return emailAccounts.map(emailAccount => emailAccount.toObject());
  },
  /**
   * Patch/Update a single EmailAccount
   * @param {String} id - the EmailAccount's id
   * @param {Object} emailAccountUpdate - the json containing the EmailAccount attributes
   * @returns {Promise<EmailAccount, APIError>}
   */
  async updateEmailAccount(id, emailAccountUpdate) {
    const emailAccount = await this.findOneAndUpdate({ id }, emailAccountUpdate, {
      new: true
    });
    if (!emailAccount) {
      throw new APIError(404, "EmailAccount Not Found", `No emailAccount '${id}' found.`);
    }
    return emailAccount.toObject();
  }
};

/* Transform with .toObject to remove __v and _id from response */
if (!emailAccountSchema.options.toObject) emailAccountSchema.options.toObject = {};
emailAccountSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
emailAccountSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("EmailAccount", emailAccountSchema);
