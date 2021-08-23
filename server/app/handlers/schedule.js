//npm packages
const { validate } = require("jsonschema");
//app imports
const { Schedule } = require("../models");
const { APIError, parseSkipLimit } = require("../helpers");
const { dataSetter } = require("./dataSetter");
const { ErrorHandler } = require("../helpers/error");
const { scheduleNewSchema, scheduleUpdateSchema } = require("../schemas");

/**
 * Validate the POST request body and create a new Schedule
 */
async function createSchedule(request, response, next) {
  const validation = validate(request.body, scheduleNewSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const schedule = await Schedule.createSchedule(new Schedule(request.body));

    console.log(schedule);
    const result = new dataSetter(
      schedule,
      "Successfully created new schedule",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Get a single schedule
 * @param {String} id - the id of the Schedule to retrieve
 */
async function readSchedule(request, response, next) {
  const { id } = request.params;
  try {
    const templateCategory = await Schedule.readSchedule(id);
    const result = new dataSetter(
      templateCategory,
      "Successfully read template category",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createSchedule,
  readSchedule,
};
