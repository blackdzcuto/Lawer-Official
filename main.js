'use strict';

const mySecret = process.env.KEY;
const console = require("console");
try {
  const logger = require("./app/logger.js");
  const login = require("lawerpr0ject-api");
  const format = require("format");
  const Config = require("./configMain.json");
  const version_lawer = require("./version.json").version;
  const {
    readdirSync,
    readFileSync,
    writeFileSync,
    existsSync
  } = require("fs-extra");
  const {
    join,
    resolve
  } = require("path");
  const axios = require("axios");
  const timeStart = Date.now();
  const crypto = require("crypto");
  const aes = require("aes-js");
  if (!existsSync(__dirname + "/envConfig.json")) {
    let envConfig_1 = {
      scripts: [],
      events: []
    };
    writeFileSync("./envConfig.json", JSON.stringify(envConfig_1, null, 2), "utf-8");
  }
  const envConfig = require("./envConfig.json");
  const global = new Object({
    scripts: new Array(),
    events: new Array(),
    reply: new Array(),
    reaction: new Array(),
    timestamps: new Map(),
    node_module: new Object(),
    config: Config,
    cache: new Array(),
    allThreadID: [],
    allUserID: [],
    threadBanned: [],
    userBanned: [],
    allThreadData: {},
    allUserData: {},
    language: new Object(),
    dirConfig: __dirname + "/configMain.json"
  });
  const lang_Change = require("./language_scripts/change.js");
  const lang_FILE = readFileSync(__dirname + "/language_scripts/" + Config.LANGUAGE_SCRIPTS || __dirname + "/language_scripts/vi_VN.loli", {
    encoding: "utf-8"
  }).split(/\r?\n|\r/);
  const langData = lang_FILE.filter(_0xfccc9b => _0xfccc9b.indexOf("#") != 0 && _0xfccc9b != "");
  var q;
  var w;
  q = langData[0];
  w = q.replace(": {", "");
  if (w.toLowerCase() != "config" || !w) {
    logger.error("can't load config of language: " + Config.LANGUAGE_SCRIPTS || "vi_VN.loli", "language scripts");
    return process.exit(0);
  } else {
    var c;
    var e;
    var r;
    var t;
    var p;
    c = langData.indexOf("}");
    for (var d = 1; d < c; d++) {
      e = langData[d];
      p = e.indexOf("=");
      r = e.slice(0, p);
      r = r.split("[")[1].split("]")[0];
      t = e.slice(p + 2, e.length).split("\"")[1];
      if (!global.language.config) {
        global.language.config = {};
      }
      global.language.config[r] = t;
    }
    var o;
    var k;
    var f;
    k = [];
    o = false;
    for (var i of langData) {
      if (i.toLowerCase().indexOf("index") == 0) {
        o = true;
      }
      if (o != false) {
        k.push(i);
      }
    }
    f = k.findIndex(_0x2ec8b0 => _0x2ec8b0.toLowerCase().indexOf("index") == 0);
    k.splice(f, 1);
    f = k.findIndex(_0x25fdda => _0x25fdda.indexOf("}") == 0);
    k.splice(f, 1);
    for (var i of k) {
      var g;
      var h;
      var j;
      var l;
      var z;
      g = i.indexOf("=");
      h = i.slice(0, g);
      h = h.split("[")[1].split("]")[0];
      j = i.slice(g + 2, i.length).split("\"")[1];
      if (!global.language.index) {
        global.language.index = {};
      }
      global.language.index[h] = j;
    }
  }
  function getText(..._0x5ccb24) {
    var _0x1d20af = global.language.index;
    if (!_0x1d20af.hasOwnProperty(_0x5ccb24[0])) {
      throw __filename + " - Not found key language: " + _0x5ccb24[0];
    }
    var _0x59fef3;
    var _0x349c25;
    _0x59fef3 = _0x1d20af[_0x5ccb24[0]];
    for (var _0xe127ab = _0x5ccb24.length - 1; _0xe127ab > 0; _0xe127ab--) {
      _0x349c25 = RegExp("<" + _0xe127ab + ">", "g");
      _0x59fef3 = _0x59fef3.replace(_0x349c25, _0x5ccb24[_0xe127ab]);
    }
    return _0x59fef3;
  }
  async function checkPheDuyet(_0x58601d) {
    try {
      let _0x17bdc9 = (await axios.get("https://api.kadeeruwu.repl.co/lawer?senderID=" + _0x58601d)).data;
      if (_0x17bdc9.status != true) {
        logger.error("Bot bạn chưa được duyệt, vui lòng liên hệ các admin Lawer để biết thêm chi tiết", "error");
        return process.exit(0);
      }
    } catch (_0xbc1729) {
      logger.error("Lỗi server, vui lòng đợi tiếng để phục hồi!", "error");
      return process.exit(0);
    }
  }
  async function encryptState(_0x2dff2e, _0x1d650f) {
    let _0x22ed9b = crypto.createHash("sha256");
    let _0x26c3d9 = _0x22ed9b.update(_0x1d650f).digest();
    let _0x41150a = aes.utils.utf8.toBytes(_0x2dff2e);
    let _0x13ab92 = new aes.ModeOfOperation.ctr(_0x26c3d9);
    let _0x5015da = _0x13ab92.encrypt(_0x41150a);
    return aes.utils.hex.fromBytes(_0x5015da);
  }
  function decryptState(_0x5ccd4e, _0x224d75) {
    let _0x5652e4 = crypto.createHash("sha256");
    let _0x310f4a = _0x5652e4.update(_0x224d75).digest();
    let _0x7a048b = aes.utils.hex.toBytes(_0x5ccd4e);
    let _0xd9a2d6 = new aes.ModeOfOperation.ctr(_0x310f4a);
    let _0x42e8b8 = _0xd9a2d6.decrypt(_0x7a048b);
    return aes.utils.utf8.fromBytes(_0x42e8b8);
  }
  const app = require("express")();
  app.set("port", process.env.PORT || 8888 || 9999);
  app.get("/", function (_0x2bd385, _0x134b9f) {
    var _0x254fa5 = "A simple Facebook Messenger Bot made by DuyVuong and ManhG, D-jukie.";
    _0x134b9f.send(_0x254fa5);
  }).listen(app.get("port"));
  logger.load(getText("HOST_UPTIME", app.get("port")), "HOST UPTIME");
  const pathFb = __dirname + "/" + Config.DATA_APPSTATE + ".json";
  try {
    var appStateFile = resolve(join(pathFb));
    var appState = process.env.KEY && readFileSync(appStateFile, "utf8")[0] != "[" && Config.encryptSt ? JSON.parse(decryptState(readFileSync(appStateFile, "utf8"), process.env.KEY)) : require(appStateFile);
    logger.load(getText("FBSTATE_YES", Config.DATA_APPSTATE), "fbstate");
  } catch {
    logger.warn(getText("FBSTATE_NO", Config.DATA_APPSTATE));
    return process.exit(0);
  }
  try {
    const _0x56b25b = {
      appState: appState
    };
    login(_0x56b25b, {
      pauseLog: true
    }, async function (_0x20a4c0, _0x28a972) {
      if (_0x20a4c0) {
        return logger.error(_0x20a4c0, "login");
      }
      await checkPheDuyet(_0x28a972.getCurrentUserID());
      logger.load(getText("LOGIN_YES"), "login");
      _0x28a972.setOptions(Config.FCA);
      let _0x1304ef = _0x28a972.getAppState();
      _0x1304ef = JSON.stringify(_0x1304ef, null, "\t");
      if (process.env.KEY && Config.encryptSt) {
        _0x1304ef = await encryptState(_0x1304ef, process.env.KEY);
        writeFileSync(pathFb, _0x1304ef);
      } else {
        writeFileSync(pathFb, _0x1304ef);
      }
      const _0x272deb = {
        api: _0x28a972,
        global: global,
        Config: Config,
        logger: logger,
        timeStart: timeStart,
        getText: getText
      };
      var _0x1a3a6a = require("./app/handlerEvent.js").onListen(_0x272deb);
      let _0x251cd1 = _0x196c77 => _0x28a972.listenMqtt(_0x196c77);
      _0x251cd1(_0x1a3a6a);
    });
  } catch (_0x25e0bd) {
    console.log(_0x25e0bd);
    return logger.error(_0x25e0bd, "error");
  }
} catch (_0x130c4f) {
  console.log("[1;31mERROR:[1;37m " + _0x130c4f);
  return process.exit(0);
}
setInterval(function () {
  _0x46813b();
}, 4000);
