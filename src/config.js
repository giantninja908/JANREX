module.exports = {
  disableFrameRateLimit: true,
  angleBackend: "default",
  inProcessGPU: false,
  allowScripts: true,
  scriptSettings: {
    skyColor: {
      enabled: true,
      color: "#000000",
    },
    autoFFA: {
      enabled: false,
      autoJoinGameMode: "ffa", // ffa tdm point ctf kc 
      autoJoinKeybind: "F4",
      attemptJoinFull: false,
      filterWrongVersion: true,
    }
  }
}
