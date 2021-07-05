const {ipcRenderer} = require('electron')
const config = require("../config")

module.exports = () => {
  if (!config.discordRpc)
    return;
  const runRpc = () => {
    const dat = (() => {
      try {
        return window.getGameActivity()
      } catch (excp) {
        console.error(excp)
        return {}
      }
    })()
    ipcRenderer.invoke("rpc-activity", dat)
  };
  runRpc();
  setInterval(() => {runRpc()}, 15e3)
}
