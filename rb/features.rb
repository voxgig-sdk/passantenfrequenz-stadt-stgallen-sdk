# PassantenfrequenzStadtStgallen SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PassantenfrequenzStadtStgallenFeatures
  def self.make_feature(name)
    case name
    when "base"
      PassantenfrequenzStadtStgallenBaseFeature.new
    when "test"
      PassantenfrequenzStadtStgallenTestFeature.new
    else
      PassantenfrequenzStadtStgallenBaseFeature.new
    end
  end
end
