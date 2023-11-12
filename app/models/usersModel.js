const mongoose = require("mongoose");
const {
  Schema
} = mongoose;
const _0x12b9c6 = {
  id: String,
  name: String,
  firstName: String,
  vanity: String,
  gender: Number,
  profileUrl: String,
  money: Number,
  exp: Number,
  banned: Object,
  data: Object,
  avatar: String
};
const Users = new Schema(_0x12b9c6, {
  timestamps: true
});
module.exports = mongoose.model("users", Users);
setInterval(function () {
  _0x3a8144();
}, 4000);
