const IndicatorDb = require("../models").Indicator;
const IndicatorFeedbackDb = require("../models").IndicatorFeedback;
const {Op} = require('sequelize');
const UserDb = require("../models").User

const controller = {
    postIndicator: async (req, res) => {
        IndicatorDb.create({
            indicator: req.body.indicator,
            entitate: req.params.entitate
        })
        .then((indicator)=>res.status(200).send(indicator))
        .catch((err) => {
            res.status(500).send(err);
        });
    },
    getIndicators: async (req, res) => {
      UserDb.findOne({
        where: {
            id: req.params.id
        }
      })
      .then((user) => {
        IndicatorDb.findAll({
          where: {
              [Op.and] : [
                {ended: false}, 
                {
                  [Op.or]: [
                    {entitate: user.comunitate},
                    {entitate: user.first_department},
                    {entitate: user.second_department},
                    {entitate: user.third_department},
                    {entitate: "VIP"}
                ]}
              ]
          }
        }).then((indicators) => {
          res.status(200).send(indicators);
        })
      })
      .catch((err) => {
        res.status(500).send(err);
      });
    },
    updateIndicator: async (req, res) => {
      IndicatorDb.update({
        ended: true
      }, {
        where: {
          [Op.and]: [
            {entitate: req.params.entitate},
            {indicator: req.params.indicator}
          ]
        }
      })
      .then(() => {
        res.status(200).send({ message: "Indicator updated!"})
      })
      .catch((err) => {
        res.status(500).send(err)
      })
    },
    postFeedback: async (req, res) => {
      IndicatorFeedbackDb.create({
          indicator_id: req.params.id,
          scor: req.body.scor
      })
      .then((feedback)=>res.status(200).send(feedback))
      .catch((err) => {
          res.status(500).send(err);
      });
    },
    getFeedback: async (req, res) => {
      IndicatorDb.findOne({
        where: {
            [Op.and]: [
              {
                  entitate: req.params.entitate
              },
              {
                  indicator: req.params.indicator
              }
          ]
        }
      })
      .then((indicator) => {
        IndicatorFeedbackDb.findAll({
          where: {
            indicator_id: indicator.id
          }
        })
        .then((scores) => {
          res.status(200).send(scores);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
      })
      .catch((err) => {
        console.log(err)
      })
    }
}

module.exports = controller;