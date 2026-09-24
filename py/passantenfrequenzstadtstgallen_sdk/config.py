# PassantenfrequenzStadtStgallen SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "PassantenfrequenzStadtStgallen",
            "slug": "passantenfrequenz-stadt-stgallen",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "facet_groups",
            "title": "Facet Groups",
            "type": "`$ARRAY`",
            "short": "Facet groups for filtering options",
          },
          {
            "name": "nhits",
            "title": "Nhits",
            "type": "`$INTEGER`",
            "short": "Total number of records matching the query",
          },
          {
            "name": "parameters",
            "title": "Parameters",
            "type": "`$OBJECT`",
            "short": "Query parameters used for the search",
          },
          {
            "name": "records",
            "title": "Records",
            "type": "`$ARRAY`",
          },
        ],
        "name": "search",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/records/1.0/search/",
                "segments": [
                  {
                    "lit": "records",
                  },
                  {
                    "lit": "1.0",
                  },
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "records",
                  "1.0",
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "dataset",
                      "orig": "dataset",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "fussganger-stgaller-innenstadt-vadianstrasse",
                    },
                    {
                      "name": "facet",
                      "orig": "facet",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_arbeitstag",
                      "orig": "refine_arbeitstag",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_tag_nr",
                      "orig": "refine_tag_nr",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "refine_wochentag",
                      "orig": "refine_wochentag",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "row",
                      "orig": "row",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "sort",
                      "orig": "sort",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "measured_at",
                    },
                    {
                      "name": "start",
                      "orig": "start",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "timezone",
                      "orig": "timezone",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "Europe/Zurich",
                    },
                  ],
                },
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
