<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK exists test

require_once __DIR__ . '/../passantenfrequenzstadtstgallen_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = PassantenfrequenzStadtStgallenSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
