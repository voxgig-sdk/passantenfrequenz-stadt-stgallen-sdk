<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK utility: result_headers

class PassantenfrequenzStadtStgallenResultHeaders
{
    public static function call(PassantenfrequenzStadtStgallenContext $ctx): ?PassantenfrequenzStadtStgallenResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
