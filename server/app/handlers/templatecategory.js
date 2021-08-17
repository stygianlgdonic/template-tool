// npm packages
const { validate } = require("jsonschema");

// app imports
const { TemplateCategory } = require("../models");
const { APIError, parseSkipLimit } = require("../helpers");
const {
  templateCategoryNewSchema,
  templateCategoryUpdateSchema,
} = require("../schemas");
const { dataSetter } = require("./dataSetter");
const { ErrorHandler } = require("../helpers/error");

/**
 * Validate the POST request body and create a new TemplateCategory
 */
async function createTemplateCategory(request, response, next) {
  const validation = validate(request.body, templateCategoryNewSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const newTemplateCategory = await TemplateCategory.createTemplateCategory(
      new TemplateCategory(request.body)
    );
    const result = new dataSetter(
      newTemplateCategory,
      "Successfully created new template",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Get a single templateCategory
 * @param {String} name - the name of the TemplateCategory to retrieve
 */
async function readTemplateCategory(request, response, next) {
  const { name } = request.params;
  try {
    const templateCategory = await TemplateCategory.readTemplateCategory(name);
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

/**
 * Update a single templateCategory
 * @param {String} name - the name of the TemplateCategory to update
 */
async function updateTemplateCategory(request, response, next) {
  const { name } = request.params;

  const validation = validate(request.body, templateCategoryUpdateSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const templateCategory = await TemplateCategory.updateTemplateCategory(
      name,
      request.body
    );
    const result = new dataSetter(
      templateCategory,
      "Successfully updated template category",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Remove a single templateCategory
 * @param {String} name - the name of the TemplateCategory to remove
 */
async function deleteTemplateCategory(request, response, next) {
  const { name } = request.params;
  try {
    const deleteMsg = await TemplateCategory.deleteTemplateCategory(name);
    const result = new dataSetter(
      deleteMsg,
      "Successfully deleted template category",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * List all the templateCategorys. Query params ?skip=0&limit=1000 by default
 */
async function readTemplateCategorys(request, response, next) {
  /* pagination validation */
  let skip = parseSkipLimit(request.query.skip) || 0;
  let limit = parseSkipLimit(request.query.limit, 1000) || 1000;
  if (skip instanceof APIError) {
    return next(skip);
  } else if (limit instanceof APIError) {
    return next(limit);
  }

  try {
    const templateCategorys = await TemplateCategory.readTemplateCategorys(
      {},
      {},
      skip,
      limit
    );
    const result = new dataSetter(
      templateCategorys,
      "Successfully read template categories",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createTemplateCategory,
  readTemplateCategory,
  updateTemplateCategory,
  deleteTemplateCategory,
  readTemplateCategorys,
};
