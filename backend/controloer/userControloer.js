import userModel from "../model/user_model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// route for user login

const creteToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret);
};

const loginUser = async (req, res) => {
  res.send("hallo log");
  try{
    const {email,password}=req.body
    const user_email =await userModel.findOne({email})
    if (!user_email){
      return res.json({success:false,message:"user not find "})
    }
    //this login password match i thik it is not good for squre 
    const isMatch= await bcrypt.compare(password,user.password)
    if (isMatch){
      const token =creteToken(user._id)
      res.json({success:true,token})

    }
    else{
      res.json({success:false,message:"invalind password"})
    }
  }catch(e){
    res.json({success:false,massage:e.message})
  }
};

//route for user resistertion

const registerUser = async (req, res) => {
  //chhking the user is all ray not in the data <base href="
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "user alreay exists in databasea",
      });
    }
    // validinting email format & and strif passworld
    if (!validator.isEmail(email)) {
      return res.json({ success: falce, message: "plese enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: falce,
        massage: "please inter a valid passworld",
      });
    }
    // hasing user passworld
    const salt = await bcrypt.genSalt(10);
    const hashedpaddword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: hashedpaddword,
    });
    const user = await newUser.save();
    const token = creteToken(user._id);
    res.json({ success: true, token });
  } catch (e) {
    console.log(e);
    res.json({ success: false, massage: e.message });
  }
};

//route for admin login
const adminlogin = async (req, res) => {
  /*
admin_email= "nan@gmail.com"

admin_pass="12345s"
  */
  try {
    const {email,pass}= req.body
    if (email===process.env.admin_email&& pass===process.env.admin_pass){
      const toekn =jwt.sign(email+pass,process.env.jwt_secret)
      res.json({success:true,token})

    }else{
      res.json({success:false,messas:"wornd pass word"})
    }
  } catch (error) {
    console.log(error)
     res.json({success:true,mass:error.message})
  }
};

export { loginUser, registerUser, adminlogin };
