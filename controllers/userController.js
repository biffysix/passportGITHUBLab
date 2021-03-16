const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};
 const getUserByGitHubIdOrCreate = (profile) => {
   console.log("findbygithub_ID");
   let user = userModel.findByProfile(profile.id)
   if (user) {
     return user;
   }
//   let createdUser = userModel.createUserWithGithubId(profile);
//   return createdUser;
 };

function isUserValid(user, password) {
  return user.password === password;
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserById,
  getUserByGitHubIdOrCreate,
};
