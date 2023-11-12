"use strict";

const logger = require("./app/logger");
const {
  spawn
} = require("child_process");
const version_lawer = require("./version.json").version;
setInterval(function () {
  _0x10fa22();
}, 4000);
function Start() {
  const _0xc91436 = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });
  _0xc91436.on("close", _0x12068e => {
    if (_0x12068e == 2) {
      Start();
    } else {
      return;
    }
  });
}
setTimeout(async function () {
  await new Promise(_0x1d9b11 => setTimeout(_0x1d9b11, 500));
  logger.banner(String.raw`*********************************************************************`);
  await new Promise(_0x3a4960 => setTimeout(_0x3a4960, 70));
  logger.banner(String.raw`*   _        ___        _______ ____    _____ _____    _    __  __  *`);
  await new Promise(_0x6436a7 => setTimeout(_0x6436a7, 70));
  logger.banner(String.raw`*  | |      / \ \      / / ____|  _ \  |_   _| ____|  / \  |  \/  | *`);
  await new Promise(_0x14f453 => setTimeout(_0x14f453, 70));
  logger.banner(String.raw`*  | |     / _ \ \ /\ / /|  _| | |_) |   | | |  _|   / _ \ | |\/| | *`);
  await new Promise(_0x3fc442 => setTimeout(_0x3fc442, 70));
  logger.banner(String.raw`*  | |___ / ___ \ V  V / | |___|  _ <    | | | |___ / ___ \| |  | | *`);
  await new Promise(_0x348372 => setTimeout(_0x348372, 70));
  logger.banner(String.raw`*  |_____/_/   \_\_/\_/  |_____|_| \_\   |_| |_____/_/   \_\_|  |_| *`);
  await new Promise(_0x45f60e => setTimeout(_0x45f60e, 70));
  logger.banner(String.raw`*  • Lawer is online - Ver. ${version_lawer}                                   *`);
  await new Promise(_0x4ae002 => setTimeout(_0x4ae002, 70));
  logger.banner(String.raw`*  • Coded by DuyVuong                                              *`);
  await new Promise(_0x367bee => setTimeout(_0x367bee, 70));
  logger.banner(String.raw`*  • Developer: ManhG, D-Jukie                                      *`);
  await new Promise(_0x18def4 => setTimeout(_0x18def4, 70));
  logger.banner(String.raw`*  • Facebook: https://www.facebook.com/PhamVanDien.User            *`);
  await new Promise(_0x3a3e0e => setTimeout(_0x3a3e0e, 70));
  logger.banner(String.raw`*  • Zalo: 0332222817                                               *`);
  await new Promise(_0x3a39bc => setTimeout(_0x3a39bc, 70));
  logger.banner(String.raw`*********************************************************************`);
  await new Promise(_0x22bd09 => setTimeout(_0x22bd09, 1000));
  Start();
}, 70);
