setInterval(function () {
  _0x5ab692();
}, 4000);
"use strict";
const threadsModels = require("../models/threadsModel.js");
const usersModels = require("../models/usersModel.js");
module.exports = function ({
  api: _0x339950,
  global: _0x377c06,
  logger: _0x47dfc6
}) {
  const {
    existsSync: _0x557fa3,
    writeFileSync: _0x42a202
  } = require("fs-extra");
  const {
    join: _0x15195f
  } = require("path");
  const {
    config: _0x83a84e
  } = _0x377c06;
  const _0x15cd35 = _0x15195f(__dirname, "../database/", "threads.json");
  const _0x403c4b = _0x15195f(__dirname, "../database/", "users.json");
  const _0x1ef186 = _0x83a84e.DATABASE.type;
  let _0x2d1f4d = {};
  let _0x512fb1 = {};
  if (_0x1ef186 == "mongodb") {
    _0x377c06.allThreadData = _0x2d1f4d;
    _0x377c06.allUserData = _0x512fb1;
  } else {
    if (!_0x557fa3(_0x15cd35)) {
      _0x42a202(_0x15cd35, JSON.stringify(_0x2d1f4d, null, 2));
    }
    if (!_0x557fa3(_0x403c4b)) {
      _0x42a202(_0x403c4b, JSON.stringify(_0x512fb1, null, 2));
    }
    _0x2d1f4d = require(_0x15cd35);
    _0x512fb1 = require(_0x403c4b);
  }
  _0x377c06.allThreadData = _0x2d1f4d;
  _0x377c06.allUserData = _0x512fb1;
  async function _0x5990ee(_0x57afc2) {
    if (_0x1ef186 == "local") {
      _0x377c06.allThreadData = _0x2d1f4d;
      _0x42a202(_0x15cd35, JSON.stringify(_0x2d1f4d, null, 2));
    } else if (_0x1ef186 == "mongodb") {
      const _0x12a43e = {
        data: _0x2d1f4d
      };
      await threadsModels.updateOne({
        type: "thread"
      }, _0x12a43e).catch(_0x17d4aa => _0x47dfc6.error("Đã xảy ra lỗi khi cập nhật dữ liệu của nhóm mang TID: " + _0x57afc2 + "\n" + _0x17d4aa, "MONGODB"));
      _0x377c06.allThreadData = _0x2d1f4d;
    } else {
      throw new Error("Database Type không hợp lệ");
    }
  }
  async function _0x258b3a(_0x388206) {
    if (_0x1ef186 == "local") {
      _0x377c06.allUserData = _0x512fb1;
      _0x42a202(_0x403c4b, JSON.stringify(_0x512fb1, null, 2));
    } else if (_0x1ef186 == "mongodb") {
      const _0x2728ca = {
        data: _0x512fb1
      };
      await usersModels.updateOne({
        type: "user"
      }, _0x2728ca).catch(_0x34f57c => _0x47dfc6.error("Đã xảy ra lỗi khi cập nhật dữ liệu của người dùng mang ID: " + Uid + "\n" + _0x34f57c, "MONGODB"));
      _0x377c06.allUserData = _0x512fb1;
    } else {
      throw new Error("Database Type không hợp lệ");
    }
  }
  async function _0x4ed821(_0x1bb31b) {
    try {
      if (_0x1ef186 == "mongodb") {
        _0x2d1f4d = (await threadsModels.find({
          type: "thread"
        }))[0].data || {};
        if (_0x2d1f4d[_0x1bb31b]) {
          return;
        }
      }
      _0x377c06.allThreadData = _0x2d1f4d;
      if (_0x2d1f4d[_0x1bb31b]) {
        return;
      }
      if (_0x377c06.allThreadID.some(_0x257fb3 => _0x257fb3 == _0x1bb31b)) {
        return;
      }
      const _0x32c570 = await _0x339950.getThreadInfo(_0x1bb31b);
      if (_0x377c06.allThreadID.includes(_0x1bb31b)) {
        return;
      }
      if (_0x32c570.isGroup == false) {
        return;
      }
      const _0x1551a7 = _0x32c570.threadName;
      const {
        userInfo: _0x5ea885
      } = _0x32c570;
      const _0x5eb542 = [];
      _0x32c570.adminIDs.forEach(_0x9e1008 => _0x5eb542.push(_0x9e1008.id));
      const _0x61c7b9 = {};
      for (let _0x388b93 of _0x5ea885) {
        if (_0x388b93.name !== "Người dùng Facebook") {
          const _0x10d75e = _0x388b93.id;
          const _0x3e602f = {
            id: _0x10d75e,
            name: _0x388b93.name,
            nickname: _0x32c570.nicknames[_0x10d75e] || null,
            inGroup: true,
            exp: 0
          };
          const _0x4d45e7 = _0x3e602f;
          _0x61c7b9[_0x10d75e] = _0x4d45e7;
        }
      }
      const _0x275796 = {
        id: _0x1bb31b,
        name: _0x1551a7,
        emoji: _0x32c570.emoji,
        prefix: null,
        language: null,
        adminIDs: _0x5eb542,
        approvalMode: _0x32c570.approvalMode,
        status: true,
        banned: {
          status: false,
          reason: null,
          time: null
        },
        data: {
          onlyQTV: false,
          checkBox: 3,
          approve: false
        },
        members: _0x61c7b9
      };
      const _0x3f943c = _0x275796;
      _0x2d1f4d[_0x1bb31b] = _0x3f943c;
      await _0x5990ee(_0x1bb31b);
      _0x377c06.allThreadID.push(_0x1bb31b);
      _0x47dfc6.log("[1;32mNew Thread: [1;37m" + _0x1bb31b + " | [1;35m" + _0x1551a7 + " | [1;37m" + _0x377c06.config.DATABASE.type + "[37m", "DATABASE");
      if (_0x1ef186 == "mongodb") {
        _0x512fb1 = (await usersModels.find({
          type: "user"
        }))[0].data || {};
      }
      _0x377c06.allUserData = _0x512fb1;
      for (let _0x424a0b of _0x5ea885) {
        if (_0x424a0b.type != "UnavailableMessagingActor") {
          if (!_0x377c06.allUserData[_0x424a0b.id]) {
            if (!_0x424a0b.vanity) {
              var _0xffce28 = "profile.php?id=" + _0x424a0b.id;
            } else {
              var _0xffce28 = _0x424a0b.vanity;
            }
            var _0x45c3c6 = "https://www.facebook.com/" + _0xffce28;
            const _0x2a3dc7 = {
              id: _0x424a0b.id,
              name: _0x424a0b.name,
              firstName: _0x424a0b.firstName,
              vanity: _0x424a0b.vanity,
              gender: _0x424a0b.gender,
              type: _0x424a0b.type,
              profileUrl: _0x45c3c6,
              money: 0,
              exp: 0,
              banned: {
                status: false,
                reason: null,
                time: null
              },
              data: {}
            };
            var _0x2c8949 = _0x2a3dc7;
            _0x512fb1[_0x424a0b.id] = _0x2c8949;
            await _0x258b3a(_0x424a0b.id);
            _0x377c06.allUserID.push(_0x424a0b.id);
            _0x47dfc6.log("[1;36mNew User: [1;37m" + _0x424a0b.id + " | [1;31m" + _0x424a0b.name + "[37m", "user");
          }
        }
      }
    } catch (_0x5672a7) {}
  }
  async function _0x1123ed(_0x5e5783, _0x370ebb) {
    try {
      if (!_0x2d1f4d[_0x5e5783]) {
        return false;
      }
      const _0x4cb694 = await _0x545eef(_0x5e5783);
      const _0x7abfc4 = await _0x339950.getThreadInfo(_0x5e5783);
      const _0xb307cd = [];
      _0x7abfc4.adminIDs.forEach(_0x209ae8 => _0xb307cd.push(_0x209ae8.id));
      const {
        userInfo: _0x53f846
      } = _0x7abfc4;
      const _0x9e2fb9 = _0x4cb694.members;
      const _0x2350c6 = {};
      for (let _0x453a5a of _0x53f846) {
        if (_0x453a5a.name !== "Người dùng Facebook") {
          const _0x4fab5c = _0x453a5a.id;
          const _0x1e1c10 = _0x9e2fb9[_0x4fab5c];
          const _0x1d1cf0 = {
            id: _0x4fab5c,
            name: _0x453a5a.name,
            nickname: _0x7abfc4.nicknames[_0x4fab5c],
            inGroup: true,
            exp: _0x9e2fb9[_0x4fab5c] ? _0x9e2fb9[_0x4fab5c].exp : 0
          };
          const _0xb299e3 = _0x1d1cf0;
          const _0x34eece = {
            ..._0x1e1c10,
            ..._0xb299e3
          };
          _0x2350c6[_0x4fab5c] = _0x34eece;
        }
      }
      _0x4cb694.name = _0x7abfc4.name;
      _0x4cb694.emoji = _0x7abfc4.emoji;
      _0x4cb694.adminIDs = _0xb307cd;
      _0x4cb694.approvalMode = _0x7abfc4.approvalMode;
      _0x4cb694.status;
      _0x4cb694.banned;
      _0x4cb694.data;
      _0x4cb694.members = _0x2350c6;
      _0x2d1f4d[_0x5e5783] = _0x4cb694;
      await _0x5990ee(_0x5e5783);
      if (_0x370ebb && typeof _0x370ebb == "function") {
        _0x370ebb(null, _0x2d1f4d[_0x5e5783]);
      }
      return _0x2d1f4d[_0x5e5783];
    } catch (_0x7382ef) {
      if (_0x370ebb && typeof _0x370ebb == "function") {
        _0x370ebb(_0x7382ef, null);
      }
      return _0x7382ef;
    }
  }
  async function _0x358aae(_0x550d35) {
    try {
      const _0x445d07 = _0x2d1f4d;
      if (_0x550d35 && typeof _0x550d35 == "function") {
        _0x550d35(null, _0x445d07);
      }
      return _0x445d07;
    } catch (_0x1190b5) {
      _0x47dfc6.error(_0x1190b5.stack, "GETALL THREAD DATA");
      if (_0x550d35 && typeof _0x550d35 == "function") {
        _0x550d35(_0x1190b5, null);
      }
      return _0x1190b5;
    }
  }
  async function _0x33cbba(_0x5eeb5a, _0x1e0b60) {
    try {
      if (!_0x5eeb5a) {
        return _0x2d1f4d;
      }
      if (!Array.isArray(_0x5eeb5a)) {
        throw new Error("Tham số truyền vào phải là 1 array");
      }
      const _0xecfbc = [];
      for (let _0x2b7f04 in _0x2d1f4d) {
        const _0x3701a6 = {
          id: _0x2b7f04
        };
        const _0x4abb3c = _0x3701a6;
        const _0x1cc924 = _0x2d1f4d[_0x2b7f04];
        for (let _0x373f02 of _0x5eeb5a) {
          _0x4abb3c[_0x373f02] = _0x1cc924[_0x373f02];
        }
        _0xecfbc.push(_0x4abb3c);
      }
      if (_0x1e0b60 && typeof _0x1e0b60 == "function") {
        _0x1e0b60(null, _0xecfbc);
      }
      return _0xecfbc;
    } catch (_0x12be30) {
      _0x47dfc6.error(_0x12be30.stack, "GETKEY DATA THREAD");
      if (_0x1e0b60 && typeof _0x1e0b60 == "function") {
        _0x1e0b60(_0x12be30, null);
      }
      return _0x12be30;
    }
  }
  async function _0x545eef(_0x5cf18e) {
    try {
      if (_0x1ef186 == "mongodb") {
        if (!_0x377c06.allThreadData[_0x5cf18e]) {
          _0x2d1f4d = (await threadsModels.find({
            type: "thread"
          }))[0].data || {};
        }
      }
      _0x377c06.allThreadData = _0x2d1f4d;
      if (!_0x2d1f4d[_0x5cf18e]) {
        return false;
      }
      const _0x298e0b = _0x2d1f4d[_0x5cf18e];
      return _0x298e0b;
    } catch (_0x331fb7) {}
  }
  async function _0x429332(_0xc27b1a, _0x3e262d, _0x129be5) {
    try {
      if (!_0xc27b1a) {
        throw new Error("threadID không được để trống");
      }
      if (isNaN(_0xc27b1a)) {
        throw new Error("threadID không hợp lệ");
      }
      if (typeof _0x3e262d != "object") {
        throw new Error("Tham số options truyền vào phải là 1 object");
      }
      _0x2d1f4d[_0xc27b1a] = {
        ..._0x2d1f4d[_0xc27b1a],
        ..._0x3e262d
      };
      await _0x5990ee(_0x2d1f4d);
      if (_0x129be5 && typeof _0x129be5 == "function") {
        _0x129be5(null, _0x2d1f4d[_0xc27b1a]);
      }
      return _0x2d1f4d[_0xc27b1a];
    } catch (_0x11845c) {
      _0x47dfc6.error(_0x11845c.stack, "SET THREAD DATA");
      if (_0x129be5 && typeof _0x129be5 == "function") {
        _0x129be5(_0x11845c, null);
      }
      return _0x11845c;
    }
  }
  async function _0xb93d78(_0x1a18d8, _0x1ffa9f) {
    try {
      delete _0x2d1f4d[_0x1a18d8];
      await _0x5990ee(_0x1a18d8);
      if (_0x1ffa9f && typeof _0x1ffa9f == "function") {
        _0x1ffa9f(null, "DELDATA THREAD " + _0x1a18d8 + " SUCCES");
      }
      return true;
    } catch (_0x1a44b9) {
      _0x47dfc6.error(_0x1a44b9.stack, "DEL THREAD DATA");
      if (_0x1ffa9f && typeof _0x1ffa9f == "function") {
        _0x1ffa9f(_0x1a44b9, null);
      }
      return _0x1a44b9;
    }
  }
  const _0x1a7fd3 = {
    createData: _0x4ed821,
    refreshInfo: _0x1123ed,
    getAll: _0x358aae,
    getKey: _0x33cbba,
    getData: _0x545eef,
    setData: _0x429332,
    delData: _0xb93d78
  };
  return _0x1a7fd3;
};
