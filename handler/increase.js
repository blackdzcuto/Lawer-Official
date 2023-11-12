setInterval(function () {
  _0x100f81();
}, 4000);
"use strict";
function index({
  global: _0x5b6d6e,
  api: _0x2cde14,
  event: _0x25e66b,
  Config: _0x4a2c2a,
  logger: _0x178235,
  Threads: _0x4fbe8c,
  Users: _0x7d64b8
}) {
  const _0x1784fd = require("../app/database/threads.json");
  const _0x1d44ab = require("../app/database/users.json");
  const {
    writeFileSync: _0x9a11fb
  } = require("fs-extra");
  const {
    resolve: _0x14518a
  } = require("path");
  const _0x371dc9 = _0x14518a(__dirname, "../", "app", "database", "threads.json");
  const _0x51eb6a = _0x14518a(__dirname, "../", "app", "database", "users.json");
  try {
    var _0x319438 = _0x1784fd[_0x25e66b.threadID].members[_0x25e66b.senderID];
    _0x319438.exp = _0x319438.exp + 1;
    _0x9a11fb(_0x371dc9, JSON.stringify(_0x1784fd, null, 2));
    var _0x258c64 = _0x1d44ab[_0x25e66b.senderID];
    _0x258c64.exp = _0x258c64.exp + 1;
    _0x9a11fb(_0x51eb6a, JSON.stringify(_0x1d44ab, null, 2));
  } catch {
    return;
  }
}
const _0xea65b2 = {
  index: index
};
module.exports = _0xea65b2;
