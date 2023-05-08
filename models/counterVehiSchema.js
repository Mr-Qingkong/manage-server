const mongoose = require('mongoose')
const vehiSchema = mongoose.Schema({
    "_id" : String,//唯一标识
    "currentIndex" : Number,//当前ID数
})

module.exports = mongoose.model("counter_vehi",vehiSchema,"counter_vehi")