const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: Number,
   title:{
       type: String,
       required: true
   },
    body:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);