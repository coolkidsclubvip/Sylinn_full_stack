const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

module.exports =()=>{
     // Endpoint: GET /api/auth/users
router.get('/users', AuthController.listUsers)


return router
}