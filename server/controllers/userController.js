const User = require('../models/userModel.js');
const { db } = require('../models/userModel.js');
// const db = require('mongoose');

const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next(`Error in userController.getAllUsers: ${JSON.stringify(err)}`);

    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = (req, res, next) => {
  // write code here
  const newUser = req.body;
  console.log("body: ", req.body)
  User.create(newUser)
    .then((result) => {
      console.log(result);
      res.locals.user = result;
      return next();
      // we might need to do something after saving to database later
    })
    .catch((err) => {
      return next({
        userCreated: false,
        log: 'No User info was entered!!',
        message: { 'err': `${err} Error occurred when user tries to create user!` },
      });
    })
    //console.log(user);
  // res.status(200);
  // return next();
};



userController.verifyUser = (req, res, next) => {
  // write code here

console.log(req.body)
  User.findOne(req.body, (err, results) => {
    if (err) {
      next({'log': 'error in verifyUser',
            'message': err});
    } else if (results) {
      // if (req.body.username === results._doc.username) {
    
      // }
      res.locals.user = results;
      next();
    } 
  })

}

module.exports = userController;
