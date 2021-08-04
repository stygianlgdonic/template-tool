// npm packages
const express = require("express");

// app imports
const { cardHandler, cardsHandler } = require("../handlers");

// globals
const router = new express.Router();
const { createCard, readCard, updateCard, deleteCard, readCards } = cardHandler;

/* All the Cards Route */
router
  .route("")
  .get(readCards)
  .post(createCard);

/* Single Card by Name Route */
router
  .route("/:name")
  .get(readCard)
  .patch(updateCard)
  .delete(deleteCard);

module.exports = router;
