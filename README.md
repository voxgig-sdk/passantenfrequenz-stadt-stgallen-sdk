# PassantenfrequenzStadtStgallen SDK

Hourly pedestrian counts from a sensor on Vadianstrasse in central St.Gallen

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Passantenfrequenz Stadt St.Gallen

The Passantenfrequenz Stadt St.Gallen API exposes pedestrian foot-traffic counts from a sensor installed on Vadianstrasse, a street in the centre of [St.Gallen, Switzerland](https://daten.stadt.sg.ch/). The dataset is published by the City of St.Gallen on its open data portal, which is built on the [OpenDataSoft](https://www.opendatasoft.com/) platform.

What you get from the API:

- Pedestrian count records from the Vadianstrasse counter, returned newest-first
- Hourly count values that can be aggregated for daily or longer-term trends
- Standard OpenDataSoft search, facet and export operations over the dataset

The portal supports CORS for browser-based clients and exposes results through its standard records and exports endpoints. Responses are paginated; the catalogue page notes a default page size of 20 records per request.

## Try it

**TypeScript**
```bash
npm install passantenfrequenz-stadt-stgallen
```

**Python**
```bash
pip install passantenfrequenz-stadt-stgallen-sdk
```

**PHP**
```bash
composer require voxgig/passantenfrequenz-stadt-stgallen-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/passantenfrequenz-stadt-stgallen-sdk/go
```

**Ruby**
```bash
gem install passantenfrequenz-stadt-stgallen-sdk
```

**Lua**
```bash
luarocks install passantenfrequenz-stadt-stgallen-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { PassantenfrequenzStadtStgallenSDK } from 'passantenfrequenz-stadt-stgallen'

const client = new PassantenfrequenzStadtStgallenSDK({})

// List all searchs
const searchs = await client.Search().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o passantenfrequenz-stadt-stgallen-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "passantenfrequenz-stadt-stgallen": {
      "command": "/abs/path/to/passantenfrequenz-stadt-stgallen-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Search** | Search, filter and page through pedestrian-count records from the Vadianstrasse sensor via the OpenDataSoft records endpoint exposed under the portal's `/api` base. | `/records/1.0/search/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from passantenfrequenzstadtstgallen_sdk import PassantenfrequenzStadtStgallenSDK

client = PassantenfrequenzStadtStgallenSDK({})

# List all searchs
searchs, err = client.Search(None).list(None, None)
```

### PHP

```php
<?php
require_once 'passantenfrequenzstadtstgallen_sdk.php';

$client = new PassantenfrequenzStadtStgallenSDK([]);

// List all searchs
[$searchs, $err] = $client->Search(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/passantenfrequenz-stadt-stgallen-sdk/go"

client := sdk.NewPassantenfrequenzStadtStgallenSDK(map[string]any{})

// List all searchs
searchs, err := client.Search(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "PassantenfrequenzStadtStgallen_sdk"

client = PassantenfrequenzStadtStgallenSDK.new({})

# List all searchs
searchs, err = client.Search(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("passantenfrequenz-stadt-stgallen_sdk")

local client = sdk.new({})

-- List all searchs
local searchs, err = client:Search(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = PassantenfrequenzStadtStgallenSDK.test()
const result = await client.Search().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = PassantenfrequenzStadtStgallenSDK.test(None, None)
result, err = client.Search(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = PassantenfrequenzStadtStgallenSDK::test(null, null);
[$result, $err] = $client->Search(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Search(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = PassantenfrequenzStadtStgallenSDK.test(nil, nil)
result, err = client.Search(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Search(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Passantenfrequenz Stadt St.Gallen

- Upstream: [https://daten.stadt.sg.ch/](https://daten.stadt.sg.ch/)
- API docs: [https://daten.stadt.sg.ch/api](https://daten.stadt.sg.ch/api)

- Open data published by the [City of St.Gallen](https://daten.stadt.sg.ch/) via its open data portal
- Refer to the portal's [terms and conditions](https://daten.stadt.sg.ch/terms/terms-and-conditions/) for reuse and attribution rules
- No explicit licence string was surfaced in the catalogue page

---

Generated from the Passantenfrequenz Stadt St.Gallen OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
