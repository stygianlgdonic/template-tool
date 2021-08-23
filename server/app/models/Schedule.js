// npm packages
const mongoose = require("mongoose");

// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    id: String,
    days: [String],
    startTime: String,
    endTime: String,
    timeZone: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

scheduleSchema.statics = {
  /**
   * Create a Single New Schedule
   * @param {object} newSchedule - an instance of Schedule
   * @returns {Promise<Schedule, APIError>}
   */
  async createSchedule(newSchedule) {
    // const duplicate = await this.findOne({ id: newSchedule.id });
    // if (duplicate) {
    //   throw new APIError(
    //     409,
    //     "Schedule Already Exists",
    //     `There is already a schedule with id '${newSchedule.id}'.`
    //   );
    // }
    console.log({ newSchedule });
    const schedule = await newSchedule.save();
    return schedule.toObject();
  },
  /**
   * Delete a single Schedule
   * @param {String} id - the Schedule's id
   * @returns {Promise<Schedule, APIError>}
   */
  async deleteSchedule(id) {
    const deleted = await this.findOneAndRemove({ id });
    if (!deleted) {
      throw new APIError(
        404,
        "Schedule Not Found",
        `No schedule '${id}' found.`
      );
    }
    return deleted.toObject();
  },
  /**
   * Get a single Schedule by id
   * @param {String} id - the Schedule's id
   * @returns {Promise<Schedule, APIError>}
   */
  async readSchedule(id) {
    const schedule = await this.findOne({ id });

    if (!schedule) {
      throw new APIError(
        404,
        "Schedule Not Found",
        `No schedule '${id}' found.`
      );
    }
    return schedule.toObject();
  },
  /**
   * Get a list of Schedules
   * @param {Object} query - pre-formatted query to retrieve schedules.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Schedules, APIError>}
   */
  async readSchedules(query, fields, skip, limit) {
    const schedules = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!schedules.length) {
      return [];
    }
    return schedules.map((schedule) => schedule.toObject());
  },
  /**
   * Patch/Update a single Schedule
   * @param {String} id - the Schedule's id
   * @param {Object} scheduleUpdate - the json containing the Schedule attributes
   * @returns {Promise<Schedule, APIError>}
   */
  async updateSchedule(id, scheduleUpdate) {
    const schedule = await this.findOneAndUpdate({ id }, scheduleUpdate, {
      new: true,
    });
    if (!schedule) {
      throw new APIError(
        404,
        "Schedule Not Found",
        `No schedule '${id}' found.`
      );
    }
    return schedule.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!scheduleSchema.options.toObject) scheduleSchema.options.toObject = {};
scheduleSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  // delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
scheduleSchema.index({ id: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("Schedule", scheduleSchema);
