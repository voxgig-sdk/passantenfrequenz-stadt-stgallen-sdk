# PassantenfrequenzStadtStgallen SDK configuration

module PassantenfrequenzStadtStgallenConfig
  def self.make_config
    {
      "main" => {
        "name" => "PassantenfrequenzStadtStgallen",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://daten.stadt.sg.ch/api",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "search" => {},
        },
      },
      "entity" => {
        "search" => {
          "fields" => [
            {
              "active" => true,
              "name" => "facet_group",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "nhit",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "parameter",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "record",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 3,
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "fussganger-stgaller-innenstadt-vadianstrasse",
                        "kind" => "query",
                        "name" => "dataset",
                        "orig" => "dataset",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "facet",
                        "orig" => "facet",
                        "reqd" => false,
                        "type" => "`$ARRAY`",
                      },
                      {
                        "active" => true,
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "refine_arbeitstag",
                        "orig" => "refine_arbeitstag",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "refine_tag_nr",
                        "orig" => "refine_tag_nr",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "refine_wochentag",
                        "orig" => "refine_wochentag",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 10,
                        "kind" => "query",
                        "name" => "row",
                        "orig" => "row",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => "measured_at",
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 0,
                        "kind" => "query",
                        "name" => "start",
                        "orig" => "start",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => "Europe/Zurich",
                        "kind" => "query",
                        "name" => "timezone",
                        "orig" => "timezone",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/records/1.0/search/",
                  "parts" => [
                    "records",
                    "1.0",
                    "search",
                  ],
                  "select" => {
                    "exist" => [
                      "dataset",
                      "facet",
                      "format",
                      "q",
                      "refine_arbeitstag",
                      "refine_tag_nr",
                      "refine_wochentag",
                      "row",
                      "sort",
                      "start",
                      "timezone",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    PassantenfrequenzStadtStgallenFeatures.make_feature(name)
  end
end
