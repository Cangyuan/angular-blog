var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }, //昵称
    password: String,
    createTime:{type:Date,default:Date.now}//创建时间
});

module.exports = mongoose.model('user', userSchema);