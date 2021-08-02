// npm packages
const { validate } = require("jsonschema");

// app imports
const { Template } = require("../models");
const { APIError, parseSkipLimit } = require("../helpers");
const { templateNewSchema, templateUpdateSchema } = require("../schemas");

/**
 * Validate the POST request body and create a new Template
 */
async function createTemplate(request, response, next) {
  const validation = validate(request.body, templateNewSchema);
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
    const newTemplate = await Template.createTemplate(new Template(request.body));
    return response.status(201).json(newTemplate);
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
    return response.json(template);
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
    return next(
      new APIError(
        400,
        "Bad Request",
        validation.errors.map(e => e.stack).join(". ")
      )
    );
  }

  try {
    const template = await Template.updateTemplate(name, request.body);
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
    return response.json(deleteMsg);
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
    console.log({templates})
    return response.json(templates);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createTemplate,
  readTemplate,
  updateTemplate,
  deleteTemplate,
  readTemplates
};
