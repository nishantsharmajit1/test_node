const express = require('express');

const userRouter = express.Router();

const userController = require("../controller/userController");

// Routing

// Post -> Taking data into req
// Get -> Sending data to client


// Secondary Routing
userRouter.post('/create-user',userController.createUser)


module.exports = userRouter