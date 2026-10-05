import mongoose from "mongoose";

const connetdb= async ()=>{

    if (!mongoose.connect(process.env.MONGODB_URI)){
        throw new Error(" Data base cannot connectchke some probnlem in yor mogodb.js")

        
    }
   await mongoose.connect(process.env.MONGODB_URI,{dbName:"E-commres"})

}

export default connetdb