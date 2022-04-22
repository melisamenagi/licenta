const TrainingDb = require("../models").Training;
const {Op} = require('sequelize');
const TrainingFeedbackDb = require("../models").TrainingFeedback;

const controller = {
    getTrainings: async (req, res) => {
        TrainingDb.findAll({
            where: {
                entitate: req.params.entitate
            }
        })
            .then((trainings) => {
                res.status(200).send(trainings);
            })
            .catch(() => res.status(500).send({ message: "Database error" }));
    },
    postTraining: async (req, res) => {
        TrainingDb.create({
            entitate: req.params.entitate,
            denumire: req.body.denumire,
            data: req.body.data,
            speaker: req.body.speaker,
        })
            .then((training)=>res.status(200).send(training))
            .catch((err) => {
                res.status(500).send(err);
            });
    },
    postFeedback: async (req, res) => {
        TrainingFeedbackDb.create({
            training_id: req.params.id,
            tema: req.body.tema,
            speaker: req.body.speaker,
            raport: req.body.raport,
        })
            .then((feedback)=>res.status(200).send(feedback))
            .catch((err) => {
                res.status(500).send(err);
            });
    },
    getFeedback: async (req, res) => {
        TrainingFeedbackDb.findAll({
          where: {
            training_id: req.params.id,
          },
        })
          .then((feedback) => {
            res.status(200).send(feedback);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
}

module.exports = controller;