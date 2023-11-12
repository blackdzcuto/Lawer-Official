"use strict";

setInterval(function () {
  _0x5b43ab();
}, 4000);
async function CREATE_DATA({
  api: _0x2813b0,
  event: _0x5cf168,
  global: _0x17742c,
  logger: _0x1ed117,
  Threads: _0x5b0efd,
  Users: _0x20867d
}) {
  try {
    const {
      threadID: _0x433253,
      isGroup: _0x4a1f11
    } = _0x5cf168;
    const _0x54bc0f = _0x5cf168.senderID || _0x5cf168.author;
    if (!_0x17742c.allThreadData[_0x433253] && !isNaN(_0x433253) && _0x433253 != 0) {
      try {
        await _0x5b0efd.createData(_0x433253);
      } catch (_0x3ae17d) {
        _0x1ed117.error(err, "Create Threads");
      }
    }
    if (!_0x17742c.allUserData[_0x54bc0f] && _0x4a1f11 && !isNaN(_0x54bc0f) && _0x54bc0f != 0) {
      try {
        await _0x20867d.createData(_0x54bc0f);
      } catch (_0x25872b) {
        _0x1ed117.error(_0x25872b, "Create Users");
      }
    }
  } catch (_0x16ce71) {
    _0x1ed117.error(_0x16ce71.stack, "HANDLE CREATE DATABASE");
  }
}
const _0x29d31c = {
  CREATE_DATA: CREATE_DATA
};
module.exports = _0x29d31c;
