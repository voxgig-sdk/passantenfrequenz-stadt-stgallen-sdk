// Typed models for the PassantenfrequenzStadtStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Search {
  facet_groups?: any[]
  nhits?: number
  parameters?: Record<string, any>
  records?: any[]
}

export interface SearchListMatch {
  dataset: string
  facet?: any[]
  format?: string
  q?: string
  refine_arbeitstag?: string
  refine_tag_nr?: string
  refine_wochentag?: string
  row?: number
  sort?: string
  start?: number
  timezone?: string
}

