const express = require("express")
const passport = require("passport")
const router = require("./routes")
require("./controllers/auth")
const keys = require("./config").keys
const session = require("express-session")
var cookieParser = require('cookie-parser');
const cookieSession = require("cookie-session")
const cors = require("cors")
const bodyParser = require("body-parser");

const app = express()
const port = 3001
app.use(cors({
    origin:'http://localhost:3000', 
    credentials:true,          
}));
app.use(bodyParser.json());

// app.use(session({ secret: 'Login google secret' }))
app.use(cookieParser())
app.use(cookieSession({
    maxAge: 24 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))


// require('./controllers').auth(passport)
app.use(passport.initialize())
app.use(passport.session())


app.get("/", (req, res) => res.send({message: "Acesta este licenta Melisei!"}))

app.use('/api', router)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
