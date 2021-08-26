import mongoose from "mongoose";
const Schema = mongoose.Schema;

const historyData=new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    climatedata:{}
});
const currentData= mongoose.model("currentData",historyData);

export default currentData;
