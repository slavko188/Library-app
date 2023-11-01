const { Schema, model } = require("mongoose");
const { role, DEFAULT_USER_IMAGE } = require("../config/config");

const UserSchema = new Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  mobile: { type: String, default: "" },
  email: { type: String, required: [true, "Email is required"] },
  password: { type: String, required: [true, "Password is required"] },
  role: { type: String, default: role.USER },
  image: { type: String, default: DEFAULT_USER_IMAGE },
  joiningDate: { type: String, default: () => new Date().getTime().toString() },
  isActivate: { type: Boolean, default: false },
});

const UserModel = model("users", UserSchema);
module.exports = UserModel;
