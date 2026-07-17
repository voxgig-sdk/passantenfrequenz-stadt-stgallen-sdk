-- PassantenfrequenzStadtStgallen SDK exists test

local sdk = require("passantenfrequenz-stadt-stgallen_sdk")

describe("PassantenfrequenzStadtStgallenSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
