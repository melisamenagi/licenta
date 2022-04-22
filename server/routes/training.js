const express = require("express");
const router = express.Router();
const trainingController = require("../controllers").training;

router.get("/:entitate", trainingController.getTrainings);
router.post("/:entitate", trainingController.postTraining); 
router.post("/:entitate/:id", trainingController.postFeedback);
router.get("/management/:id", trainingController.getFeedback);

module.exports = router;