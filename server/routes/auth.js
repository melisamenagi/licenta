const express = require("express")
const passport = require("passport")
const router = express.Router()

router.get("/login", 
    passport.authenticate('google', { scope: ["profile","email"]}))
router.get("/login/redirect",
    passport.authenticate('google', { 
        failureMessage: "Cannot login to Google",
        failureRedirect: "http://localhost:3001/api/auth/login",
        successRedirect: "http://localhost:3000/login/success"
    }),
    (req, res) => {
        console.log("User: ", req.user)
        res.send ("Thank you for signin in!")
    }
)

router.get('/', (req,res)=>res.send({message: "Auth"}))

router.get('/user', (req, res)=> res.json(req.user))

// router.get("/logout", (req, res)=>{
//     console.log("logging out")
//     res.cookie("session", {}, { maxAge: -1 })
//     res.redirect("/")
// })


module.exports = router