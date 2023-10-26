const express = require('express');
const router = express.Router();
const AuthPolicy = require("../policies/authPolicy");
const AuthController = require('../controllers/authController');
const verifyAuth = require("../middleware/verifyAuth");


module.exports =()=>{
     // Endpoint: GET /api/auth/users
router.get('/users',[verifyAuth.auth,
  verifyAuth.admin], AuthController.listUsers);
router.post("/register", AuthPolicy.validateRegister, AuthController.register);
router.post("/login", AuthPolicy.validateLogin, AuthController.login);



return router
}