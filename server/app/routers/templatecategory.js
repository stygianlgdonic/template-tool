// npm packages
const express = require("express");

// app imports
const {
  templateCategoryHandler,
  templateCategorysHandler,
} = require("../handlers");

// globals
const router = new express.Router();
const {
  createTemplateCategory,
  readTemplateCategory,
  updateTemplateCategory,
  deleteTemplateCategory,
  readTemplateCategorys,
} = templateCategoryHandler;

/* All the TemplateCategorys Route */
router.route("").get(readTemplateCategorys).post(createTemplateCategory);

/* Single TemplateCategory by Name Route */
router
  .route("/:name")
  .get(readTemplateCategory)
  .patch(updateTemplateCategory)
  .delete(deleteTemplateCategory);

module.exports = router;
