# ProjectName SDK exists test

import pytest
from passantenfrequenzstadtstgallen_sdk import PassantenfrequenzStadtStgallenSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PassantenfrequenzStadtStgallenSDK.test(None, None)
        assert testsdk is not None
