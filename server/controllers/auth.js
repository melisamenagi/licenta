const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config").keys
const User = require("../models").User
const MemberInfo = require("../models").MemberInfo

passport.use(new GoogleStrategy({
        clientID: keys.GOOGLE.clientID,
        clientSecret: keys.GOOGLE.clientSecret,
        callbackURL: "http://localhost:3001/api/auth/login/redirect",
        passReqToCallback: true
    },  async (req, accessToken, refreshToken, profile, cb) => {
            const defaultUser = {
                full_name: `${profile.name.givenName} ${profile.name.familyName}`,
                email: profile.emails[0].value,
                // picture: profile.photos[0].value,
                google_id: profile.id
            }
    
            const user = await User.findOrCreate({
                where: {google_id: profile.id}, 
                defaults: defaultUser
            })
            // .then(user => 
            //     MemberInfo.findOne({where:{ email: user.email}})
            //     )
            .catch(err=>{
                console.log("Error signing up", err)
                cb(err, null)
            })
    
            if(user && user[0])
                return cb(null, user && user[0])
        }
    ))    

// passport.use(
//     new GoogleStrategy(
//       {
//         clientID: keys.GOOGLE.clientID,
//         clientSecret: keys.GOOGLE.clientSecret,
//         callbackURL: "http://localhost:3001/api/auth/login/redirect",
//       },
//       (accesToken, refreshToken, profile, email, done) => {
//         User.findOne({
//           where: {
//             email: email.emails[0].value,
//           },
//         }).then((currentUser) => {
//           if (currentUser == null) {
//             const picture = email.photos[0].value.slice(0, -4) + "400-c";
  
//             User.create({
//               first_name: email.name.givenName,
//               last_name: email.name.familyName,
//               email: email.emails[0].value,
//             })
//               .then((user) => {
//                 save(picture, user.id);
//                 done(null, user);
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           } else {
//             done(null, currentUser);
//           }
//         });
//       }
//     )
//   );
  

passport.serializeUser((user, cb) => {
    console.log("Serializing user:", user)
    cb(null, user.id)
})

passport.deserializeUser(async (id, cb) => {
    const user = await User.findOne({where: {id} }).catch(err => {
        console.log("Error deserializing", err)
        cb(err, null)
    })
    
    console.log("Deserialized user", user)

    if(user)
        cb(null, user)
})