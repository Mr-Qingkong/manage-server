const mongoose = require('mongoose')
const vehiSchema = mongoose.Schema({
    "vehiId" : Number,//车辆ID,自增长
    "vehiName":String,//车辆名称
    "vehiNum":String,//车牌
    "deptId":[],//部门
    "state" : {
        type:Number,
        default:1
    },// 1: 闲置 2: 出行 3: 维修
    remark:String
})

module.exports = mongoose.model("vehi",vehiSchema,"vehi")