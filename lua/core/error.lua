-- PassantenfrequenzStadtStgallen SDK error

local PassantenfrequenzStadtStgallenError = {}
PassantenfrequenzStadtStgallenError.__index = PassantenfrequenzStadtStgallenError


function PassantenfrequenzStadtStgallenError.new(code, msg, ctx)
  local self = setmetatable({}, PassantenfrequenzStadtStgallenError)
  self.is_sdk_error = true
  self.sdk = "PassantenfrequenzStadtStgallen"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PassantenfrequenzStadtStgallenError:error()
  return self.msg
end


function PassantenfrequenzStadtStgallenError:__tostring()
  return self.msg
end


return PassantenfrequenzStadtStgallenError
