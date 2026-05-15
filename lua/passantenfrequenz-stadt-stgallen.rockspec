package = "voxgig-sdk-passantenfrequenz-stadt-stgallen"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/passantenfrequenz-stadt-stgallen-sdk.git"
}
description = {
  summary = "PassantenfrequenzStadtStgallen SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["passantenfrequenz-stadt-stgallen_sdk"] = "passantenfrequenz-stadt-stgallen_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
