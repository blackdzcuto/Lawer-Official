"use strict";

const logger = require("./app/logger.js");
const {
  writeFileSync,
  readdirSync,
  existsSync
} = require("fs-extra");
setInterval(function () {
  _0x5cc289();
}, 4000);
const envConfig = require("./envConfig.json");
function commands({
  global: _0x5e2f29,
  Config: _0x320119,
  logger: _0xfd7c93,
  Threads: _0x438cbd,
  Users: _0x319005,
  getText: _0x3acc7d
}) {
  const _0x2e9f6f = readdirSync(__dirname + "/scripts").filter(_0x3a047f => _0x3a047f.endsWith(".js") && !_0x3a047f.includes("example"));
  var _0x17a8eb = 1;
  for (var _0x53e242 of _0x2e9f6f) {
    try {
      const _0x101bae = require(__dirname + "/scripts/" + _0x53e242);
      const _0x5de189 = _0x101bae.config.name;
      if (_0x5e2f29.scripts.findIndex(_0x1252bc => _0x1252bc.config.name == _0x5de189) < 0) {
        _0xfd7c93.loadscripts("Đã tải thành công command " + _0x5de189, "" + _0x17a8eb++);
        if (_0x101bae.onLoad) {
          const _0x54f229 = {
            global: _0x5e2f29,
            Config: _0x320119,
            logger: _0xfd7c93
          };
          _0x101bae.onLoad(_0x54f229);
        }
        if (_0x101bae.config.envConfig) {
          if (envConfig.scripts.some(_0x357cf4 => _0x357cf4.name == _0x101bae.config.name) != true) {
            const _0x3cfc5a = {
              name: _0x101bae.config.name,
              configCommand: _0x101bae.config.envConfig
            };
            envConfig.scripts.push(_0x3cfc5a);
            writeFileSync("./envConfig.json", JSON.stringify(envConfig, null, 4), "utf-8");
            _0xfd7c93.load("Đã tải envConfig của " + _0x53e242 + " thành công", _0x5de189);
          }
        }
        _0x5e2f29.scripts.push(_0x101bae);
      } else {
        _0xfd7c93.warn(_0x5de189 + " trùng tên với lệnh khác!");
      }
    } catch (_0x19559d) {
      _0xfd7c93.error("Đã xảy ra lỗi khi tải " + _0x53e242 + ": " + _0x19559d);
    }
  }
  _0xfd7c93.log(_0x3acc7d("COMMAND_LOAD_FILE", _0x2e9f6f.length), "command");
}
;
function events({
  global: _0x4def09,
  Config: _0x2fea53,
  logger: _0x31c23d,
  getText: _0x254096,
  Threads: _0x1fec98,
  Users: _0x681e30
}) {
  const _0x22d754 = readdirSync(__dirname + "/scripts/events").filter(_0x4acd90 => _0x4acd90.endsWith(".js") && !_0x4acd90.includes("example"));
  var _0x4c6912 = 1;
  for (var _0x254527 of _0x22d754) {
    try {
      const _0x3a3542 = require(__dirname + "/scripts/events/" + _0x254527);
      const _0x4eb722 = _0x3a3542.config.name;
      if (_0x4def09.events.findIndex(_0xd38647 => _0xd38647.config.name == _0x4eb722) < 0) {
        _0x31c23d.loadscripts("Đã tải thành công event " + _0x4eb722, "" + _0x4c6912++);
        if (_0x3a3542.onLoad) {
          const _0x2e484d = {
            global: _0x4def09,
            Config: _0x2fea53,
            logger: _0x31c23d
          };
          _0x3a3542.onLoad(_0x2e484d);
        }
        if (_0x3a3542.config.envConfig) {
          if (envConfig.scripts.some(_0x14c5a2 => _0x14c5a2.name == command.config.name) != true) {
            const _0x11aa32 = {
              name: _0x3a3542.config.name,
              configEvent: _0x3a3542.config.envConfig
            };
            envConfig.events.push(_0x11aa32);
            writeFileSync("./envConfig.json", JSON.stringify(envConfig, null, 4), "utf-8");
            _0x31c23d.load("Đã tải envConfig của " + _0x254527 + " thành công", _0x4eb722);
          }
        }
        _0x4def09.events.push(_0x3a3542);
      } else {
        _0x31c23d.warn(_0x4eb722 + " trùng tên với lệnh khác!");
      }
    } catch (_0x195191) {
      _0x31c23d.error("Đã xảy ra lỗi khi tải event " + _0x254527 + ": " + _0x195191);
    }
  }
  _0x31c23d.log(_0x254096("EVENT_LOAD_FILE", _0x22d754.length), "event");
}
;
async function database({
  global: _0x3b1371,
  Config: _0x2b79cb,
  logger: _0x445a44,
  timeStart: _0x27e37b,
  getText: _0x589f13
}) {
  if (_0x2b79cb.DATABASE.type == "local") {
    const {
      join: _0x4d9475
    } = require("path");
    const _0x2096a4 = _0x4d9475(__dirname, "/app/database/", "threads.json");
    const _0x359f12 = _0x4d9475(__dirname, "/app/database/", "users.json");
    const _0x39081f = require(_0x2096a4);
    const _0x9f154 = require(_0x359f12);
    _0x3b1371.allThreadData = _0x39081f;
    for (var _0x4fe6df in _0x39081f) {
      _0x3b1371.allThreadID.push(_0x4fe6df);
      if (_0x39081f[_0x4fe6df].banned.status == true) {
        _0x3b1371.threadBanned.push(_0x39081f[_0x4fe6df].id);
      }
    }
    _0x3b1371.allUserData = _0x9f154;
    for (var _0x4fe6df in _0x9f154) {
      _0x3b1371.allUserID.push(_0x4fe6df);
      if (_0x9f154[_0x4fe6df].banned.status == true) {
        _0x3b1371.userBanned.push(_0x9f154[_0x4fe6df].id);
      }
    }
    _0x445a44.log("[1;36m" + _0x589f13("CHOOSE_DATABASE_LOCAL"), "Local");
    _0x445a44.log(_0x589f13("DATABASE_READ_YES", _0x3b1371.allThreadID.length, _0x3b1371.allUserID.length) + "\n", "Database");
  }
  if (_0x2b79cb.DATABASE.type == "mongodb") {
    try {
      const _0x3a2484 = require("./app/models/threadsModel.js");
      const _0x5bf27b = require("./app/models/usersModel.js");
      const _0x77524 = (await _0x3a2484.find({
        type: "thread"
      }))[0].data || {};
      const _0x16c36f = (await _0x5bf27b.find({
        type: "user"
      }))[0].data || {};
      _0x3b1371.allThreadData = _0x77524;
      for (var _0x4fe6df in _0x77524) {
        if (_0x4fe6df != undefined) {
          _0x3b1371.allThreadID.push(_0x4fe6df);
          if (_0x77524[_0x4fe6df].banned.status == true) {
            _0x3b1371.threadBanned.push(_0x77524[_0x4fe6df].id);
          }
        }
      }
      _0x3b1371.allUserData = _0x16c36f;
      for (_0x4fe6df in _0x16c36f) {
        if (_0x4fe6df != undefined) {
          _0x3b1371.allUserID.push(_0x4fe6df);
          if (_0x16c36f[_0x4fe6df].banned.status == true) {
            _0x3b1371.userBanned.push(_0x16c36f[_0x4fe6df].id);
          }
        }
      }
      _0x445a44.log(_0x589f13("DATABASE_READ_YES", _0x3b1371.allThreadID.length, _0x3b1371.allUserID.length) + "\n", "Database");
      _0x445a44.log("[1;37m" + _0x589f13("INFO_DONE") + "[37m", "info status");
      _0x445a44.log("====== " + (Date.now() - _0x27e37b) + "ms ======", "loader");
    } catch (_0xab4712) {
      _0x445a44.log("[1;37m" + _0x589f13("INFO_DONE") + "[37m", "info status");
      _0x445a44.log("====== " + (Date.now() - _0x27e37b) + "ms ======", "loader");
    }
  }
}
;
const _0x601be4 = {
  commands: commands,
  events: events,
  database: database
};
module.exports = _0x601be4;
