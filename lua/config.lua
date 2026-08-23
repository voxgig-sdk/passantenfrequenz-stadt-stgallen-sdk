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
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["short"] = "Facet groups for filtering options",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "nhits",
            ["short"] = "Total number of records matching the query",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "parameters",
            ["short"] = "Query parameters used for the search",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "records",
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
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "fussganger-stgaller-innenstadt-vadianstrasse",
                      ["kind"] = "query",
                      ["name"] = "dataset",
                      ["orig"] = "dataset",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "facet",
                      ["orig"] = "facet",
                      ["type"] = "`$ARRAY`",
                    },
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_arbeitstag",
                      ["orig"] = "refine_arbeitstag",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_tag_nr",
                      ["orig"] = "refine_tag_nr",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "refine_wochentag",
                      ["orig"] = "refine_wochentag",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "row",
                      ["orig"] = "row",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "measured_at",
                      ["kind"] = "query",
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "Europe/Zurich",
                      ["kind"] = "query",
                      ["name"] = "timezone",
                      ["orig"] = "timezone",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/records/1.0/search/",
                ["parts"] = {
                  "records",
                  "1.0",
                  "search",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
