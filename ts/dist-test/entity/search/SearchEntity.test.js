"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PassantenfrequenzStadtStgallenSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "facet_groups": { "a": true, "h": "Facet Groups", "n": "facet_groups", "r": false, "sh": "Facet groups for filtering options", "t": "`$ARRAY`", "key$": "facet_groups", "index$": 0 }, "nhits": { "a": true, "h": "Nhits", "n": "nhits", "r": false, "sh": "Total number of records matching the query", "t": "`$INTEGER`", "key$": "nhits", "index$": 1 }, "parameters": { "a": true, "h": "Parameters", "n": "parameters", "r": false, "sh": "Query parameters used for the search", "t": "`$OBJECT`", "key$": "parameters", "index$": 2 }, "records": { "a": true, "h": "Records", "n": "records", "r": false, "t": "`$ARRAY`", "key$": "records", "index$": 3 } }, "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /records/1.0/search/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "fussganger-stgaller-innenstadt-vadianstrasse", "k": "query", "n": "dataset", "or": "dataset", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "facet", "or": "facet", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "refine_arbeitstag", "or": "refine_arbeitstag", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "refine_tag_nr", "or": "refine_tag_nr", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "refine_wochentag", "or": "refine_wochentag", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": 10, "k": "query", "n": "row", "or": "row", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "ex": "measured_at", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": 0, "k": "query", "n": "start", "or": "start", "r": false, "t": "`$INTEGER`", "index$": 9 }, { "a": true, "ex": "Europe/Zurich", "k": "query", "n": "timezone", "or": "timezone", "r": false, "t": "`$STRING`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/records/1.0/search/", "q": { "exist": ["dataset", "facet", "format", "q", "refine_arbeitstag", "refine_tag_nr", "refine_wochentag", "row", "sort", "start", "timezone"] }, "r": {}, "s": [{ "lit": "records" }, { "lit": "1.0" }, { "lit": "search" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 0 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search', { "GET /records/1.0/search/": { "protocol": "http", "operationId": "searchPedestrianRecords", "responses": { "200": { "description": "Successful response with pedestrian traffic records", "content": { "application/json": { "schema": { "type": "object", "properties": { "nhits": { "description": "Total number of records matching the query", "key$": "nhits", "type": "integer" }, "parameters": { "description": "Query parameters used for the search", "key$": "parameters", "type": "object" }, "records": { "items": { "properties": { "datasetid": { "example": "fussganger-stgaller-innenstadt-vadianstrasse", "type": "string" }, "fields": { "properties": { "arbeitstag": { "description": "Indicator if it's a working day", "type": "string" }, "measured_at": { "description": "Timestamp of the measurement", "format": "date-time", "type": "string" }, "summe": { "description": "Total sum of pedestrians from both directions", "type": "integer" }, "tag_nr": { "description": "Day number", "type": "integer" }, "von_links": { "description": "Number of pedestrians from the left (Multergasse)", "type": "integer" }, "von_rechts": { "description": "Number of pedestrians from the right (Neumarkt)", "type": "integer" }, "wochentag": { "description": "Weekday name", "type": "string" } }, "type": "object" }, "record_timestamp": { "description": "Timestamp when the record was created/updated", "format": "date-time", "type": "string" }, "recordid": { "description": "Unique identifier for the record", "type": "string" } }, "type": "object" }, "key$": "records", "type": "array" }, "facet_groups": { "description": "Facet groups for filtering options", "items": { "properties": { "facets": { "items": { "properties": { "count": { "type": "integer" }, "name": { "type": "string" }, "state": { "type": "string" } }, "type": "object" }, "type": "array" }, "name": { "type": "string" } }, "type": "object" }, "key$": "facet_groups", "type": "array" } }, "index$": 0 } } } }, "400": { "description": "Bad request - invalid parameters" }, "404": { "description": "Dataset not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "dataset", "in": "query", "required": true, "schema": { "type": "string", "default": "fussganger-stgaller-innenstadt-vadianstrasse" }, "description": "Dataset identifier for pedestrian traffic data", "index$": 0 }, { "name": "q", "in": "query", "required": false, "schema": { "type": "string" }, "description": "Full-text search query", "index$": 1 }, { "name": "rows", "in": "query", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 10000 }, "description": "Number of records to return", "index$": 2 }, { "name": "start", "in": "query", "required": false, "schema": { "type": "integer", "default": 0, "minimum": 0 }, "description": "Index of the first result to return (for pagination)", "index$": 3 }, { "name": "sort", "in": "query", "required": false, "schema": { "type": "string", "default": "measured_at" }, "description": "Field to sort results by (e.g., 'measured_at' for measurement timestamp)", "index$": 4 }, { "name": "facet", "in": "query", "required": false, "schema": { "type": "array", "items": { "type": "string", "enum": ["tag_nr", "wochentag", "arbeitstag"] } }, "style": "form", "explode": true, "description": "Facet fields for filtering (tag_nr: day number, wochentag: weekday, arbeitstag: working day)", "index$": 5 }, { "name": "refine.tag_nr", "in": "query", "required": false, "schema": { "type": "string" }, "description": "Filter by day number", "index$": 6 }, { "name": "refine.wochentag", "in": "query", "required": false, "schema": { "type": "string" }, "description": "Filter by weekday", "index$": 7 }, { "name": "refine.arbeitstag", "in": "query", "required": false, "schema": { "type": "string" }, "description": "Filter by working day (yes/no)", "index$": 8 }, { "name": "format", "in": "query", "required": false, "schema": { "type": "string", "enum": ["json", "csv", "geojson"], "default": "json" }, "description": "Response format", "index$": 9 }, { "name": "timezone", "in": "query", "required": false, "schema": { "type": "string", "default": "Europe/Zurich" }, "description": "Timezone for date/time fields", "index$": 10 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PassantenfrequenzStadtStgallenSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PASSANTENFREQUENZ_STADT_STGALLEN_TEST_SEARCH_ENTID': idmap,
        'PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE': 'FALSE',
        'PASSANTENFREQUENZ_STADT_STGALLEN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['PASSANTENFREQUENZ_STADT_STGALLEN_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PASSANTENFREQUENZ_STADT_STGALLEN_TEST_SEARCH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.PassantenfrequenzStadtStgallenSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.PASSANTENFREQUENZ_STADT_STGALLEN_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SearchEntity.test.js.map