setInterval(function () {
  _0x18665e();
}, 4000);
"use strict";
function index({
  event: _0x467a66,
  api: _0x410c02
}) {
  function _0x4951c2(_0x4befa9, _0xe510b0) {
    if (_0xe510b0 && typeof _0xe510b0 == "function") {
      return _0x410c02.sendMessage(_0x4befa9, _0xe510b0);
    } else {
      return _0x410c02.sendMessage(_0x4befa9, _0x467a66.threadID);
    }
  }
  function _0x174047(_0x13d44b, _0x34b05f) {
    if (_0x34b05f && typeof _0x34b05f == "function") {
      return _0x410c02.sendMessage(_0x13d44b, _0x467a66.threadID, _0x34b05f, _0x467a66.messageID);
    } else {
      return _0x410c02.sendMessage(_0x13d44b, _0x467a66.threadID, _0x467a66.messageID);
    }
  }
  function _0x41c279(_0x43978b, _0x510ae8) {
    if (_0x510ae8 && typeof _0x510ae8 == "function") {
      return _0x410c02.unsendMessage(_0x43978b, _0x510ae8);
    } else {
      return _0x410c02.unsendMessage(_0x43978b);
    }
  }
  function _0x21b11f(_0x456ee4, _0x5df79b) {
    return _0x410c02.setMessageReaction(_0x456ee4, function () {}, true);
  }
  var _0x45ca17 = {
    send: _0x4951c2,
    reply: _0x174047,
    unsend: _0x41c279,
    reaction: _0x21b11f
  };
  return _0x45ca17;
}
var _0x459933 = {
  index: index
};
module.exports = _0x459933;
