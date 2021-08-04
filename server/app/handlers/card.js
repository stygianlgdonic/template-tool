// npm packages
const { validate } = require("jsonschema");

// app imports
const { Card } = require("../models");
const { APIError, parseSkipLimit } = require("../helpers");
const { cardNewSchema, cardUpdateSchema } = require("../schemas");

/**
 * Validate the POST request body and create a new Card
 */
async function createCard(request, response, next) {
  const validation = validate(request.body, cardNewSchema);
  if (!validation.valid) {
    return next(
      new APIError(
        400,
        "Bad Request",
        validation.errors.map(e => e.stack).join(". ")
      )
    );
  }

  try {
    const newCard = await Card.createCard(new Card(request.body));
    return response.status(201).json(newCard);
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
    return response.json(card);
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
    return next(
      new APIError(
        400,
        "Bad Request",
        validation.errors.map(e => e.stack).join(". ")
      )
    );
  }

  try {
    const card = await Card.updateCard(name, request.body);
    return response.json(card);
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
    return response.json(deleteMsg);
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
    const cards = await Card.readCards({}, {}, skip, limit);
    return response.json(cards);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createCard,
  readCard,
  updateCard,
  deleteCard,
  readCards
};