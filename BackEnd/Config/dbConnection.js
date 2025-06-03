import mongoose from "mongoose";

mongoose.set('strictQuery', false); 

const dbConnection = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        if(connection){
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}



export default dbConnection;