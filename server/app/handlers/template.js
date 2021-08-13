// npm packages
const { validate } = require("jsonschema");

// app imports
const { Template, TemplateCategory } = require("../models");
const { APIError, parseSkipLimit } = require("../helpers");
const { templateNewSchema, templateUpdateSchema } = require("../schemas");
const { dataSetter } = require("./dataSetter");
const { ErrorHandler } = require("../helpers/error");

/**
 * Validate the POST request body and create a new Template
 */
async function createTemplate(request, response, next) {
  const validation = validate(request.body, templateNewSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const templateId = await Template.createTemplate(
      new Template(request.body)
    );
    const { categoryId } = new Template(request.body);
    if (templateId && categoryId) {
      const templateCategoryData = await TemplateCategory.readTemplateCategory(
        categoryId
      );
      if (templateCategoryData) {
        const { templateList } = templateCategoryData;
        if (templateList) {
          templateList.push(templateId);
          await TemplateCategory.updateTemplateCategory(
            categoryId,
            templateCategoryData
          );
        }
      }
    }
    console.log(categoryId);
    const result = new dataSetter(
      templateList,
      "Successfully added Template",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Get a single template
 * @param {String} name - the name of the Template to retrieve
 */
async function readTemplate(request, response, next) {
  const { name } = request.params;
  try {
    const template = await Template.readTemplate(name);
    const result = new dataSetter(template, "readTemplate", 201, "Success");
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Update a single template
 * @param {String} name - the name of the Template to update
 */
async function updateTemplate(request, response, next) {
  const { name } = request.params;

  const validation = validate(request.body, templateUpdateSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const template = await Template.updateTemplate(name, request.body);
    const result = new dataSetter(
      template,
      "Successfully updated Template",
      201,
      "Success"
    );
    return response.json(template);
  } catch (err) {
    return next(err);
  }
}

/**
 * Remove a single template
 * @param {String} name - the name of the Template to remove
 */
async function deleteTemplate(request, response, next) {
  const { name } = request.params;
  try {
    const deleteMsg = await Template.deleteTemplate(name);
    const result = new dataSetter(
      deleteMsg,
      "Successfully deleted Template",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * List all the templates. Query params ?skip=0&limit=1000 by default
 */
async function readTemplates(request, response, next) {
  /* pagination validation */
  let skip = parseSkipLimit(request.query.skip) || 0;
  let limit = parseSkipLimit(request.query.limit, 1000) || 1000;
  if (skip instanceof APIError) {
    return next(skip);
  } else if (limit instanceof APIError) {
    return next(limit);
  }

  try {
    const templates = await Template.readTemplates({}, {}, skip, limit);
    const result = new dataSetter(
      templates,
      "Successfully read Templates",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createTemplate,
  readTemplate,
  updateTemplate,
  deleteTemplate,
  readTemplates,
};
