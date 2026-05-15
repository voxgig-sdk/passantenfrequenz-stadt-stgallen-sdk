<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class PassantenfrequenzStadtStgallenFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new PassantenfrequenzStadtStgallenBaseFeature();
            case "test":
                return new PassantenfrequenzStadtStgallenTestFeature();
            default:
                return new PassantenfrequenzStadtStgallenBaseFeature();
        }
    }
}
