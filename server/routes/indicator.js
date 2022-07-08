const express = require("express");
const router = express.Router();
const indicatorController = require("../controllers").indicator;

router.post("/:entitate", indicatorController.postIndicator);
router.get("/:id", indicatorController.getIndicators);
router.patch("/:entitate/:indicator", indicatorController.updateIndicator);
router.post("/feedback/:id", indicatorController.postFeedback);
router.get("/management/:entitate/:indicator", indicatorController.getFeedback);

module.exports = router;