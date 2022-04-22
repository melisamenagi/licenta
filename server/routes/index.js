const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const trainingRouter = require("./training");
const intermediarRouter = require("./intermediar");

router.use("/auth", authRouter);
router.use("/training", trainingRouter);
router.use("/intermediar", intermediarRouter);


module.exports = router;