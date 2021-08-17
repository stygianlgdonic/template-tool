// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const campaignSchema = new Schema(
  {
    id: String,
    name: String,
    error: Object,
    schedule: Object,
    masterSubject: String,
    masterBody: String,
    sender: String,
    variables: [String],
    cardList: [String],
    userId: String,
    workspace: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

campaignSchema.statics = {
  /**
   * Create a Single New Campaign
   * @param {object} newCampaign - an instance of Campaign
   * @returns {Promise<Campaign, APIError>}
   */
  async createCampaign(newCampaign) {
    const duplicate = await this.findOne({ id: newCampaign.id });
    if (duplicate) {
      throw new APIError(
        409,
        "Campaign Already Exists",
        `There is already a campaign with id '${newCampaign.id}'.`
      );
    }
    const campaign = await newCampaign.save();
    return campaign.toObject();
  },
  /**
   * Delete a single Campaign
   * @param {String} id - the Campaign's id
   * @returns {Promise<Campaign, APIError>}
   */
  async deleteCampaign(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(
        404,
        "Campaign Not Found",
        `No campaign '${id}' found.`
      );
    }
    return deleted.toObject();
  },
  /**
   * Get a single Campaign by id
   * @param {String} id - the Campaign's id
   * @returns {Promise<Campaign, APIError>}
   */
  async readCampaign(id) {
    const campaign = await this.findOne({ id });

    if (!campaign) {
      throw new APIError(
        404,
        "Campaign Not Found",
        `No campaign '${id}' found.`
      );
    }
    return campaign.toObject();
  },
  /**
   * Get a list of Campaigns
   * @param {Object} query - pre-formatted query to retrieve campaigns.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Campaigns, APIError>}
   */
  async readCampaigns(query, fields, skip, limit) {
    const campaigns = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!campaigns.length) {
      return [];
    }
    return campaigns.map((campaign) => campaign.toObject());
  },
  /**
   * Patch/Update a single Campaign
   * @param {String} id - the Campaign's id
   * @param {Object} campaignUpdate - the json containing the Campaign attributes
   * @returns {Promise<Campaign, APIError>}
   */
  async updateCampaign(id, campaignUpdate) {
    const campaign = await this.findOneAndUpdate({ id }, campaignUpdate, {
      new: true,
    });
    if (!campaign) {
      throw new APIError(
        404,
        "Campaign Not Found",
        `No campaign '${id}' found.`
      );
    }
    return campaign.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!campaignSchema.options.toObject) campaignSchema.options.toObject = {};
campaignSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
campaignSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Campaign", campaignSchema);
