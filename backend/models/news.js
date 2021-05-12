const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let newsModel = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    url: {type:String, required:true},
    image:{type:String},
    publishedAt:{type:String}
})

module.exports = mongoose.model('news', newsModel,'newsList');
