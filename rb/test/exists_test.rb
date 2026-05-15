# PassantenfrequenzStadtStgallen SDK exists test

require "minitest/autorun"
require_relative "../PassantenfrequenzStadtStgallen_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = PassantenfrequenzStadtStgallenSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
