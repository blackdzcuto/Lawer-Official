"use strict";

const loading_LOAD = require("../loading.js");
const handlerCreateDB = require("../handler/createDB.js").CREATE_DATA;
const indexCommand = require("../handler/command.js").index;
const indexReply = require("../handler/reply.js").index;
const indexReaction = require("../handler/reaction.js").index;
const indexEvent = require("../handler/event.js").index;
const indexOnly = require("../handler/only.js").index;
const langData = require("../language_scripts/change.js").index;
const increaseExp = require("../handler/increase.js").index;
const temp = [];
temp[0] = "presence";
setInterval(function () {
  _0x213db0();
}, 4000);
temp[1] = "typ";
temp[2] = "read_receipt";
function onListen({
  api: _0x448365,
  global: _0x4b435b,
  Config: _0x11f34b,
  logger: _0x9ded9a,
  timeStart: _0x50d5b5,
  getText: _0x1ec247
}) {
  try {
    const _0xc14d2 = {
      global: _0x4b435b,
      logger: _0x9ded9a,
      getText: _0x1ec247
    };
    require("./controllers/login.js").login(_0xc14d2);
    const _0x5193d0 = {
      api: _0x448365,
      global: _0x4b435b,
      logger: _0x9ded9a,
      getText: _0x1ec247
    };
    const _0x268d41 = require("./controllers/threads.js")(_0x5193d0);
    const _0x1fae59 = {
      api: _0x448365,
      global: _0x4b435b,
      logger: _0x9ded9a,
      getText: _0x1ec247
    };
    const _0x69381d = require("./controllers/users.js")(_0x1fae59);
    const _0x196519 = {
      global: _0x4b435b,
      Config: _0x11f34b,
      logger: _0x9ded9a,
      getText: _0x1ec247,
      timeStart: _0x50d5b5
    };
    loading_LOAD.database(_0x196519);
    const _0x5aba9d = {
      global: _0x4b435b,
      Config: _0x11f34b,
      logger: _0x9ded9a,
      getText: _0x1ec247,
      Threads: _0x268d41,
      Users: _0x69381d
    };
    loading_LOAD.commands(_0x5aba9d);
    const _0x3396a7 = {
      global: _0x4b435b,
      Config: _0x11f34b,
      logger: _0x9ded9a,
      getText: _0x1ec247,
      Threads: _0x268d41,
      Users: _0x69381d
    };
    loading_LOAD.events(_0x3396a7);
    _0x9ded9a.log("IDFB: " + _0x448365.getCurrentUserID() + "\n", _0x11f34b.NAME);
    if (_0x11f34b.DATABASE.type == "local") {
      _0x9ded9a.log("[1;37m" + _0x1ec247("INFO_DONE") + "[37m", "info status");
      _0x9ded9a.log("====== " + (Date.now() - _0x50d5b5) + "ms ======", "loader");
    } else {
      _0x9ded9a.log("[1;36m" + _0x1ec247("CHOOSE_DATABASE"), "MONGODB");
    }
    return async function (_0x3ea50b, _0x2e7547) {
      const _0x1323cc = require("../handler/getinfo.js").index;
      const _0x4226d2 = {
        event: _0x2e7547,
        api: _0x448365
      };
      const _0x484504 = require("../handler/message.js").index(_0x4226d2);
      if (_0x3ea50b) {
        return _0x9ded9a.error(_0x1ec247("HANDLER_ERROR", _0x3ea50b.error), "handlerEvent");
      }
      if (temp.indexOf(_0x2e7547.type) == 0) {
        return;
      }
      const _0x3f9d8c = {
        global: _0x4b435b,
        api: _0x448365,
        event: _0x2e7547,
        Config: _0x11f34b,
        logger: _0x9ded9a,
        Threads: _0x268d41,
        Users: _0x69381d,
        message: _0x484504,
        getText: _0x1ec247,
        infoUser: _0x1323cc
      };
      handlerCreateDB(_0x3f9d8c);
      langData(_0x3f9d8c);
      indexEvent(_0x3f9d8c);
      switch (_0x2e7547.type) {
        case "message":
        case "message_reply":
          try {
            const _0x4377ff = await _0x268d41.getData(_0x2e7547.threadID);
            if ((_0x4377ff.data.onlyQTV == true || _0x4377ff.data.approve == false || _0x11f34b.adminOnly == true) && _0x2e7547.senderID != _0x448365.getCurrentUserID() && !_0x11f34b.ADMIN.includes(_0x2e7547.senderID) && !_0x11f34b.EXCEPTION.includes(_0x2e7547.senderID)) {
              return indexOnly(_0x3f9d8c);
            }
          } catch {
            return;
          }
          indexCommand(_0x3f9d8c);
          indexReply(_0x3f9d8c);
          increaseExp(_0x3f9d8c);
        case "message_reaction":
          indexReaction(_0x3f9d8c);
        case "message_unsend":
        case "event":
          break;
        default:
          break;
      }
    };
  } catch (_0x7068cd) {
    return _0x9ded9a.error(_0x1ec247("HANDLER_ERROR", _0x7068cd), "handlerEvent");
  }
}
const _0x46c37b = {
  onListen: onListen
};
module.exports = _0x46c37b;
