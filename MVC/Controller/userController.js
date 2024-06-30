import upload from "../../helper/Image.js";
import userModel from "../Model/userModel.js";
import jwt from 'jsonwebtoken';

export const registerUser = async (req,res) =>{

try {
    upload(req,res,async(err)=>{
        if(err){
            return res.status(400).send(err)
        }else{  
            const{name,last_name,email,phone,password} =req.body;
            let image=req.file?req.file.path:null;
            const JWT_SECRET = "4a8b2c61f5473a4";
            
            // validate input
            if(!name){
                return res.status(400).send("Enter your name");}
                if(!last_name){
        return res.status(400).send("Enter your surname");}
    if(!email){
        return res.status(400).send("Enter your email id");}
        if(!phone){
            return res.status(400).send("Enter your Phone number");}
            if(!password){
                return res.status(400).send("Enter your Password");}
                // check is user exist
                const chkExisting = await userModel.findOne({email});
                if(chkExisting){
                    return res.status(400).send("Email already registered");}

    // Create user  
    const newUser = await userModel.create({ 
        name, 
        last_name,
        email,
        phone,
        password,
        image });
        const token = jwt.sign({userId:newUser._id},JWT_SECRET,{expiresIn:"1hr"});
        // Send response
        return res.status(201).send({ 
            status:"success",
            message: 'User registered successfully', 
            user: newUser ,
            token
        });
    }
})

    } catch (error) {
        console.log(`Error in API: ${error}`);
        return res.status(500).send("Internal Server Error");
    }
};


export const getAllUser = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(`Error getting mobile phones: ${error}`);
        res.status(500).send("Internal Server Error");
    }
};

export const getUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (user)  return res.status(200).json(user);
        else return res.status(404).send("User not found");
    } catch (error) {
        console.error(`Error getting user by ID: ${error}`);
        res.status(500).send("Internal Server Error");
    }
};



// update

export const userUpdateController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (user) {
            user.name = req.body.name || user.name;
            user.last_name = req.body.last_name || user.last_name;
            user.email = req.body.email || user.email;
            user.phone = req.body.phone || user.phone;
            
            // Check if password is provided in the request body
            if (req.body.password) {
                user.password = req.body.password;
            }
            
            const updateUser = await user.save();
            return res.status(200).send({
                status: "success",
                message: "User updated successfully",
                updateUser
            });
        } else {
            res.status(404).send({
                status: "error",
                message: "User not found"
            });
        }
    } catch (error) {
        console.log(`Error in API: ${error}`);
        res.status(500).send({
            status: "error",
            message: "Internal Server Error"
        });
    }
};


// delete


export const userDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById( id );
        if (user) {
          await user.deleteOne();
          return res.status(200).send({
            success: true,
            message: "User deleted successfully",
          })  
        } else {
            res.status(404).send({
                status: "error",
                message: "User not found"
            });
        }
    } catch (error) {
        console.log(`Error in API: ${error}`);
        res.status(500).send({
            status: "error",
            message: "Internal Server Error"
        });
    }
};