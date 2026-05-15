<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK utility: prepare_method

class PassantenfrequenzStadtStgallenPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(PassantenfrequenzStadtStgallenContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
