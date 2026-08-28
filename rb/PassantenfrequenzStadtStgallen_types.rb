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
# @!attribute [rw] dataset
#   @return [String]
#
# @!attribute [rw] facet
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] refine_arbeitstag
#   @return [String, nil]
#
# @!attribute [rw] refine_tag_nr
#   @return [String, nil]
#
# @!attribute [rw] refine_wochentag
#   @return [String, nil]
#
# @!attribute [rw] row
#   @return [Integer, nil]
#
# @!attribute [rw] sort
#   @return [String, nil]
#
# @!attribute [rw] start
#   @return [Integer, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
SearchListMatch = Struct.new(
  :dataset,
  :facet,
  :format,
  :q,
  :refine_arbeitstag,
  :refine_tag_nr,
  :refine_wochentag,
  :row,
  :sort,
  :start,
  :timezone,
  keyword_init: true
)

