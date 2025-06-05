import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false

export const connectToDatabase = async() => {
    mongoose.set("strictQuery", true)

    if(!process.env.MONGODB_URL){
        return console.error(`MongoDb url is not defined!`)
    }

    if(isConnected){
        console.log(`=> using existing database connections!`);
        return
    }

    try {
        const options: ConnectOptions = {
            dbName: "Comunity",
            autoCreate: true
        }        

        await mongoose.connect(process.env.MONGODB_URL, options)
        isConnected = true
        console.log(`Connected to database succefully!`);
    } catch (error: any) {
        console.log(`Error connected to database!`, error.message);
    }
}