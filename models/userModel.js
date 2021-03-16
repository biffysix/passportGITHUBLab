const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
  },
  {
    id: 4,
    name: "biffysix",
    email: "mrbrucewong@gmail.com",
    password: "brucewong123!",
  },
  {
    id: 13098012,
    name: "Don Zhao",
    email: "donzhao@gmail.com",
    password: "donzhao123!",
  }
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
  //createUserWithGithubId: (id) => {
  findByProfile: (email) =>{
  const user = database.find((user) => user.email === email);
    if (user){
      return user;
    }
    throw new Error(`Couldn't find githubuser with id: ${email}`);
    
    // const user = { id: profile.id,
    // name: profile.displayName,};
    // database.push(user);
    // return user;
  }
};

module.exports = { database, userModel }
