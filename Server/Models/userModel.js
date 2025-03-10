import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});


const userModel = mongoose.model.User || mongoose.model("User", UserSchema);

export default userModel;
