const express = require('express');
const router = express.Router();


// logs the user in
router.post('/api/users/token', function(req, res, next) {
  
});

// creates a new user
router.post('/api/users', (req, res, next) => {

})

// changes a user's details
router.put('/api/users/:userId', (req, res, next) => {

})

// gets all of the posts of a given user, as well as user's info
router.get('/api/users/:userId/posts', (req, res, next) => {

})

// gets all of the posts the current user liked
router.get('/api/users/:userId/likes', (req, res, next) => {

})

module.exports = router;
