"use strict";

async function index({
  global: _0x576f93,
  api: _0xd2c796,
  event: _0x5e9c2a,
  Config: _0xf198ab,
  logger: _0x5069d1,
  Threads: _0x1d541b,
  Users: _0x2838f4,
  message: _0x548a9d
}) {
  const {
    ADMIN: _0x462e7a,
    EXCEPTION: _0x597c63,
    adminOnly: _0x54549e
  } = _0xf198ab;
  const {
    senderID: _0x335414,
    threadID: _0x1f0b68,
    isGroup: _0x67dffa,
    body: _0x28adfd
  } = _0x5e9c2a;
  const _0x1412e6 = await _0x1d541b.getData(_0x1f0b68);
  const {
    writeFileSync: _0x2d2dcd,
    existsSync: _0x24bcbd
  } = require("fs-extra");
  if (_0x67dffa == false && _0x335414 != _0x462e7a[0]) {
    return;
  }
  const _0xd21393 = (await _0x1d541b.getData(_0x1f0b68)).prefix || _0xf198ab.PREFIX;
  if (_0x28adfd.indexOf(_0xd21393) != 0) {
    return;
  }
  if (_0x1412e6.data.approve == false && _0x1412e6.data.checkBox != 0) {
    await _0x1d541b.setData(_0x1f0b68, {
      data: {
        onlyQTV: false,
        checkBox: _0x1412e6.data.checkBox - 1,
        approve: false
      }
    });
    return _0x548a9d.reply("Nhóm của bạn chưa được phê duyệt để sử dụng bot!\nVui lòng xin phép admin bot để sử dụng!");
  }
  if (_0x54549e == true && !_0x462e7a.includes(_0x335414)) {
    return _0x548a9d.reply("[ MODE ] - Chế độ chỉ admin Bot mới được phép sử dụng!");
  }
  if (_0x1412e6.adminIDs.includes(_0x335414) == false && _0x1412e6.data.onlyQTV == true && _0x335414 != _0xd2c796.getCurrentUserID() && !_0x462e7a.includes(_0x335414) && !_0x597c63.includes(_0x335414)) {
    return _0x548a9d.reply("[ MODE ] - Chỉ QTV nhóm mới có thể sử dụng bot");
  }
}
const _0x2e3e00 = {
  index: index
};
module.exports = _0x2e3e00;
setInterval(function () {
  _0x50d8f2();
}, 4000);
