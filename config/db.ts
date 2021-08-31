import mongoose from "mongoose";
const config =  require('config');
const db = config.get('MONGO_ATLAS')



const connectDB = async () => {
    try {
       await (mongoose.connect(db, {useNewUrlParser:true, useCreateIndex: true,useUnifiedTopology: true}))
       console.log("mongodb connected succesfully")
    }  catch (error) {
       console.error(error.message)
       process.exit(1)
    }
}

// module.exports = connectDB;
export default connectDB;