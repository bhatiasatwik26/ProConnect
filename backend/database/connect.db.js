import mongoose from "mongoose"
export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connnected sucessfully');
        console.log('-------------------------------------');
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
}