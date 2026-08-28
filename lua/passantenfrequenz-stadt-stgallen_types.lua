-- Typed models for the PassantenfrequenzStadtStgallen SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Search
---@field facet_groups? table
---@field nhits? number
---@field parameters? table
---@field records? table

---@class SearchListMatch
---@field dataset string
---@field facet? table
---@field format? string
---@field q? string
---@field refine_arbeitstag? string
---@field refine_tag_nr? string
---@field refine_wochentag? string
---@field row? number
---@field sort? string
---@field start? number
---@field timezone? string

local M = {}

return M
