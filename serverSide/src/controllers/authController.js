const { db } = require("../config/db");
const ApiError = require("../utils/ApiError");

const {
  findUser,
  hashPassword,
  comparePassword,
  userDetailsToJSON,
  jwtSignUser,
} = require("../utils/authServices");
// const usersRef = db.collection("users");
// const debugAuth = require("debug")("app:authcontroller");

module.exports = {
  // [1] GET ALL Users
  async listUsers(req, res, next) {
    // Store the document query in variable & call GET method
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    // [400 ERROR] Check for User Asking for Non-Existent Documents
    if (snapshot.empty) {
      return next(
        ApiError.badRequest("The users you were looking for do not exist")
      );

      // SUCCESS: Push object properties to array and send to client
    } else {
      let users = [];
      snapshot.forEach((doc) => {
        // here put the OUTSIDE id inside this user object:
        users.push({
          id: doc.id,
          username: doc.data().username,
          email: doc.data().email,
          isAdmin: doc.data().isAdmin,
        });
      });
      res.send(users);
    }
  },

  // Auth register: new user sign up ----POST /api/auth/register
  async registerUser(req, res, next) {
    try {
      const { username, email, password, isAdmin } = req.body;

      // Validation: Block matching user email

      const usersRef = db.collection("users");
      const snapshot = await usersRef.get();
      let users = [];
      snapshot.forEach((doc) => {
        // here put the OUTSIDE id inside this user object:
        users.push({
          id: doc.id,
          username: doc.data().username,
          email: doc.data().email,
          isAdmin: doc.data().isAdmin,
        });
      });

      // search the users array for duplicate
      const userMatch = users.filter((user) => user.email === email);
      console.log("userMatch is:", userMatch);
      if (userMatch.length >= 1) {
        return next(ApiError.badRequest("This email is already in use"));
      }

      // Save new user to database
      const response = await usersRef.add({
        username: username,
        email: email,
        password: await hashPassword(password),
        isAdmin: isAdmin,
      });

      console.log(`Success - User: ${username} registered!`);

      // convert the user details to a json object
      const userJson = await userDetailsToJSON(response.id);

      //Mint & return the user object+token without password

      res.send({
        token: jwtSignUser(userJson),
        user: userJson,
      });
    } catch (err) {
      return next(
        ApiError.internalError("Your profile could not be registered", err)
      );
    }
  },

  //   async login(req, res, next) {
  //     try {
  //       const { email, password } = req.body;
  //       const userMatch = await findUser(email);
  //       if (userMatch.length === 0) {
  //         return next(ApiError.badRequest("the email does not exist"));
  //         // Authenticate with the password check
  //       }
  //       const passwordMatch = await comparePassword(userMatch[0], password);
  //       if (!passwordMatch) {
  //         return next(
  //           ApiError.badRequest("the credentials do not match our record")
  //         );
  //       }
  //       console.log(
  //         `sucess- User:${userMatch[0].name} is logged in successfully`
  //       );
  //       res.send("you are authenticated!!!!!!");
  //       res.send("login route hit");
  //     } catch (err) {
  //       return next(ApiError.internal("We are unable to log you in", err));
  //     }
  //   },

  //   async deleteUser(req, res,next) {
  //     try{
  //       const { email } = req.body;
  //       const userMatch = await findUser(email)
  //       console.log("user match is",userMatch);
  //        if (userMatch.length === 0) {
  //         return next(ApiError.badRequest("the email does not exist"))  }
  //         const response = await usersRef.doc(userMatch[0].id).delete();

  //         res.send(`${email} is deleted successfully!`);
  //        }
  //     catch (err){
  //       return next(ApiError.internal(`${req.body.username} can not be deleted`, err))
  //     }
  //   }
};
