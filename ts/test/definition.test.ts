import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "search",
    "accessor": "Search",
    "op": "list",
    "method": "GET",
    "path": "/records/1.0/search/",
    "args": [],
    "select": {
      "dataset": "v1",
      "facet": "v1",
      "format": "json",
      "q": "v1",
      "refine_arbeitstag": "v1",
      "refine_tag_nr": "v1",
      "refine_wochentag": "v1",
      "row": 10,
      "sort": "measured_at",
      "start": 0,
      "timezone": "Europe/Zurich"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "dataset",
      "q",
      "rows",
      "start",
      "sort",
      "facet",
      "refine.tag_nr",
      "refine.wochentag",
      "refine.arbeitstag",
      "format",
      "timezone"
    ],
    "queryArgs": [
      {
        "name": "dataset",
        "wire": "dataset"
      },
      {
        "name": "facet",
        "wire": "facet"
      },
      {
        "name": "format",
        "wire": "format"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "refine_arbeitstag",
        "wire": "refine.arbeitstag"
      },
      {
        "name": "refine_tag_nr",
        "wire": "refine.tag_nr"
      },
      {
        "name": "refine_wochentag",
        "wire": "refine.wochentag"
      },
      {
        "name": "row",
        "wire": "rows"
      },
      {
        "name": "sort",
        "wire": "sort"
      },
      {
        "name": "start",
        "wire": "start"
      },
      {
        "name": "timezone",
        "wire": "timezone"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "nhits": 1,
      "parameters": {},
      "records": [
        {
          "datasetid": "fussganger-stgaller-innenstadt-vadianstrasse",
          "recordid": "x",
          "fields": {
            "measured_at": "2026-01-01T00:00:00Z",
            "von_rechts": 1,
            "von_links": 1,
            "summe": 1,
            "tag_nr": 1,
            "wochentag": "x",
            "arbeitstag": "x"
          },
          "record_timestamp": "2026-01-01T00:00:00Z"
        }
      ],
      "facet_groups": [
        {
          "name": "x",
          "facets": [
            {
              "name": "x",
              "count": 1,
              "state": "x"
            }
          ]
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
