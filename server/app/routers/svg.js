const express = require("express");

const { svgHandler } = require("../handlers");

const router = new express.Router();

const { createSvg, readSvgs, readSvg, updateSvg, deleteSvg } = svgHandler;

router.route("").get(readSvgs).post(createSvg);

router.route("/:id").get(readSvg).patch(updateSvg).delete(deleteSvg);

module.exports = router;
