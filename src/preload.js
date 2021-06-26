//preload stuff

const config = require("./config");

window.OffCliV = "something" //get rid of client unsupported message 

let scripts = [
  () => {
    //SKY COLOR SCRIPT
    if(config.scriptSettings.skyColor.enabled){
      Reflect.defineProperty(Object.prototype, "skyC", {
          value: config.scriptSettings.skyColor.color,
      });
    }
  }
]




const runScripts = () => {
  scripts.forEach(script => {
    (script)()
  });
}


if(config.allowScripts) runScripts()