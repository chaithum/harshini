
const express = require('express')

const {signUp,logIn,forgot_password} =require('../controller/Admin-controller')

const AdminRouter=express.Router();

AdminRouter.post("/signup", signUp)
AdminRouter.post("/login", logIn)
AdminRouter.put("/forget",forgot_password)

module.exports = AdminRouter