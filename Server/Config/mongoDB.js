import mongoose from "mongoose";

const connectedDB = async ()=>{

    mongoose.connection.on('connected',()=>console.log("Database Connected"));

    await mongoose.connect(`${process.env.MONGO_URI}/MongoNewDB`)

}

export default connectedDB;