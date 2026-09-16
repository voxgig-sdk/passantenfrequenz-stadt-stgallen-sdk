# PassantenfrequenzStadtStgallen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PassantenfrequenzStadtStgallenFeatures
  def self.make_feature(name)
    case name
    when "base"
      PassantenfrequenzStadtStgallenBaseFeature.new
    when "ratelimit"
      PassantenfrequenzStadtStgallenRatelimitFeature.new
    when "retry"
      PassantenfrequenzStadtStgallenRetryFeature.new
    when "test"
      PassantenfrequenzStadtStgallenTestFeature.new
    when "timeout"
      PassantenfrequenzStadtStgallenTimeoutFeature.new
    else
      PassantenfrequenzStadtStgallenBaseFeature.new
    end
  end
end
