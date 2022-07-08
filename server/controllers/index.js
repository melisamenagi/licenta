const auth = require("./auth")
const training = require("./training")
const intermediar = require("./intermediar")
const personal_trainings = require("./personal_trainings")
const indicator = require("./indicator")

const controllers = {
    auth,
    training,
    intermediar,
    personal_trainings,
    indicator
}

module.exports = controllers