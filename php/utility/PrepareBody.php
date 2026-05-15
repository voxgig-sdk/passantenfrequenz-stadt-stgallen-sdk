<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK utility: prepare_body

class PassantenfrequenzStadtStgallenPrepareBody
{
    public static function call(PassantenfrequenzStadtStgallenContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
