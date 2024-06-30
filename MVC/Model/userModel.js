import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true 
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:false
    }
},{timeStamp:true}
    

)   

export default mongoose.model("user",userSchema)