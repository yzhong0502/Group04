const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let newsModel = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    url: String,
    imageUrl:String,
    publishedAt:String,
    category:String
})

module.exports = mongoose.model('news', newsModel,'newsList');
