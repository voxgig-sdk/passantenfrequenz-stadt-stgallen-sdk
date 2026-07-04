# frozen_string_literal: true

# Typed models for the PassantenfrequenzStadtStgallen SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Search entity data model.
#
# @!attribute [rw] facet_group
#   @return [Array, nil]
#
# @!attribute [rw] nhit
#   @return [Integer, nil]
#
# @!attribute [rw] parameter
#   @return [Hash, nil]
#
# @!attribute [rw] record
#   @return [Array, nil]
Search = Struct.new(
  :facet_group,
  :nhit,
  :parameter,
  :record,
  keyword_init: true
)

# Match filter for Search#list (any subset of Search fields).
#
# @!attribute [rw] facet_group
#   @return [Array, nil]
#
# @!attribute [rw] nhit
#   @return [Integer, nil]
#
# @!attribute [rw] parameter
#   @return [Hash, nil]
#
# @!attribute [rw] record
#   @return [Array, nil]
SearchListMatch = Struct.new(
  :facet_group,
  :nhit,
  :parameter,
  :record,
  keyword_init: true
)

