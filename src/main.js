const {app, BrowserWindow} = require("electron");
const path = require('path');
const config = require('./config');

console.log(config);

const init =
    () => {
      let win = new BrowserWindow({
        width : 1280,
        height : 720,
        autoHideMenuBar: true,
        webPreferences : {
          preload : path.join(__dirname, 'preload.js')
        }
      })

      win.removeMenu();
      win.loadURL('https://krunker.io');

      win.once("ready-to-show", () => { win.show(); });
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
