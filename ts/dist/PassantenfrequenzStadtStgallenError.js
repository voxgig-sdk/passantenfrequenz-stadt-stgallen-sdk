"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassantenfrequenzStadtStgallenError = void 0;
class PassantenfrequenzStadtStgallenError extends Error {
    isPassantenfrequenzStadtStgallenError = true;
    sdk = 'PassantenfrequenzStadtStgallen';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.PassantenfrequenzStadtStgallenError = PassantenfrequenzStadtStgallenError;
//# sourceMappingURL=PassantenfrequenzStadtStgallenError.js.map