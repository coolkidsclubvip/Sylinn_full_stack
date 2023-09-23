const { db } = require("../config/db");
const config = require("../config/config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const usersRef = db.collection("users");
module.exports = {
  ///通过email查找对应的user
  async findUser(email) {
    const snapshot = await usersRef.get();

    let users = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        username: doc.data().username,
        email: doc.data().email,
        password: doc.data().password,
        isAdmin: doc.data().isAdmin,
      });
    });
    const userMatch = users.filter((user) => email === user.email);
    return userMatch;
  },

  async hashPassword(password) {
    //encrypt our password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  },

  async userDetailsToJSON(id) {
    // remove the password from the user details to be returned
    const user = await usersRef.doc(id).get();

    const userJson = _.omit(
      {
        id: id,
        ...user.data(),
      },
      "password"
    );
    return userJson;
  },

  // ****Make the TOKEN****:  Mint & return the user object+token without password
  jwtSignUser(user) {
    const payload = user;
    const secret = config.authentication.jwtSecret;
    const tokenExpireTime = 60 * 60 * 24;

    const token = jwt.sign(payload, secret, { expiresIn: tokenExpireTime }); //注意这里expire时间是一个对象
    return token;
  },

  async comparePassword(user, password) {
    const hashPassword = user[0].password;
    const passwordMatch = await bcrypt.compare(password, hashPassword);
    return passwordMatch;
  },
};
