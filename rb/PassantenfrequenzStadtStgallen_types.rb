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
# @!attribute [rw] facet_groups
#   @return [Array, nil]
#
# @!attribute [rw] nhits
#   @return [Integer, nil]
#
# @!attribute [rw] parameters
#   @return [Hash, nil]
#
# @!attribute [rw] records
#   @return [Array, nil]
Search = Struct.new(
  :facet_groups,
  :nhits,
  :parameters,
  :records,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] facet_groups
#   @return [Array, nil]
#
# @!attribute [rw] nhits
#   @return [Integer, nil]
#
# @!attribute [rw] parameters
#   @return [Hash, nil]
#
# @!attribute [rw] records
#   @return [Array, nil]
SearchListMatch = Struct.new(
  :facet_groups,
  :nhits,
  :parameters,
  :records,
  keyword_init: true
)

