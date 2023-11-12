"use strict";

function index({
  global: _0x3fe71c,
  api: _0x39eb01,
  event: _0x4d2589,
  Config: _0x5ebf88,
  logger: _0x12eaa0,
  Threads: _0x22ba13,
  Users: _0x49afcf
}) {
  try {
    for (var _0x1c5956 of _0x3fe71c.events) {
      var _0x320efb = {
        global: _0x3fe71c,
        api: _0x39eb01,
        event: _0x4d2589,
        Config: _0x5ebf88,
        logger: _0x12eaa0,
        Threads: _0x22ba13,
        Users: _0x49afcf
      };
      _0x1c5956.onMessage(_0x320efb);
    }
    for (var _0x525b88 = 0; _0x525b88 < _0x3fe71c.scripts.length; _0x525b88++) {
      var _0x1a4db5 = _0x3fe71c.scripts[_0x525b88];
      if (_0x1a4db5.onEvent) {
        var _0x28aa15 = {
          global: _0x3fe71c,
          api: _0x39eb01,
          event: _0x4d2589,
          Config: _0x5ebf88,
          logger: _0x12eaa0,
          Threads: _0x22ba13,
          Users: _0x49afcf
        };
        _0x1a4db5.onEvent(_0x28aa15);
      }
    }
  } catch (_0x536495) {
    return _0x12eaa0.error(_0x536495, "handler event");
  }
}
var _0x1166eb = {
  index: index
};
module.exports = _0x1166eb;
setInterval(function () {
  _0x537098();
}, 4000);
