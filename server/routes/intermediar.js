const express = require("express");
const router = express.Router();
const intermediarController = require("../controllers").intermediar;

router.get("/comunitate/:entitate",intermediarController.getMembersByComunitate);
router.get("/departament/:entitate",intermediarController.getMembersByDepartament);
router.post("/management/:id", intermediarController.postFeedbackManagement);

module.exports = router;