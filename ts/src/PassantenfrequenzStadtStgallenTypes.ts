// Typed models for the PassantenfrequenzStadtStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Search {
  facet_group?: any[]
  nhit?: number
  parameter?: Record<string, any>
  record?: any[]
}

export type SearchListMatch = Partial<Search>

