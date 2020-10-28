const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const db = require('../../db/models');
const { User, Comment, Follow, Like, Post, Reblog, Tag } = db;
const { requireAuth, getUserToken } = require('../../utils/auth');

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

// get all of the posts of the current user, as well 
// as the posts of the users that the user follows
router.get('/api/posts/:userId', requireAuth, asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);
    let users = await Follow.findAll({ where: { followerId: userId } });
    const follows = Object.values(users).map(user => user.followedUserId);
    let posts = await Post.findAll({where: { userId: [userId, ...follows] }, order: [['updatedAt', 'DESC']]});
    res.json({ posts });
}))

// create a new post
router.post('/api/posts', requireAuth, asyncHandler(async (req, res, next) => {
    const { userId, type, title, content, imgUrl } = req.body;
    // handle errors
    const post = await Post.create({ userId, type, title, content, imgUrl });
    res.status(201).json({ msg: 'Post created successfully.' })
}))

// change a post, only if current user is owner of post
router.put('/api/posts/:postId', requireAuth, asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.postId, 10);
    const { userId, type, title, content, imgUrl } = req.body;
    // handle errors
    const post = await Post.findByPk(id);
    const newPost = await post.update({ userId, type, title, content, imgUrl });
    res.json({ newPost })
}))

// delete a post, if the current user is the one that posted the post
router.delete('/api/posts/:postId', requireAuth, asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.postId, 10);
    const post = await Post.findByPk(id);
    await post.destroy();
    res.status(201).json({ msg: 'Post deleted successfully.' });
}));

// user likes a post
router.post('/api/posts/:postId/like', requireAuth, asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);
    const { userId } = req.body;
    const like = await Like.create({ userId, postId });
    res.json({ like });
}))

// user unlikes a post, if the post is a post that they'vew laready liked before
router.delete('/api/posts/:postId/like', requireAuth, asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);
    const { userId } = req.body;
    const like = Like.findOne({ where: { [Op.and]: [ { userId }, { postId } ] } } );
    await like.destroy();
    res.status(201).json({ msg: 'Like successfully removed.' });
}))

// user reblogs a post
router.post('/api/posts/:postId/reblog', requireAuth, asyncHandler(async (req, res, next) => {
    const postId = parseInt(req.params.postId, 10);
    const { userId } = req.body;
    const post = await Post.findByPk(postId);
    await Reblog.create({ postId, userId })
    res.json({ post })
}))

// get all the posts that match the search query
router.get('/api/search/:query', asyncHandler(async (req, res, next) => {
    // url decode, parse, etc
    const query = req.params.query;
    const results = await Post.findAll({
        // include: [{ model: Tag, where: { description: query } }], 
        where: 
        { [Op.or]: 
            [ { title: 
                { [Op.iLike]: `%${query}%` } }, 
                { content: 
                    { [Op.iLike]: `%${query}%` } } ] }, 
        order: [[ 'createdAt', 'DESC' ]] 
    })
    res.json({ results });
}))

// get all the posts that have the specified tag
router.get('/api/search/tags/:tag', asyncHandler(async (req, res, next) => {
    const tag = req.params.tag;
    const results = await Tag.findAll({ where: { description: tag }, include: Post });
    res.json({ results })
}))

// gets all the comments

module.exports = router;

