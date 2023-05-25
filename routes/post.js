const express = require('express')
const Post = require('../models/post')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.post('/', async (req, res) => {
    const inputPost = new Post({
        content: req.body.content,
        user_id: req.body.user_id,
        username: req.body.username
    })

    try {
        const post = await inputPost.save()
        res.json(post)
    }catch (error) {
        res.json({
            message: error
        })
    
    }
})

module.exports = router