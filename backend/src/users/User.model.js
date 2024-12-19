const { Schema, module } = reqire("mongoose");

const userShecma = new Schema({
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: {
    type: String,
    default: "user",
  },
  profileImage: String,
  bio: { type: String, maxlength: 200 },
  profession: String,
  createdAt: { type: Date, default: Date.now },
});

const User = new module("User", userShecma);
module.exports = User;
