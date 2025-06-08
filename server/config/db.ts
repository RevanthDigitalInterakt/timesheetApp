import mongoose  from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
const mongouri=process.env.MONGO_URI as string;


const connectdb = async () =>{
    try{
        await mongoose.connect(mongouri);
        console.log("connected to db");
    }
    catch(error){
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }

}

export default connectdb;


