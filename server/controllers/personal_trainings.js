const User = require("../models").User
const TrainingDb = require("../models").Training;
const {Op} = require('sequelize');
const PersonalTrainingsDb = require("../models").PersonalTrainings;

const getEntities = async (req, res, user) => {
    console.log(user)
    let entities = [];
    entities.push(user.comunitate);
    entities.push(user.first_department);
    entities.push(user.second_department);
    entities.push(user.third_department);
    console.log(entities)
    // let trainings = []
    // entities.forEach(element => TrainingDb.findAll({
    //     where: {
    //         entitate: element
    //     }
    // }).then(training => trainings.push(training))
    // )
    // res.status(200).send(trainings)
    const promises = entities.map(async (element) => { 
        let t = []
        try {
             t = await TrainingDb.findAll({
                where: {
                    entitate: element
                }
            });
            console.log(t)
            return t;
          } catch (err) {
            res.status(500).send(err);
          }
    });
    Promise.all(promises)
        .then(trainings => {
            res.status(200).send(trainings);
        })
        .catch(err => {
            res.status(501).send(err);
        })
};


const controller = {
    // getTrainings: async (req, res) => {
    //     User.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then((user) => {
    //             // res.status(200).send(user);
    //             getEntities(req, res, user);
    //         })
    //         .catch(() => res.status(500).send({ message: "Database error" }));
    // }
    getTrainings: async (req, res) => {
        PersonalTrainingsDb.findAll({
            where: {
                [Op.and]: [
                    {
                        user_id: req.params.id
                    },
                    {
                        done: req.params.status === 'true'
                    }
                ]
            }
        })
            .then(trainings => res.status(200).send(trainings))
            .catch(() => res.status(500).send({ message: "Database error" }));
    },
    getFeedback: async (req, res) => {
        PersonalTrainingsDb.findOne({
          where: {
            [Op.and]: [
                {
                    denumire: { [Op.like]: `${req.params.denumire}%`}
                },
                {
                    user_id: req.params.userId
                },
                {
                    done: true
                }
             ]
          },
        })
          .then((feedback) => {
            res.status(200).send(feedback);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      },
      postFeedback: async (req, res) => {
        PersonalTrainingsDb.findOne({
            where: {
                [Op.and]: [
                    {
                        denumire: { [Op.like]: `${req.params.denumire}%`}
                    },
                    {
                        user_id: req.params.userId
                    },
                    {
                        done: false
                    }
                 ]
              },
            })
            .then((training) => {
                training.update({
                    tema: req.body.tema,
                    speaker_feedback: req.body.speaker,
                    raport: req.body.raport,
                    done: true
                }).then(res.status(200).send({message: "Feedback added"}))
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    },
    updateFeedback: async (req, res) => {
        PersonalTrainingsDb.update({ 
            tema: req.body.tema,
            speaker_feedback: req.body.speakerFb,
            raport: req.body.raport
         }, { 
             where: { 
                [Op.and]: [
                    {
                        denumire: { [Op.like]: `${req.params.denumire}%`}
                    },
                    {
                        user_id: req.params.userId
                    },
                    {
                        done: true
                    }
                 ]
                } 
            }
        )
        .then(() => {
            res.status(200).send({ message: "Info updated!" });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
    }
}

module.exports = controller;