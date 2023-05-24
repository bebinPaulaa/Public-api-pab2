const express = require('express')
const post = require('../models/post')
const router = express.Router()
const Post = require4('../models/Post')

router.get('/', async(req, res) => {
    try {
        const Post = await post.find()
        res.json(post)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router