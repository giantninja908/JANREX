// preload stuff

const config = require("./config");

new MutationObserver((a) => {
  a.forEach((b) => {
    if (b.type === "attributes" && b.target.style.display != "none") {
      document.getElementById("popupHolder").style.display = "none";
      document.getElementById("clientPop").style.display = "none";
    }
  });
}).observe(document.getElementById("clientPop"), {
  attributes: true,
});

let scripts =
    [
      () => {
        // SKY COLOR SCRIPT
        if (config.scriptSettings.skyColor.enabled) {
          Reflect.defineProperty(Object.prototype, "skyCol", {
            value : config.scriptSettings.skyColor.color,
          });
        }
      },
      (require("./scripts/lobby-switch")), (require("./scripts/discord-rpc")),
      () => {console.log("add your own scripts!")}
    ]

    const runScripts = () => { scripts.forEach(script => {
      try {
        (script)()
      } catch (_) {}
    }); }

if (config.allowScripts) runScripts()

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    document.exitPointerLock();
  }
});
