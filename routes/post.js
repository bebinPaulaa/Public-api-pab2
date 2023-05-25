const express = require('express')
const post = require('../models/post')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const Post = await post.find()
        res.json(Post)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router