const mongoose= require('mongoose');
const link = "mongodb+srv://bexex:bexex@cluster0.lq7ctfy.mongodb.net/"

const  connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    }catch(error){
        console.error('Error connecting to MongoDB:', error.Message);
        process.exit(1);
    }     
}
module.exports= connectDB;







