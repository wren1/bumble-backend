const express = require('express');
const router = express.Router();


// get all of the posts of the current user, as well 
// as the posts of the users that the user follows
router.get('/api/posts/:userId', (req, res, next) => {
    
});

// create a new post
router.post('/api/posts', (req, res, next) => {

})

// change a post, only if current user is owner of post
router.put('/api/posts/:postId', (req, res, next) => {

})

// delete a post, if the current user is the one that posted the post
router.delete('/api/posts/:postId', (req, res, next) => {

})

// user likes a post
router.post('/api/posts/:postId/like', (req, res, next) => {

})

// user unlikes a post, if the post is a post that they'vew laready liked before
router.delete('/api/posts/:postId/like', (req, res, next) => {

})

// user reblogs a post
router.post('/api/posts/:postId/reblog', (req, res, next) => {

})

// get all the posts that match the search query
router.get('/api/search/:query', (req, res, next) => {

})

// get all the posts that have the specified tag
router.get('/api/posts/:tag', (req, res, next) => {

})

// gets all the comments

module.exports = router;

