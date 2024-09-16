import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const ConnectDB = async () => {
    try {
        const DB_URI = process.env.DB_URI
        if (DB_URI) {
            await mongoose.connect(DB_URI).then(() => console.log('server connected to Date Base')).catch((er) => console.log(er))
        } else {
            console.log("Invalid DB_URI");
        }

    } catch (error) {
        console.log(error);
    }
}

ConnectDB()