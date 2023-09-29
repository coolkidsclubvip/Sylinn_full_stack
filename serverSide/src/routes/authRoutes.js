const express = require('express');
const router = express.Router();
const AuthPolicy = require("../policies/authPolicy");
const AuthController = require('../controllers/authController');


module.exports =()=>{
     // Endpoint: GET /api/auth/users
router.get('/users', AuthController.listUsers);
router.post("/register", AuthPolicy.validateRegister, AuthController.register);
router.post("/login", AuthPolicy.validateLogin, AuthController.login);



return router
}