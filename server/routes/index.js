const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const trainingRouter = require("./training");
const intermediarRouter = require("./intermediar");
const personal_trainingsRouter = require("./personal_trainings");
const indicatorRouter = require("./indicator");

router.use("/auth", authRouter);
router.use("/training", trainingRouter);
router.use("/intermediar", intermediarRouter);
router.use("/personal", personal_trainingsRouter);
router.use("/indicator", indicatorRouter);

module.exports = router;