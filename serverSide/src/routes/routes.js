const express = require('express');
const router= express.Router();
//import sub routes
const authRoutes = require('./authRoutes');

module.exports = ()=>{
  // Home:
     router.get("/", (req, res, next) => {
       res.send("welcome to Sylinn API index");
     });

     // sub-routes:
     router.use('/auth',authRoutes());



 


     return router
}

