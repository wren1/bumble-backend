const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../../db/models');
const { User, Post, Tag, Comment, Like, Follow, Reblog } = db;

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

// logs the user in
router.post('/api/users/token', asyncHandler(async (req, res, next) => {
    const { email, password, username } = req.body;
    const user = await User.findOne({ where: { email, username } })
    // check hashed password
    // error handling
    res.status(201).json({ id: user.id });
}))

// creates a new user
router.post('/api/users', asyncHandler(async (req, res, next) => {
    const { email, password, username } = req.body;
    // error handling
    // hash password
    const user = await User.create({ email, hashedPassword, username });
    res.json({ id: user.id })
}))

// changes a user's details
router.put('/api/users/:userId', asyncHandler(async (req, res, next) => {
    const { username, profilePic, banner, aboutTitle, aboutContent } = req.body;
    // handle errors
    const userId = parseInt(req.params.userId, 10);
    const user = await User.findByPk(userId);
    const updatedUser = await user.update({ username, profilePic, banner, aboutTitle, aboutContent });
    res.json({ updatedUser });

}))

// gets all of the posts of a given user, as well as user's info
router.get('/api/users/:userId/posts', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);
    const user = await User.findByPk(userId, { include: [{ model: Post }] });
    const { username, profilePic, banner, aboutTitle, aboutContent } = user;
    const posts = user.Posts;
    res.json({ 
        id: userId, username, profilePic, banner, aboutTitle, aboutContent, posts
     })
}))

// gets all of the posts the current user liked
router.get('/api/users/:userId/likes', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);
    const likes = await Like.findAll({ where: { userId }, include: Post, order: [['createdAt', 'DESC']] });
    const posts = {};
    likes.forEach(like => posts[like.Post.id] = like.Post)
    res.json({ posts }) 
}))

module.exports = router;
