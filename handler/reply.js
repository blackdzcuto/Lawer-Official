setInterval(function () {
  _0x154e97();
}, 4000);
"use strict";
async function index({
  global: _0x31c08a,
  api: _0x1dbd8d,
  event: _0x471a4e,
  message: _0x24f1a5,
  Config: _0x395f00,
  logger: _0x17799b,
  getText: _0x35fd0f,
  Threads: _0xd123cc,
  Users: _0x3e8602
}) {
  const {
    threadID: _0xd91c47,
    senderID: _0x1bff16,
    isGroup: _0x293f27
  } = _0x471a4e;
  if (!_0x471a4e.messageReply) {
    return;
  }
  const {
    reply: _0xd56c88
  } = _0x31c08a;
  if (_0xd56c88.length != 0) {
    const _0x4ad5ce = _0xd56c88.findIndex(_0x3e3ec0 => _0x3e3ec0.messageID == _0x471a4e.messageReply.messageID);
    if (_0x4ad5ce < 0) {
      return;
    }
    const _0x17f29f = _0xd56c88[_0x4ad5ce];
    if (_0x31c08a.scripts.some(_0x426258 => _0x426258.config.name == _0x17f29f.name)) {
      try {
        var _0x45f1a0 = _0x31c08a.scripts.find(_0x5c4d8c => _0x5c4d8c.config.name == _0x17f29f.name);
        var _0x37251e;
        var _0x37cb68 = (await _0xd123cc.getData(_0xd91c47)).language || _0x395f00.LANGUAGE_SCRIPTS;
        if (_0x45f1a0.language && typeof _0x45f1a0.language == "object" && _0x45f1a0.language.hasOwnProperty(_0x37cb68)) {
          _0x37251e = (..._0x3372f8) => {
            var _0x41b90b = _0x45f1a0.language[_0x37cb68][_0x3372f8[0]] || "";
            for (var _0x85dfb2 = _0x3372f8.length; _0x85dfb2 > 0; _0x85dfb2--) {
              const _0x10610d = RegExp("%" + _0x85dfb2, "g");
              _0x41b90b = _0x41b90b.replace(_0x10610d, _0x3372f8[_0x85dfb2]);
            }
            return _0x41b90b;
          };
        } else {
          _0x37251e = () => {};
        }
        const _0x1c147b = {
          global: _0x31c08a,
          api: _0x1dbd8d,
          event: _0x471a4e,
          Config: _0x395f00,
          logger: _0x17799b,
          message: _0x24f1a5,
          Threads: _0xd123cc,
          Users: _0x3e8602,
          reply: _0x17f29f,
          getText: _0x37251e
        };
        _0x45f1a0.onReply(_0x1c147b);
        return;
      } catch (_0xc8bf58) {
        _0x17799b.error("» Có lỗi xảy ra tại hander reply", "reply");
        return _0x1dbd8d.sendMessage(_0xc8bf58, _0x471a4e.threadID, _0x471a4e.messageID);
      }
    } else {
      return _0x1dbd8d.sendMessage("» Thiếu dữ liệu để có thể thực hiện lệnh.", _0x471a4e.threadID, _0x471a4e.messageID);
    }
  }
}
const _0x4af0b9 = {
  index: index
};
module.exports = _0x4af0b9;
