# PassantenfrequenzStadtStgallen SDK configuration

module PassantenfrequenzStadtStgallenConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "name" => "facet_groups",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "nhits",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "parameters",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "records",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "search",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "fussganger-stgaller-innenstadt-vadianstrasse",
                        "kind" => "query",
                        "name" => "dataset",
                        "orig" => "dataset",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "facet",
                        "orig" => "facet",
                        "type" => "`$ARRAY`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "refine_arbeitstag",
                        "orig" => "refine_arbeitstag",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "refine_tag_nr",
                        "orig" => "refine_tag_nr",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "refine_wochentag",
                        "orig" => "refine_wochentag",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "row",
                        "orig" => "row",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "measured_at",
                        "kind" => "query",
                        "name" => "sort",
                        "orig" => "sort",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "start",
                        "orig" => "start",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "Europe/Zurich",
                        "kind" => "query",
                        "name" => "timezone",
                        "orig" => "timezone",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
