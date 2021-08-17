// npm packages
const { validate } = require("jsonschema");

// app imports
const { Card } = require("../models");
const { APIError, parseSkipLimit } = require("../helpers");
const { Template } = require("../models");

const { cardNewSchema, cardUpdateSchema } = require("../schemas");
const { dataSetter } = require("./dataSetter");
const { ErrorHandler } = require("../helpers/error");

/**
 * Validate the POST request body and create a new Card
 */
async function createCard(request, response, next) {
  const validation = validate(request.body, cardNewSchema);
  if (!validation.valid) {
    // new APIError(
    //   400,
    //   "Bad Request",
    //   validation.errors.map((e) => e.stack).join(". ")
    // )
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const newCard = await Card.createCard(new Card(request.body));
    console.log(newCard);
    if (!!newCard.templateId) {
      const updatedUsaegeCount = await Template.updateTemplateCount(
        newCard.templateId,
        { $inc: { usageCount: 1 } }
      );
      console.log(updatedUsaegeCount);
    }
    const result = new dataSetter(
      newCard,
      "Successfully created new card",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Get a single card
 * @param {String} name - the name of the Card to retrieve
 */
async function readCard(request, response, next) {
  const { name } = request.params;
  try {
    const card = await Card.readCard(name);
    const result = new dataSetter(
      card,
      "Successfully read card",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Update a single card
 * @param {String} name - the name of the Card to update
 */
async function updateCard(request, response, next) {
  const { name } = request.params;

  const validation = validate(request.body, cardUpdateSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const card = await Card.updateCard(name, request.body);
    const result = new dataSetter(
      card,
      "Successfully updated card",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Remove a single card
 * @param {String} name - the name of the Card to remove
 */
async function deleteCard(request, response, next) {
  const { name } = request.params;
  try {
    const deleteMsg = await Card.deleteCard(name);
    const result = new dataSetter(
      deleteMsg,
      "Successfully deleted card",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * List all the cards. Query params ?skip=0&limit=1000 by default
 */
async function readCards(request, response, next) {
  /* pagination validation */
  let skip = parseSkipLimit(request.query.skip) || 0;
  let limit = parseSkipLimit(request.query.limit, 1000) || 1000;
  if (skip instanceof APIError) {
    return next(skip);
  } else if (limit instanceof APIError) {
    return next(limit);
  }

  try {
    let cards;

    if (!!request.query["labels"]) {
      labels = request.query["labels"].split(",");
      cards = await Card.readCards(
        { labels: { $all: labels } },
        {},
        skip,
        limit
      );
    } else {
      cards = await Card.readCards({}, {}, skip, limit);
    }

    const result = new dataSetter(
      cards,
      "Successfully read cards",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createCard,
  readCard,
  updateCard,
  deleteCard,
  readCards,
};
