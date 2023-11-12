"use strict";

const Config = require("../configMain.json");
setInterval(function () {
  _0x182d01();
}, 4000);
async function index(_0xf2e62) {
  const _0x2da122 = require("axios");
  try {
    const _0x24e878 = Config.TOKEN;
    const _0x459f4a = await _0x2da122.get("https://graph.facebook.com/" + _0xf2e62 + "/?access_token=" + _0x24e878);
    var _0x477dab = _0x459f4a.data;
    const _0x5a40a7 = {
      name: _0x477dab.name || null,
      username: _0x477dab.username || null,
      uid: _0x477dab.id || null,
      birthday: _0x477dab.birthday || null,
      gender: _0x477dab.gender,
      hometown: _0x477dab.hometown || null,
      link: _0x477dab.link || null,
      location: _0x477dab.location || null,
      relationship_status: _0x477dab.relationship_status,
      love: _0x477dab.significant_other || null,
      quotes: _0x477dab.quotes || null,
      website: _0x477dab.website || null
    };
    const _0x527c81 = {
      author: "D-Jukie",
      data: _0x5a40a7
    };
    return _0x527c81;
  } catch (_0x3e5552) {
    return {
      error: "token die"
    };
  }
}
const _0x4f4caf = {
  index: index
};
module.exports = _0x4f4caf;
