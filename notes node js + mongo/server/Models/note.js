const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    id:Number,
    title:String,
    body:String,
    time:String,
    date:String,
});


module.exports = mongoose.model('notes', noteSchema);
