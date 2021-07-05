const {ipcRenderer} = require('electron')

module.exports = () => {
  const runRpc = () => {
    ipcRenderer.invoke("rpc-activity", (() => {
                         try {
                           return window.getGameActivity()
                         } catch (exception) {
                           console.error(exception)
                           return {
                             mode: "In Game", map: "JANREX", time: Date.now()
                           }
                         }
                       })())
  };
  runRpc();
  setInterval(() => {runRpc()}, 15e3)
}
