<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK utility: feature_add

class PassantenfrequenzStadtStgallenFeatureAdd
{
    public static function call(PassantenfrequenzStadtStgallenContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
