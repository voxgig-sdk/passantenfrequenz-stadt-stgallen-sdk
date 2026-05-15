# PassantenfrequenzStadtStgallen SDK feature factory

from feature.base_feature import PassantenfrequenzStadtStgallenBaseFeature
from feature.test_feature import PassantenfrequenzStadtStgallenTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PassantenfrequenzStadtStgallenBaseFeature(),
        "test": lambda: PassantenfrequenzStadtStgallenTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
