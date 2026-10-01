"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
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
            "format": "v1",
            "q": "v1",
            "refine_arbeitstag": "v1",
            "refine_tag_nr": "v1",
            "refine_wochentag": "v1",
            "row": "v1",
            "sort": "v1",
            "start": "v1",
            "timezone": "v1"
        },
        "headers": [],
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
        "auth": null,
        "status": 200,
        "sample": {
            "nhits": 1,
            "parameters": {},
            "records": [
                {
                    "datasetid": "fussganger-stgaller-innenstadt-vadianstrasse",
                    "fields": {
                        "arbeitstag": "x",
                        "measured_at": "2026-01-01T00:00:00Z",
                        "summe": 1,
                        "tag_nr": 1,
                        "von_links": 1,
                        "von_rechts": 1,
                        "wochentag": "x"
                    },
                    "record_timestamp": "2026-01-01T00:00:00Z",
                    "recordid": "x"
                }
            ],
            "facet_groups": [
                {
                    "facets": [
                        {
                            "count": 1,
                            "name": "x",
                            "state": "x"
                        }
                    ],
                    "name": "x"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map