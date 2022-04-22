const UserDb = require("../models").User;
const {Op} = require('sequelize');
const IntermediarDb = require("../models").Intermediar

const controller = {
    getMembersByComunitate: async (req, res) => {
        UserDb.findAll({
            where: {
                comunitate: req.params.entitate
            }
        })
            .then((members) => {
                res.status(200).send(members);
            })
            .catch(() => res.status(500).send({ message: "Database error" }));
    },
    getMembersByDepartament: async (req, res) => {
        UserDb.findAll({
            where: {
                [Op.or]: [
                    {
                        first_department: { [Op.like]: `${req.params.entitate}%`}
                    },
                    {
                        second_department: { [Op.like]: `${req.params.entitate}%`}
                    },
                    {
                        third_department: { [Op.like]: `${req.params.entitate}%`}
                    }
                 ]
            }
        })
            .then((members) => {
                res.status(200).send(members);
            })
            .catch(() => res.status(500).send({ message: "Database error" }));
    },
    postFeedbackManagement: async (req, res) => {
        IntermediarDb.create({
            member_id: req.params.id,
            strengths: req.body.strengths,
            weaknesses: req.body.weaknesses,
            evolutie: req.body.evolutie,
            isEligible: req.body.isEligible,
            functie: req.body.functie,
            observatii: req.body.observatii
        })
            .then((feedback)=>res.status(200).send(feedback))
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}

module.exports = controller;