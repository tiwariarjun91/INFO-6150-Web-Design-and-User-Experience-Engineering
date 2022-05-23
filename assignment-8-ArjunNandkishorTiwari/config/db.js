import mongoose from "mongoose";
import config from "config";


const db = config.get("mongoURL");

const connectDB = async() => {

    try {
        await mongoose.connect(db);

        console.log("MongoDB Atlas connected .........");
    } catch(err){
        console.error(err.message);
        process.exit(1);

    }
}

 export default connectDB;