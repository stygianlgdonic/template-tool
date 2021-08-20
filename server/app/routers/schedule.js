const express = require("express");

const { scheduleHandler } = require("../handlers");

const router = new express.Router();

const { createSchedule } = scheduleHandler;

router.route("").post(createSchedule);

module.exports = router;
