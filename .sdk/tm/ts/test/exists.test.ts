
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PassantenfrequenzStadtStgallenSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await PassantenfrequenzStadtStgallenSDK.test()
    equal(null !== testsdk, true)
  })

})
