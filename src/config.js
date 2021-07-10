module.exports = {
  disableFrameRateLimit : true,
  angleBackend : "default",
  inProcessGPU : false,
  allowScripts : true,
  discordRpc : true,
  startInFullscreen : true,
  scriptSettings : {
    skyColor : {
      enabled : true,
      color : "#000000",
    },
    autoFFA : {
      // provided by nz#4471 / krTree
      enabled : false,
      autoJoinGameMode : "ffa", // ffa tdm point ctf kc
      autoJoinKeybind : "F4",
      attemptJoinFull : false,
      filterWrongVersion : true,
    }
  }
}
