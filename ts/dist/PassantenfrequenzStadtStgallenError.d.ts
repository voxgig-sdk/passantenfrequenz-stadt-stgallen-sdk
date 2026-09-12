import { Context } from './Context';
declare class PassantenfrequenzStadtStgallenError extends Error {
    isPassantenfrequenzStadtStgallenError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { PassantenfrequenzStadtStgallenError };
