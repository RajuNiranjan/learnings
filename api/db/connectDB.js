import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const ConnectDB = async () => {
    try {
        const dbUri = process.env.DB_URI
        if (dbUri) {
            await mongoose.connect(dbUri).then(() => console.log('server connected to data base')).catch((e) => console.log(e))
        } else {
            console.log("Invalid DB_URI");
        }
    } catch (error) {
        console.log(error);
    }
}

ConnectDB()