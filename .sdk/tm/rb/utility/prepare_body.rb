# PassantenfrequenzStadtStgallen SDK utility: prepare_body
require_relative 'media'
module PassantenfrequenzStadtStgallenUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return PassantenfrequenzStadtStgallenUtilities.raw_body(ctx.reqdata) if PassantenfrequenzStadtStgallenUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
