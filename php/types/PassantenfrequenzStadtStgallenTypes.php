<?php
declare(strict_types=1);

// Typed models for the PassantenfrequenzStadtStgallen SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Search entity data model. */
class Search
{
    public ?array $facet_groups = null;
    public ?int $nhits = null;
    public ?array $parameters = null;
    public ?array $records = null;
}

/** Request payload for Search#list. */
class SearchListMatch
{
    public string $dataset;
    public ?array $facet = null;
    public ?string $format = null;
    public ?string $q = null;
    public ?string $refine_arbeitstag = null;
    public ?string $refine_tag_nr = null;
    public ?string $refine_wochentag = null;
    public ?int $row = null;
    public ?string $sort = null;
    public ?int $start = null;
    public ?string $timezone = null;
}

