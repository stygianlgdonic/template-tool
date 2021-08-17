// npm packages
const { validate } = require("jsonschema");

// app imports
const { Thing } = require("../models");
const { APIError } = require("../helpers");
const { thingNewSchema, thingUpdateSchema } = require("../schemas");
const { dataSetter } = require("./dataSetter");
const { ErrorHandler } = require("../helpers/error");

/**
 * Validate the POST request body and create a new Thing
 */
async function createThing(request, response, next) {
  const validation = validate(request.body, thingNewSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const newThing = await Thing.createThing(new Thing(request.body));
    const result = new dataSetter(
      newThing,
      "Successfully created new thing",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Get a single thing
 * @param {String} name - the name of the Thing to retrieve
 */
async function readThing(request, response, next) {
  const { name } = request.params;
  try {
    const thing = await Thing.readThing(name);
    const result = new dataSetter(
      thing,
      "Successfully read new thing",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Update a single thing
 * @param {String} name - the name of the Thing to update
 */
async function updateThing(request, response, next) {
  const { name } = request.params;

  const validation = validate(request.body, thingUpdateSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const thing = await Thing.updateThing(name, request.body);
    const result = new dataSetter(
      thing,
      "Successfully updated thing",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Remove a single thing
 * @param {String} name - the name of the Thing to remove
 */
async function deleteThing(request, response, next) {
  const { name } = request.params;
  try {
    const deleteMsg = await Thing.deleteThing(name);
    const result = new dataSetter(
      deleteMsg,
      "Successfully deleted thing",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createThing,
  readThing,
  updateThing,
  deleteThing,
};
