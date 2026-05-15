<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PassantenfrequenzStadtStgallenMakeContext
{
    public static function call(array $ctxmap, ?PassantenfrequenzStadtStgallenContext $basectx): PassantenfrequenzStadtStgallenContext
    {
        return new PassantenfrequenzStadtStgallenContext($ctxmap, $basectx);
    }
}
