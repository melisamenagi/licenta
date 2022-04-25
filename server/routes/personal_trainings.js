const express = require("express");
const router = express.Router();
const personal_trainingsController = require("../controllers").personal_trainings;

router.get("/:id/:status", personal_trainingsController.getTrainings);
router.get("/:userId/feedback/:denumire", personal_trainingsController.getFeedback);
router.post("/:userId/feedback/:denumire", personal_trainingsController.postFeedback);
router.patch("/:userId/feedback/:denumire", personal_trainingsController.updateFeedback);

module.exports = router;