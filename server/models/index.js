const db =  require('../config').db
const Sequelize = require("sequelize")
const UserModel = require("./user")
const MemberInfoModel = require("./member_info")
const ComunitateModel = require("./comunitate")
const TrainingModel = require("./training")
const TrainingFeedbackModel = require("./training_feedback")
const IntermediarModel = require("./intermediar")

const User = UserModel(db, Sequelize)
const MemberInfo = MemberInfoModel(db, Sequelize)
const Comunitate = ComunitateModel(db, Sequelize)
const Training = TrainingModel(db, Sequelize)
const TrainingFeedback = TrainingFeedbackModel(db, Sequelize)
const Intermediar = IntermediarModel(db, Sequelize)

module.exports = {
    User,
    MemberInfo,
    Comunitate,
    Training,
    TrainingFeedback,
    Intermediar
}