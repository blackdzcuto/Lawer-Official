"use strict";

const mongoose = require("mongoose");
async function login({
  global: _0x531ebb,
  logger: _0x280fed,
  getText: _0x4503c7
}) {
  const {
    config: _0x2fc1e5
  } = _0x531ebb;
  const _0x16b982 = _0x2fc1e5.DATABASE.type;
  const _0x5f559f = require("../models/threadsModel.js");
  const _0x453bc9 = require("../models/usersModel.js");
  if (_0x16b982 == "mongodb" && _0x2fc1e5.DATABASE.uriMongodb) {
    const _0x3d8e0d = "\\|/-";
    let _0x22759d = 0;
    const _0x4aa3ad = setInterval(() => {
      _0x280fed.log(_0x3d8e0d[_0x22759d++] + _0x4503c7("CONNECTION_DATABASE"), "MONGODB");
      _0x22759d %= _0x3d8e0d.length;
    }, 120);
    const _0x5ad7be = _0x2fc1e5.DATABASE.uriMongodb;
    await mongoose.connect(_0x5ad7be, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(_0xd42bd4 => {
      _0x280fed.log("[1;33m" + _0x4503c7("CONNECTION_DATABASE_SUCCESS"), "MONGODB");
      clearInterval(_0x4aa3ad);
    }).catch(_0x5ab974 => {
      _0x280fed.error(_0x4503c7("CONNECTION_DATABASE_FAILED", _0x5ab974.stack + "\n"), "MONGODB");
      clearInterval(_0x4aa3ad);
      process.exit(0);
    });
    if ((await _0x5f559f.find({
      type: "thread"
    })).length == 0) {
      await _0x5f559f.create({
        type: "thread",
        data: Object
      });
    }
    if ((await _0x453bc9.find({
      type: "user"
    })).length == 0) {
      await _0x453bc9.create({
        type: "user",
        data: Object
      });
    }
  }
}
const _0x5eefee = {
  login: login
};
module.exports = _0x5eefee;
setInterval(function () {
  _0x4f31c();
}, 4000);
