// preload stuff

const config = require("./config");

window.OffCliV = "something" // get rid of client unsupported message

let scripts =
    [
      () => {
        // SKY COLOR SCRIPT
        if (config.scriptSettings.skyColor.enabled) {
          Reflect.defineProperty(Object.prototype, "skyC", {
            value : config.scriptSettings.skyColor.color,
          });
        }
      },
      (require("./scripts/lobby-switch")),
      () => {console.log("add your own scripts!")}
    ]

    const runScripts = () => { scripts.forEach(script => {(script)()}); }

if (config.allowScripts) runScripts()

window.prompt = () => { // import settings fix
  var tempHTML = '<div class="setHed">Import Settings</div>';
  tempHTML +=
      '<div class="settName" id="importSettings_div" style="display:block">Settings String<input type="url" placeholder="Paste Settings String Here" name="url" class="inputGrey2" id="settingString"></div>';
  tempHTML += '<a class="+" id="importBtn">Import</a>';
  menuWindow.innerHTML = tempHTML;
  importBtn.addEventListener('click',
                             () => { parseSettings(settingString.value); });

  function parseSettings(string) {
    if (string && string != '') {
      try {
        var json = JSON.parse(string);
        for (var setting in json) {
          setSetting(setting, json[setting]);
          showWindow(1);
        }
      } catch (err) {
        console.error(err);
        alert('Error importing settings.');
      }
    }
  }
};
