# PassantenfrequenzStadtStgallen SDK utility: make_context
require_relative '../core/context'
module PassantenfrequenzStadtStgallenUtilities
  MakeContext = ->(ctxmap, basectx) {
    PassantenfrequenzStadtStgallenContext.new(ctxmap, basectx)
  }
end
