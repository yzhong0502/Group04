const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let queryModel = new Schema({
    email:{type:String, required:true},
    query:{type:String, required:true},
    date: {type:Date, default:Date.now}
})

module.exports = mongoose.model('query', queryModel,'queryList');
