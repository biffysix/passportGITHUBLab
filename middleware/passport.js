require('dotenv').config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controllers/userController");
const GitHubStrategy = require('passport-github').Strategy;
//added GitHubStrategy above in passport.js

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = userController.getUserByEmailIdAndPassword(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);


passport.serializeUser(function (user, done) {
  console.log("serial");
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  let user = userController.getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});



let githublogin = new GitHubStrategy(
  {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/auth/github/callback"
},//from authRoute.js
function(accessToken, refreshToken, profile, done) {
//     let user = userController.getUserByGitHubIdOrCreate(profile);
//       return done(null, user);
//      }
// );
   //use the profile info (mainly profile id) to check if user is registered in our db
   //User.findOrCreate({ githubId: profile.id }, function (err, user){
       return done(null, profile);
     //});
     }
   );
//console.log(require('dotenv').config());
module.exports = passport.use(githublogin).use(localLogin);
//above returns an instance of passport that has been configured
// with new githubstrategy and local strategy