const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    },
    Username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)