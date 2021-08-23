// npm packages
const { validate } = require("jsonschema");

// app imports
const { Svg } = require("../models");
const { APIError, parseSkipLimit } = require("../helpers");
const { svgNewSchema, svgUpdateSchema } = require("../schemas");
const { dataSetter } = require("./dataSetter");
const { ErrorHandler } = require("../helpers/error");

/**
 * Validate the POST request body and create a new TemplateCategory
 */
async function createSvg(request, response, next) {
  const validation = validate(request.body, svgNewSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const newSvg = await Svg.createSvg(new Svg(request.body));
    const result = new dataSetter(
      newSvg,
      "Successfully created new Svg",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Get a single Svg
 * @param {String} id - the id of the Svg to retrieve
 */
async function readSvg(request, response, next) {
  const { id } = request.params;
  try {
    const svg = await Svg.readSvg(id);
    const result = new dataSetter(svg, "read Svg", 201, "Success");
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

//readSvgs
/**
 * List all the Svgs. Query params ?skip=0&limit=1000 by default
 */
async function readSvgs(request, response, next) {
  /* pagination validation */
  let skip = parseSkipLimit(request.query.skip) || 0;
  let limit = parseSkipLimit(request.query.limit, 1000) || 1000;
  if (skip instanceof APIError) {
    return next(skip);
  } else if (limit instanceof APIError) {
    return next(limit);
  }

  try {
    let svgs = [];
    if (!!request.query["tags"]) {
      let tags = request.query["tags"].split(",");
      svgs = await Svg.readSvgs({ tags: { $all: tags } }, {}, skip, limit);
    } else {
      svgs = await Svg.readSvgs({}, {}, skip, limit);
    }
    const result = new dataSetter(
      svgs,
      "Successfully read Svgs",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Update a single Svg
 * @param {String} id - the id of the Svg to update
 */
async function updateSvg(request, response, next) {
  const { id } = request.params;

  const validation = validate(request.body, svgUpdateSchema);
  if (!validation.valid) {
    const error = new ErrorHandler(
      400,
      validation.errors.map((e) => e.stack).join(". "),
      "Bad Request"
    );
    return next(error);
  }

  try {
    const svg = await Svg.updateSvg(id, request.body);
    const result = new dataSetter(
      svg,
      "Successfully updated Svg",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

/**
 * Remove a single Svg
 * @param {String} id - the name of the Svg to remove
 */
async function deleteSvg(request, response, next) {
  const { id } = request.params;
  try {
    const deleteMsg = await Svg.deleteSvg(id);
    const result = new dataSetter(
      deleteMsg,
      "Successfully deleted Svg",
      201,
      "Success"
    );
    return response.json(result);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createSvg,
  readSvgs,
  readSvg,
  updateSvg,
  deleteSvg,
};
