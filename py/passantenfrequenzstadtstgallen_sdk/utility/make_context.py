# PassantenfrequenzStadtStgallen SDK utility: make_context

from passantenfrequenzstadtstgallen_sdk.core.context import PassantenfrequenzStadtStgallenContext


def make_context_util(ctxmap, basectx):
    return PassantenfrequenzStadtStgallenContext(ctxmap, basectx)
