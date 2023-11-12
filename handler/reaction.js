setInterval(function () {
  _0x53a1a5();
}, 4000);
"use strict";
async function index({
  global: _0x1ce8d2,
  api: _0x1cd7c3,
  event: _0x3ea6af,
  message: _0x142c19,
  Config: _0x175f5a,
  logger: _0x18926a,
  getText: _0x298f47,
  Threads: _0x924379,
  Users: _0x1de22b
}) {
  const {
    threadID: _0x4ff2a6,
    senderID: _0xf690f2,
    isGroup: _0x1b46c1
  } = _0x3ea6af;
  const {
    reaction: _0x229177
  } = _0x1ce8d2;
  if (_0x229177.length != 0) {
    const _0x53b0f4 = _0x229177.findIndex(_0x3e414b => _0x3e414b.messageID == _0x3ea6af.messageID);
    if (_0x53b0f4 < 0) {
      return;
    }
    const _0x3152b3 = _0x229177[_0x53b0f4];
    if (_0x1ce8d2.scripts.some(_0x45916d => _0x45916d.config.name == _0x3152b3.name)) {
      try {
        var _0x24ecf5 = _0x1ce8d2.scripts.find(_0x2c40cb => _0x2c40cb.config.name == _0x3152b3.name);
        var _0x2cd260;
        var _0x45f24c = (await _0x924379.getData(_0x4ff2a6)).language || _0x175f5a.LANGUAGE_SCRIPTS;
        if (_0x24ecf5.language && typeof _0x24ecf5.language == "object" && _0x24ecf5.language.hasOwnProperty(_0x45f24c)) {
          _0x2cd260 = (..._0x1c682b) => {
            var _0x393fa1 = _0x24ecf5.language[_0x45f24c][_0x1c682b[0]] || "";
            for (var _0x2aa20f = _0x1c682b.length; _0x2aa20f > 0; _0x2aa20f--) {
              const _0x2f03c7 = RegExp("%" + _0x2aa20f, "g");
              _0x393fa1 = _0x393fa1.replace(_0x2f03c7, _0x1c682b[_0x2aa20f]);
            }
            return _0x393fa1;
          };
        } else {
          _0x2cd260 = () => {};
        }
        const _0x339b5d = {
          global: _0x1ce8d2,
          api: _0x1cd7c3,
          event: _0x3ea6af,
          Config: _0x175f5a,
          logger: _0x18926a,
          message: _0x142c19,
          Threads: _0x924379,
          Users: _0x1de22b,
          reaction: _0x3152b3,
          getText: _0x2cd260
        };
        _0x24ecf5.onReaction(_0x339b5d);
        return;
      } catch (_0x11b285) {
        _0x18926a.error("» Có lỗi xảy ra tại hander reaction", "reaction");
        return _0x1cd7c3.sendMessage(_0x11b285, _0x3ea6af.threadID, _0x3ea6af.messageID);
      }
    } else {
      return _0x1cd7c3.sendMessage("» Thiếu dữ liệu để có thể thực hiện lệnh.", _0x3ea6af.threadID, _0x3ea6af.messageID);
    }
  }
}
const _0x3f2d8d = {
  index: index
};
module.exports = _0x3f2d8d;
