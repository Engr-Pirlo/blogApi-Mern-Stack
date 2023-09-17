import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .send({ status: false, message: "User Already Existed" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username.toLowerCase(),
      email: username.toLowerCase(),
      password: hashedPassword,
    });

    await user.save();

    res
      .status(201)
      .send({
        status: true,
        message: { username: user.username, email: user.email },
      });
  } catch (err) {
    console.log("Error at User Register", err);
    res.status(500).send({ status: "false", message: "UnKnow Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const isExist = await User.findOne({ username: username.toLowerCase() });
    if (!isExist) {
      return res
        .status(400)
        .json({ message: "Invalid Username or Password", status: false });
    }

    const validPassword = await bcrypt.compare(password, isExist.password)

    if(!validPassword){
        return res
        .status(400)
        .json({ message: "Invalid Username or Password", status: false })
    }


    // jwt Authentication

    



  } catch (err) {
    console.log("Error at Login", err);
  }
};
