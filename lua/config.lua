-- PassantenfrequenzStadtStgallen SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "PassantenfrequenzStadtStgallen",
      slug = "passantenfrequenz-stadt-stgallen",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://daten.stadt.sg.ch/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["search"] = {},
      },
    },
    entity = {
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "facet_groups",
            ["title"] = "Facet Groups",
            ["type"] = "`$ARRAY`",
            ["short"] = "Facet groups for filtering options",
          },
          {
            ["name"] = "nhits",
            ["title"] = "Nhits",
            ["type"] = "`$INTEGER`",
            ["short"] = "Total number of records matching the query",
          },
          {
            ["name"] = "parameters",
            ["title"] = "Parameters",
            ["type"] = "`$OBJECT`",
            ["short"] = "Query parameters used for the search",
          },
          {
            ["name"] = "records",
            ["title"] = "Records",
            ["type"] = "`$ARRAY`",
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/records/1.0/search/",
                ["segments"] = {
                  {
                    ["lit"] = "records",
                  },
                  {
                    ["lit"] = "1.0",
                  },
                  {
                    ["lit"] = "search",
                  },
                },
                ["parts"] = {
                  "records",
                  "1.0",
                  "search",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "fussganger-stgaller-innenstadt-vadianstrasse",
                    },
                    {
                      ["name"] = "facet",
                      ["orig"] = "facet",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "json",
                    },
                    {
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "refine_arbeitstag",
                      ["orig"] = "refine_arbeitstag",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "refine_tag_nr",
                      ["orig"] = "refine_tag_nr",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "refine_wochentag",
                      ["orig"] = "refine_wochentag",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "measured_at",
                    },
                    {
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "Europe/Zurich",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
