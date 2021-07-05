const {app, ipcMain, BrowserWindow} = require("electron");
const path = require('path');
const config = require('./config');
const DiscordRpc = require("discord-rpc");

console.log(config);

let win;

const init =
    () => {
      win = new BrowserWindow({
        width : 1280,
        height : 720,
        autoHideMenuBar : true,
        webPreferences : {
          preload : path.join(__dirname, 'preload.js'),
        }
      })

      win.removeMenu();
      win.loadURL('https://krunker.io');

      win.once("ready-to-show", () => { win.show(); });
      ipcMain.handle("rpc-activity",
                     async (_, activity) => { await setActivity(activity); })
    }

const clientId = "861369241096552448";
const rpc = new DiscordRpc.Client({transport : 'ipc'});

const setActivity =
    async (gameInfo) => {
  console.log(gameInfo)
  rpc.setActivity({
    details : gameInfo.mode ? gameInfo.mode : "Playing Krunker",
    state : gameInfo.map ? gameInfo.map : "having fun!",
    endTimestamp : Date.now() + gameInfo.time * 1000,
    largeImageText : "JANREX Client",
    largeImageKey : "janrex"
  })
}

const addSwitches =
    () => {
      if (config.disableFrameRateLimit) {
        app.commandLine.appendSwitch("disable-frame-rate-limit");
        app.commandLine.appendSwitch("disable-gpu-vsync");
      }
      if (config.inProcessGPU)
        app.commandLine.appendSwitch("in-process-gpu");
      app.commandLine.appendSwitch("use-angle", config.angleBackend);
    }

addSwitches();
app.on('ready', init);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//------rpc-------

rpc.login({clientId}).catch(console.error);
