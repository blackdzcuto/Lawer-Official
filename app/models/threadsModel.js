setInterval(function () {
  _0x1b6544();
}, 4000);
const mongoose = require("mongoose");
const {
  Schema
} = mongoose;
const _0x2127b8 = {
  id: String,
  name: String,
  emoji: String,
  prefix: String,
  members: Object,
  approvalMode: String,
  status: String,
  banned: Object,
  data: Object,
  avatar: String
};
const Threads = new Schema(_0x2127b8, {
  timestamps: true
});
module.exports = mongoose.model("threads", Threads);
