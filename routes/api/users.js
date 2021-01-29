const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../../db/models');
const { User, Post, Tag, Comment, Like, Follow, Reblog } = db;
const { getUserToken, requireAuth } = require('../../utils/auth');

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

// logs the user in
router.post('/api/users/token', asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    // error handling
    const user = await User.findOne({ where: { email } })
    // check hashed password
    const passwordMatch = await bcrypt.compareSync(password, user.password.toString());
    if (passwordMatch) {
        const token = getUserToken(user);
        if (!token) {
            return next();
        } else {
            res.status(201).json({ token, userId: user.id });
        }
    } else {
        // handle wrong pw
        res.status(401).json({ msg: 'Password did not match. Please try again.' })
    }
}))

// creates a new user
router.post('/api/users', asyncHandler(async (req, res, next) => {
    const { email, password, username } = req.body;
    // error handling
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, username });
    const token = getUserToken(user);
    res.json({ token, userId: user.id })
}))

// changes a user's details
router.put('/api/users/:userId', requireAuth, asyncHandler(async (req, res, next) => {
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

// follow a user
router.post(`/api/users/:userId/follow`, asyncHandler(async (req, res, next) => {
    const followedUserId = parseInt(req.params.userId, 10);
    const { userId } = req.body;
    const follow = await Follow.create({ followerId: userId, followedUserId });
    res.json({ msg: 'User successfully followed!' })
}))

// unfollow a user
router.delete(`/api/users/:userId/follow`, asyncHandler(async (req, res, next) => {
    const followedUserId = parseInt(req.params.userId, 10);
    const { userId } = req.body;
    await Follow.destroy({ where: { followerId: userId, followedUserId } })
    res.json({ msg: 'User successfully followed!' })
}))

// gets all of the posts the current user liked
router.get('/api/users/:userId/likes', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);
    const likes = await Like.findAll({ where: { userId }, include: Post, order: [['createdAt', 'DESC']] });
    const posts = {};
    likes.forEach(like => posts[like.Post.id] = like.Post)
    res.json({ posts }) 
}))

// gets all of the users user follows
router.get('/api/users/:userId/follows', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);
    const user = await User.findByPk(userId, { include: [{ model: Follow }] });
    let followIds = [];
    user.Follows.forEach(followId => followIds.push(followId.followedUserId));
    const users = await User.findAll({ where: { id: followIds }, order: [['username', 'DESC']] });
    res.json({ users }) 
}))


module.exports = router;
