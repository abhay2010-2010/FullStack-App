const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    userID:String,
    username:String

},
    {
        versionKey: false
    })

const Note = mongoose.model('Note', schema);

module.exports = {
    Note
}