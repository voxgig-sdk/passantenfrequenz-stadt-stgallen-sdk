# PassantenfrequenzStadtStgallen SDK configuration


def make_config():
    return {
        "main": {
            "name": "PassantenfrequenzStadtStgallen",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://daten.stadt.sg.ch/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "search": {},
            },
        },
        "entity": {
      "search": {
        "fields": [
          {
            "active": True,
            "name": "facet_groups",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "nhits",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "parameters",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "records",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 3,
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "fussganger-stgaller-innenstadt-vadianstrasse",
                      "kind": "query",
                      "name": "dataset",
                      "orig": "dataset",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "facet",
                      "orig": "facet",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_arbeitstag",
                      "orig": "refine_arbeitstag",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_tag_nr",
                      "orig": "refine_tag_nr",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "refine_wochentag",
                      "orig": "refine_wochentag",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 10,
                      "kind": "query",
                      "name": "row",
                      "orig": "row",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "measured_at",
                      "kind": "query",
                      "name": "sort",
                      "orig": "sort",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "Europe/Zurich",
                      "kind": "query",
                      "name": "timezone",
                      "orig": "timezone",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/records/1.0/search/",
                "parts": [
                  "records",
                  "1.0",
                  "search",
                ],
                "select": {
                  "exist": [
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
