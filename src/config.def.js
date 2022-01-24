module.exports = {
  disableFrameRateLimit : true,
  angleBackend : "default", // gl default d3d11 d3d9 d3d11on12 vulkan metal
  inProcessGPU : false,
  allowScripts : true,
  discordRpc : true,
  startInFullscreen : true,
  scriptSettings : {
//sky color script is broken
    skyColor : {
      enabled : false,
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
