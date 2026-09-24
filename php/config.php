<?php
declare(strict_types=1);

// PassantenfrequenzStadtStgallen SDK configuration

class PassantenfrequenzStadtStgallenConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "PassantenfrequenzStadtStgallen",
                "slug" => "passantenfrequenz-stadt-stgallen",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://daten.stadt.sg.ch/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "search" => [],
                ],
            ],
            "entity" => [
        'search' => [
          'fields' => [
            [
              'name' => 'facet_groups',
              'title' => 'Facet Groups',
              'type' => '`$ARRAY`',
              'short' => 'Facet groups for filtering options',
            ],
            [
              'name' => 'nhits',
              'title' => 'Nhits',
              'type' => '`$INTEGER`',
              'short' => 'Total number of records matching the query',
            ],
            [
              'name' => 'parameters',
              'title' => 'Parameters',
              'type' => '`$OBJECT`',
              'short' => 'Query parameters used for the search',
            ],
            [
              'name' => 'records',
              'title' => 'Records',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/records/1.0/search/',
                  'segments' => [
                    [
                      'lit' => 'records',
                    ],
                    [
                      'lit' => '1.0',
                    ],
                    [
                      'lit' => 'search',
                    ],
                  ],
                  'parts' => [
                    'records',
                    '1.0',
                    'search',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'dataset',
                        'orig' => 'dataset',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'fussganger-stgaller-innenstadt-vadianstrasse',
                      ],
                      [
                        'name' => 'facet',
                        'orig' => 'facet',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_arbeitstag',
                        'orig' => 'refine_arbeitstag',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_tag_nr',
                        'orig' => 'refine_tag_nr',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'refine_wochentag',
                        'orig' => 'refine_wochentag',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'row',
                        'orig' => 'row',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'sort',
                        'orig' => 'sort',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'measured_at',
                      ],
                      [
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'timezone',
                        'orig' => 'timezone',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'Europe/Zurich',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dataset',
                      'facet',
                      'format',
                      'q',
                      'refine_arbeitstag',
                      'refine_tag_nr',
                      'refine_wochentag',
                      'row',
                      'sort',
                      'start',
                      'timezone',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return PassantenfrequenzStadtStgallenFeatures::make_feature($name);
    }
}
