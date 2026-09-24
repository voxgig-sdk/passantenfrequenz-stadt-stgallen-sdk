
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PassantenfrequenzStadtStgallenSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = PassantenfrequenzStadtStgallenSDK.test()
    equal(testsdk instanceof PassantenfrequenzStadtStgallenSDK, true,
      'PassantenfrequenzStadtStgallenSDK.test() must return a client synchronously')
  })

})
