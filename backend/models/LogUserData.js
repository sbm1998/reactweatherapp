import mongoose from "mongoose";

const Schema = mongoose.Schema;
//
const LogUserData = new Schema({
    email: {
        type: String,
       // required: true,
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    time: {
        type: String,
        required:true
    },
});
var LoginUser = mongoose.model("LoginUser",LogUserData);

export default LoginUser;
