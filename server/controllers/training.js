const TrainingDb = require("../models").Training;
const {Op} = require('sequelize');
const user = require("../models/user");
const TrainingFeedbackDb = require("../models").TrainingFeedback;
const PersonalTrainingsDb = require("../models").PersonalTrainings;
const User = require("../models").User

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
    postTrainingPersonal: async (req, res) => {
        User.findAll({
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            {comunitate: req.params.entitate},
                            {first_department: req.params.entitate},
                            {second_department: req.params.entitate},
                            {third_department: req.params.entitate}
                        ]
                    },
                    {
                        functie_id: 'O'
                    }
                ]
            }
        })
        // .then(users => res.status(200).send(users))
        .then(users => users.forEach(user => {
            PersonalTrainingsDb.create({
                user_id: user.id,
                entitate: req.params.entitate,
                denumire: req.body.denumire,
                data: req.body.data,
                speaker: req.body.speaker,
                done: false
            }).then(trainings => res.status(200).send({message: "Trainings added"}))
        }))
        .catch((err) => {
            res.status(500).send(err);
        })
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