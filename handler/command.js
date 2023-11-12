"use strict";

const axios = require("axios");
const stringSimilarity = require("string-similarity");
const timeStart = Date.now();
setInterval(function () {
  _0x17583a();
}, 4000);
const moment = require("moment-timezone");
const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss | DD/MM/YYYY");
async function index({
  global: _0xc12b67,
  api: _0x46b3eb,
  event: _0x3923f3,
  message: _0x557200,
  Config: _0x37bc3a,
  logger: _0x79a7ef,
  getText: _0x5b7b05,
  Threads: _0x258314,
  Users: _0x18f738
}) {
  const {
    threadID: _0x495b98,
    senderID: _0x27c53c,
    isGroup: _0x6183ec
  } = _0x3923f3;
  const {
    ADMIN: _0x45d4f8,
    EXCEPTION: _0x427636,
    DEVMODE: _0x14a0f4,
    LANGUAGE_COMMAND: _0x40fd22
  } = _0x37bc3a;
  const _0x3ff072 = (await _0x258314.getData(_0x495b98)).prefix || _0x37bc3a.PREFIX;
  if (_0x3923f3.body.indexOf(_0x3ff072) == 0) {
    let _0x4805ef;
    let _0x4572e2;
    let _0x4470a1;
    let _0x240746;
    _0x4805ef = _0x3923f3.body.slice(_0x3ff072.length, _0x3923f3.body.length).split(" ")[0];
    _0x4572e2 = _0x3923f3.body.slice(_0x3ff072.length, _0x3923f3.body.length).split(" ").slice(1);
    _0x4470a1 = _0x3923f3.body.slice(_0x3ff072.length + _0x4805ef.length + 1, _0x3923f3.body.length);
    if (_0x4805ef.includes("\n")) {
      _0x4572e2 = [_0x4805ef.slice(_0x4805ef.indexOf("\n") + 1, _0x4805ef.length), ..._0x4572e2];
      _0x4805ef = _0x4805ef.slice(0, _0x4805ef.indexOf("\n"));
    }
    ;
    if (_0x14a0f4 == true) {
      if (_0x4572e2[0] == undefined) {
        _0x4572e2[0] = "";
      } else {
        _0x4572e2[0];
      }
      _0x79a7ef.log("[32mEvent Executed: [37m" + _0x3ff072 + _0x4805ef + " " + _0x4572e2[0] + " | [34mGroup: [37m" + _0x495b98 + " | [36muserID: [37m" + _0x27c53c + " | [35mProcess Time: [37m" + (Date.now() - timeStart) + "ms", "DEV MODE");
    }
    if (_0xc12b67.scripts.length == 0) {
      return;
    }
    if (!_0x4805ef) {
      return _0x557200.reply(_0x5b7b05("COMMAND_NO_SCRIPTS", _0x3ff072, "help"));
    }
    if (!_0xc12b67.scripts.some(_0x136e23 => _0x136e23.config.name == _0x4805ef)) {
      var _0x32ef98 = [];
      for (var _0x249d58 of _0xc12b67.scripts) {
        _0x32ef98.push(_0x249d58.config.name);
      }
      var _0x30055c = stringSimilarity.findBestMatch(_0x4805ef, _0x32ef98);
      if (_0x30055c.bestMatch.rating >= 0.5) {
        _0x4805ef = _0x30055c.bestMatch.target;
      } else {
        return _0x557200.reply(_0x5b7b05("COMMAND_NO_FIND", _0x4805ef));
      }
    }
    function _0x58dd21(_0x53dd70, _0x427685) {
      var _0x1a3789;
      var _0x103e79;
      var _0x3ec8d8;
      if (_0x427685 == 0) {
        _0x1a3789 = _0x5b7b05("ROLE_0");
      } else if (_0x427685 == 1) {
        _0x1a3789 = _0x5b7b05("ROLE_1");
      } else if (_0x427685 == 2) {
        _0x1a3789 = _0x5b7b05("ROLE_2");
      } else if (_0x427685 == 3) {
        _0x1a3789 = _0x5b7b05("ROLE_3");
      }
      _0x3ec8d8 = _0x5b7b05("COMMAND_NO_PERMISSIONS", _0x3ff072 + _0x53dd70, _0x1a3789);
      return _0x3ec8d8;
    }
    if (_0xc12b67.scripts.findIndex(_0x5002dc => _0x5002dc.config.name == _0x4805ef) !== -1) {
      const _0x6aec61 = _0xc12b67.scripts.find(_0x5a9bf1 => _0x5a9bf1.config.name == _0x4805ef);
      _0x240746 = null;
      _0x46b3eb.getThreadInfo(_0x495b98, (_0x194148, _0x3bf6a9) => {
        for (var _0x3f06e5 of _0x3bf6a9.adminIDs) {
          if (_0x3f06e5.id == _0x27c53c) {
            _0x240746 = 1;
          }
        }
      });
      if (_0x240746 == null) {
        if (_0x45d4f8.find(_0x1f62e4 => _0x1f62e4.toString() == _0x27c53c)) {
          _0x240746 = 2;
        } else if (_0x427636.find(_0x5de8a3 => _0x5de8a3.toString() == _0x27c53c)) {
          _0x240746 = 3;
        } else {
          _0x240746 = 0;
        }
      }
      var _0x27d586;
      var _0x9fc988 = (await _0x258314.getData(_0x495b98)).language || _0x37bc3a.LANGUAGE_SCRIPTS;
      if (_0x6aec61.language && typeof _0x6aec61.language == "object" && _0x6aec61.language.hasOwnProperty(_0x9fc988)) {
        _0x27d586 = (..._0x3bcb76) => {
          var _0x132038 = _0x6aec61.language[_0x9fc988][_0x3bcb76[0]] || "";
          for (var _0x41c562 = _0x3bcb76.length; _0x41c562 > 0; _0x41c562--) {
            const _0x1c1a5a = RegExp("%" + _0x41c562, "g");
            _0x132038 = _0x132038.replace(_0x1c1a5a, _0x3bcb76[_0x41c562]);
          }
          return _0x132038;
        };
      } else {
        _0x27d586 = () => {};
      }
      const _0x129c98 = {
        global: _0xc12b67,
        api: _0x46b3eb,
        event: _0x3923f3,
        Config: _0x37bc3a,
        logger: _0x79a7ef,
        args: _0x4572e2,
        body: _0x4470a1,
        role: _0x240746,
        Threads: _0x258314,
        Users: _0x18f738,
        getText: _0x27d586
      };
      if (_0x6aec61.config.role == 0) {
        try {
          return _0x6aec61.onMessage(_0x129c98);
        } catch (_0x523ed4) {
          return _0x557200.reply(_0x523ed4);
        }
      } else if (_0x6aec61.config.role == 1) {
        if (_0x6aec61.config.role < 1) {
          return _0x557200.reply(_0x58dd21(_0x6aec61.config.name, _0x240746));
        } else {
          try {
            return _0x6aec61.onMessage(_0x129c98);
          } catch (_0x44e51d) {
            return _0x557200.reply(_0x44e51d);
          }
        }
      } else if (_0x6aec61.config.role == 2) {
        if (_0x6aec61.config.role !== 2) {
          return _0x557200.reply(_0x58dd21(_0x6aec61.config.name, _0x240746));
        } else {
          try {
            return _0x6aec61.onMessage(_0x129c98);
          } catch (_0x50e401) {
            return _0x557200.reply(_0x50e401);
          }
        }
      } else if (_0x6aec61.config.role == 3) {
        if (_0x6aec61.config.role < 2) {
          return _0x557200.reply(_0x58dd21(_0x6aec61.config.name, _0x240746));
        } else {
          try {
            return _0x6aec61.onMessage(_0x129c98);
          } catch (_0x57c8d9) {
            return _0x557200.reply(_0x57c8d9);
          }
        }
      } else {
        return;
      }
    }
  }
}
const _0xeec859 = {
  index: index
};
module.exports = _0xeec859;
