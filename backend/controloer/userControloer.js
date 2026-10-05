import userModel from "../model/user_model.js";
import validator from "validator";
import bcrypt from "bcrypt";
// route for user login

const loginUser = async (req, res) => {
  res.send("hallo log");
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
    if (password.lenght < 8) {
      return res.json({
        success: falce,
        massage: "please inter a valid passworld",
      });
    }
    // hasing user passworld
    const salt = await bcrypt.genSalt(10);
    const bashedpaddword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name,
      email,
      password: bashedpaddword,
    });
    const user = await newUser.save();
    // const token =
  } catch (e) {}
};

//route for admin login
const adminlogin = async (req, res) => {
  res.send("hallo world ad hallo we are so hayy");
};

export { loginUser, registerUser, adminlogin };
