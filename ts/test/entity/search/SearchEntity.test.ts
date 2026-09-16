

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PassantenfrequenzStadtStgallenSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE=TRUE.
  afterEach(liveDelay('PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PassantenfrequenzStadtStgallenSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"facet_groups","req":false,"short":"Facet groups for filtering options","type":"`$ARRAY`","index$":0},{"active":true,"name":"nhits","req":false,"short":"Total number of records matching the query","type":"`$INTEGER`","index$":1},{"active":true,"name":"parameters","req":false,"short":"Query parameters used for the search","type":"`$OBJECT`","index$":2},{"active":true,"name":"records","req":false,"type":"`$ARRAY`","index$":3}],"name":"search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"fussganger-stgaller-innenstadt-vadianstrasse","kind":"query","name":"dataset","orig":"dataset","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"facet","orig":"facet","reqd":false,"type":"`$ARRAY`","index$":1},{"active":true,"example":"json","kind":"query","name":"format","orig":"format","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"refine_arbeitstag","orig":"refine_arbeitstag","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"refine_tag_nr","orig":"refine_tag_nr","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"kind":"query","name":"refine_wochentag","orig":"refine_wochentag","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":10,"kind":"query","name":"row","orig":"row","reqd":false,"type":"`$INTEGER`","index$":7},{"active":true,"example":"measured_at","kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":8},{"active":true,"example":0,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`","index$":9},{"active":true,"example":"Europe/Zurich","kind":"query","name":"timezone","orig":"timezone","reqd":false,"type":"`$STRING`","index$":10}]},"contract":{"id":"GET /records/1.0/search/","json":"{\"operationId\":\"searchPedestrianRecords\",\"parameters\":[{\"description\":\"Dataset identifier for pedestrian traffic data\",\"in\":\"query\",\"name\":\"dataset\",\"required\":true,\"schema\":{\"default\":\"fussganger-stgaller-innenstadt-vadianstrasse\",\"type\":\"string\"}},{\"description\":\"Full-text search query\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Number of records to return\",\"in\":\"query\",\"name\":\"rows\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":10000,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Index of the first result to return (for pagination)\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"default\":0,\"minimum\":0,\"type\":\"integer\"}},{\"description\":\"Field to sort results by (e.g., 'measured_at' for measurement timestamp)\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"default\":\"measured_at\",\"type\":\"string\"}},{\"description\":\"Facet fields for filtering (tag_nr: day number, wochentag: weekday, arbeitstag: working day)\",\"explode\":true,\"in\":\"query\",\"name\":\"facet\",\"required\":false,\"schema\":{\"items\":{\"enum\":[\"tag_nr\",\"wochentag\",\"arbeitstag\"],\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter by day number\",\"in\":\"query\",\"name\":\"refine.tag_nr\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by weekday\",\"in\":\"query\",\"name\":\"refine.wochentag\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by working day (yes/no)\",\"in\":\"query\",\"name\":\"refine.arbeitstag\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Response format\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"csv\",\"geojson\"],\"type\":\"string\"}},{\"description\":\"Timezone for date/time fields\",\"in\":\"query\",\"name\":\"timezone\",\"required\":false,\"schema\":{\"default\":\"Europe/Zurich\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"facet_groups\":{\"description\":\"Facet groups for filtering options\",\"items\":{\"properties\":{\"facets\":{\"items\":{\"properties\":{\"count\":{\"type\":\"integer\"},\"name\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"nhits\":{\"description\":\"Total number of records matching the query\",\"type\":\"integer\"},\"parameters\":{\"description\":\"Query parameters used for the search\",\"type\":\"object\"},\"records\":{\"items\":{\"properties\":{\"datasetid\":{\"example\":\"fussganger-stgaller-innenstadt-vadianstrasse\",\"type\":\"string\"},\"fields\":{\"properties\":{\"arbeitstag\":{\"description\":\"Indicator if it's a working day\",\"type\":\"string\"},\"measured_at\":{\"description\":\"Timestamp of the measurement\",\"format\":\"date-time\",\"type\":\"string\"},\"summe\":{\"description\":\"Total sum of pedestrians from both directions\",\"type\":\"integer\"},\"tag_nr\":{\"description\":\"Day number\",\"type\":\"integer\"},\"von_links\":{\"description\":\"Number of pedestrians from the left (Multergasse)\",\"type\":\"integer\"},\"von_rechts\":{\"description\":\"Number of pedestrians from the right (Neumarkt)\",\"type\":\"integer\"},\"wochentag\":{\"description\":\"Weekday name\",\"type\":\"string\"}},\"type\":\"object\"},\"record_timestamp\":{\"description\":\"Timestamp when the record was created/updated\",\"format\":\"date-time\",\"type\":\"string\"},\"recordid\":{\"description\":\"Unique identifier for the record\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with pedestrian traffic records\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"404\":{\"description\":\"Dataset not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/records/1.0/search/","segments":[{"lit":"records"},{"lit":"1.0"},{"lit":"search"}],"select":{"exist":["dataset","facet","format","q","refine_arbeitstag","refine_tag_nr","refine_wochentag","row","sort","start","timezone"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":0}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PassantenfrequenzStadtStgallenSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PASSANTENFREQUENZ_STADT_STGALLEN_TEST_SEARCH_ENTID': idmap,
    'PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE': 'FALSE',
    'PASSANTENFREQUENZ_STADT_STGALLEN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PASSANTENFREQUENZ_STADT_STGALLEN_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.PASSANTENFREQUENZ_STADT_STGALLEN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PASSANTENFREQUENZ_STADT_STGALLEN_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PassantenfrequenzStadtStgallenSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
