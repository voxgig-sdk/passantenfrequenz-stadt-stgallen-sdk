package utility

import "github.com/voxgig-sdk/passantenfrequenz-stadt-stgallen-sdk/go/core"

func makeContextUtil(ctxmap map[string]any, basectx *core.Context) *core.Context {
	return core.NewContext(ctxmap, basectx)
}
