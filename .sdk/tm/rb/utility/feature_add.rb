# PassantenfrequenzStadtStgallen SDK utility: feature_add
module PassantenfrequenzStadtStgallenUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
