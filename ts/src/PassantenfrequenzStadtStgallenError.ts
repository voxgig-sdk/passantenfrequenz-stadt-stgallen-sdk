
import { Context } from './Context'


class PassantenfrequenzStadtStgallenError extends Error {

  isPassantenfrequenzStadtStgallenError = true

  sdk = 'PassantenfrequenzStadtStgallen'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  PassantenfrequenzStadtStgallenError
}

