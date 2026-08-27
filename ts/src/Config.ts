
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'PassantenfrequenzStadtStgallen',
        slug: "passantenfrequenz-stadt-stgallen",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://daten.stadt.sg.ch/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      search: {
      },

    }
  }


  entity = {
    "search": {
      "fields": [
        {
          "name": "facet_groups",
          "short": "Facet groups for filtering options",
          "type": "`$ARRAY`"
        },
        {
          "name": "nhits",
          "short": "Total number of records matching the query",
          "type": "`$INTEGER`"
        },
        {
          "name": "parameters",
          "short": "Query parameters used for the search",
          "type": "`$OBJECT`"
        },
        {
          "name": "records",
          "type": "`$ARRAY`"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "fussganger-stgaller-innenstadt-vadianstrasse",
                    "kind": "query",
                    "name": "dataset",
                    "orig": "dataset",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "facet",
                    "orig": "facet",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_arbeitstag",
                    "orig": "refine_arbeitstag",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_tag_nr",
                    "orig": "refine_tag_nr",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "refine_wochentag",
                    "orig": "refine_wochentag",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "row",
                    "orig": "row",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "measured_at",
                    "kind": "query",
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "Europe/Zurich",
                    "kind": "query",
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/records/1.0/search/",
              "parts": [
                "records",
                "1.0",
                "search"
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
                  "timezone"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

