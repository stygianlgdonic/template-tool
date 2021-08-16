// npm packages
const express = require("express");

// app imports
const { templateHandler, templatesHandler } = require("../handlers");

// globals
const router = new express.Router();
const {
  createTemplate,
  readTemplate,
  updateTemplate,
  deleteTemplate,
  readTemplates,
} = templateHandler;

/* All the Templates Route */
router.route("").get(readTemplates).post(createTemplate);

/* Single Template by Name Route */
router
  .route("/:name")
  .get(readTemplate)
  .patch(updateTemplate)
  .delete(deleteTemplate);

module.exports = router;
