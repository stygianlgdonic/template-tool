const express = require("express");

const { scheduleHandler } = require("../handlers");

const router = new express.Router();

const { createSchedule, readSchedule } = scheduleHandler;

router.route("").get(readSchedule).post(createSchedule);

module.exports = router;
