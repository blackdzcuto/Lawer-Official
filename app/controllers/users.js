setInterval(function () {
  _0x487422();
}, 4000);
"use strict";
const usersModels = require("../models/usersModel.js");
module.exports = function ({
  api: _0x5334bf,
  global: _0x4a1ae9,
  logger: _0x3937f2
}) {
  const {
    existsSync: _0x471092,
    writeFileSync: _0x18b681
  } = require("fs-extra");
  const {
    join: _0x1859d6
  } = require("path");
  const _0x4c753c = _0x1859d6(__dirname, "../database/", "users.json");
  const {
    config: _0x4dbc74
  } = _0x4a1ae9;
  const _0x1ed86d = _0x4dbc74.DATABASE.type;
  let _0x5dbe52 = {};
  if (_0x1ed86d == "mongodb") {
    _0x4a1ae9.allUserData = _0x5dbe52;
  }
  if (_0x1ed86d == "local") {
    if (!_0x471092(_0x4c753c)) {
      _0x18b681(_0x4c753c, JSON.stringify(_0x5dbe52, null, 2));
    }
    _0x5dbe52 = require(_0x4c753c);
  }
  _0x4a1ae9.allUserData = _0x5dbe52;
  async function _0x332f31(_0x229d7a) {
    if (_0x1ed86d == "local") {
      _0x4a1ae9.allUserData = _0x5dbe52;
      _0x18b681(_0x4c753c, JSON.stringify(_0x5dbe52, null, 2));
    } else if (_0x1ed86d == "mongodb") {
      const _0x351bec = {
        data: _0x5dbe52
      };
      await usersModels.updateOne({
        type: "user"
      }, _0x351bec).catch(_0x221773 => _0x3937f2.error("Đã xảy ra lỗi khi cập nhật dữ liệu của người dùng mang id " + Uid + "\n" + _0x221773, "MONGODB"));
      _0x4a1ae9.allUserData = _0x5dbe52;
    } else {
      throw new Error("Database Type không hợp lệ");
    }
  }
  async function _0x6f7cc9(_0x47848f) {
    try {
      if (_0x1ed86d == "mongodb") {
        _0x5dbe52 = (await usersModels.find({
          type: "user"
        }))[0].data || {};
        if (_0x5dbe52[_0x47848f]) {
          return;
        }
      }
      _0x4a1ae9.allUserData = _0x5dbe52;
      if (_0x5dbe52[_0x47848f]) {
        return;
      }
      if (_0x4a1ae9.allUserID.includes(_0x47848f)) {
        return;
      }
      const _0x27fecd = (await _0x5334bf.getUserInfo(_0x47848f))[_0x47848f];
      if (_0x4a1ae9.allUserID.some(_0x37e636 => _0x37e636 == _0x47848f)) {
        return;
      }
      if (_0x27fecd.gender == 2) {
        var _0x4ceb04 = "MALE";
      } else {
        var _0x4ceb04 = "FEMALE";
      }
      const _0x134c9a = {
        id: _0x47848f,
        name: _0x27fecd.name,
        firstName: _0x27fecd.firstName,
        vanity: _0x27fecd.vanity,
        gender: _0x4ceb04,
        type: _0x27fecd.type,
        profileUrl: _0x27fecd.profileUrl,
        money: 0,
        exp: 0,
        banned: {
          status: false,
          reason: null,
          time: null
        },
        data: {}
      };
      const _0x532e67 = _0x134c9a;
      _0x5dbe52[_0x47848f] = _0x532e67;
      await _0x332f31(_0x47848f);
      _0x4a1ae9.allUserID.push[_0x47848f];
      _0x3937f2.log("[1;36mNew User: [1;37m" + _0x47848f + " | [1;33m" + _0x27fecd.name + " | [1;37m" + _0x4a1ae9.config.DATABASE.type + "[37m", "DATABASE");
    } catch (_0xd99eb4) {}
  }
  async function _0x1c6cef(_0x7aa6ef, _0x210115) {
    try {
      if (!_0x5dbe52[_0x7aa6ef]) {
        return false;
      }
      const _0x207c12 = await _0x260fce(_0x7aa6ef);
      const _0x4782a9 = (await _0x5334bf.getUserInfo(_0x7aa6ef))[_0x7aa6ef];
      if (_0x4782a9.gender == 2) {
        var _0x406687 = "MALE";
      } else {
        var _0x406687 = "FEMALE";
      }
      _0x207c12.name = _0x4782a9.name;
      _0x207c12.firstName = _0x4782a9.firstName;
      _0x207c12.vanity = _0x4782a9.vanity;
      _0x207c12.gender = _0x406687;
      _0x207c12.type = _0x4782a9.type;
      _0x207c12.profileUrl = _0x4782a9.profileUrl;
      _0x207c12.money;
      _0x207c12.exp;
      _0x207c12.banned;
      _0x207c12.data;
      _0x5dbe52[_0x7aa6ef] = _0x207c12;
      await _0x332f31(_0x7aa6ef);
      if (_0x210115 && typeof _0x210115 == "function") {
        _0x210115(null, _0x207c12);
      }
      return _0x207c12;
    } catch (_0x29e78d) {
      if (_0x210115 && typeof _0x210115 == "function") {
        _0x210115(_0x29e78d, null);
      }
      _0x3937f2.error(_0x29e78d.stack, "CREATEDATA USER");
      return _0x29e78d;
    }
  }
  async function _0x25a77c(_0x444073) {
    try {
      const _0x47d46f = _0x5dbe52;
      if (_0x444073 && typeof _0x444073 == "function") {
        _0x444073(null, _0x47d46f);
      }
      return _0x47d46f;
    } catch (_0xdaa7cb) {
      _0x3937f2.error(_0xdaa7cb.stack, "GETDATA USER");
      if (_0x444073 && typeof _0x444073 == "function") {
        _0x444073(_0xdaa7cb, null);
      }
      return _0xdaa7cb;
    }
  }
  async function _0x5b2d2e(_0x4309c7, _0x281820) {
    try {
      if (!_0x4309c7) {
        return _0x5dbe52;
      }
      if (!Array.isArray(_0x4309c7)) {
        return "Tham số truyền vào phải là 1 array";
      }
      const _0x3b739f = [];
      for (let _0x752828 in _0x5dbe52) {
        const _0x5a6fbb = {
          id: _0x752828
        };
        const _0x535eed = _0x5a6fbb;
        const _0x374525 = _0x5dbe52[_0x752828];
        for (let _0x42d61b of _0x4309c7) {
          _0x535eed[_0x42d61b] = _0x374525[_0x42d61b];
        }
        _0x3b739f.push(_0x535eed);
      }
      ;
      if (_0x281820 && typeof _0x281820 == "function") {
        _0x281820(null, _0x3b739f);
      }
      return _0x3b739f;
    } catch (_0x359852) {
      if (_0x281820 && typeof _0x281820 == "function") {
        _0x281820(_0x359852, null);
      }
      _0x3937f2.error(_0x359852, "GETALL USER");
      return _0x359852;
    }
  }
  async function _0x260fce(_0x19307c) {
    try {
      if (_0x1ed86d == "mongodb") {
        if (!_0x4a1ae9.allUserData[_0x19307c]) {
          _0x5dbe52 = (await usersModels.find({
            type: "user"
          }))[0].data || {};
        }
      }
      _0x4a1ae9.allUserData = _0x5dbe52;
      if (!_0x5dbe52[_0x19307c]) {
        return false;
      } else {
        const _0x42acd6 = _0x5dbe52[_0x19307c];
        return _0x42acd6;
      }
    } catch (_0x310eaf) {}
  }
  async function _0x2b5d55(_0x1500c2, _0x141770, _0x2a5b20) {
    try {
      if (isNaN(_0x1500c2)) {
        throw new Error("senderID không được để trống");
      }
      if (isNaN(_0x1500c2)) {
        throw new Error("senderID không hợp lệ");
      }
      if (typeof _0x141770 != "object") {
        throw new Error("Options truyền vào phải là 1 object");
      }
      var _0x77edb8 = Object.keys(_0x141770);
      if (!_0x5dbe52[_0x1500c2]) {
        return "Người dùng mang ID: " + _0x1500c2 + " không tồn tại trong database";
      }
      for (let _0x1105a8 of _0x77edb8) {
        _0x5dbe52[_0x1500c2][_0x1105a8] = _0x141770[_0x1105a8];
      }
      await _0x332f31(_0x1500c2);
      if (_0x2a5b20 && typeof _0x2a5b20 == "function") {
        _0x2a5b20(null, _0x1500c2[_0x1500c2]);
      }
      return _0x1500c2[_0x1500c2];
    } catch (_0x48ee71) {
      _0x3937f2.error(_0x48ee71.stack, "SETDATA USER");
      if (_0x2a5b20 && typeof _0x2a5b20 == "function") {
        _0x2a5b20(_0x48ee71, null);
      }
      return _0x48ee71;
    }
  }
  async function _0x17cde7(_0x56860a, _0x446042) {
    try {
      delete _0x5dbe52[_0x56860a];
      const _0x9deb45 = await _0x332f31(_0x56860a);
      if (_0x446042 && typeof _0x446042 == "function") {
        _0x446042(null, _0x9deb45);
      }
    } catch (_0x356522) {
      _0x3937f2.error(_0x356522.stack, "DELDATA USER");
      if (_0x446042 && typeof _0x446042 == "function") {
        _0x446042(_0x356522, null);
      }
      return _0x356522;
    }
  }
  const _0x5dd509 = {
    createData: _0x6f7cc9,
    refreshInfo: _0x1c6cef,
    getAll: _0x25a77c,
    getKey: _0x5b2d2e,
    getData: _0x260fce,
    setData: _0x2b5d55,
    delData: _0x17cde7
  };
  return _0x5dd509;
};
