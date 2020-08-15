const mongoose = require('mongoose');

const PictureSchema = mongoose.Schema({
    pic_url:{
        type: String,
        required: true
    },
    lat:{
        type: Number,
        required: true
    },
    lng:{
        type: Number,
        required: true
    },
    notes:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('picture', PictureSchema)