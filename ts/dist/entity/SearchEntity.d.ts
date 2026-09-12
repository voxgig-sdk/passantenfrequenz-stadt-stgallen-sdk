import { PassantenfrequenzStadtStgallenEntityBase } from '../PassantenfrequenzStadtStgallenEntityBase';
import type { PassantenfrequenzStadtStgallenSDK } from '../PassantenfrequenzStadtStgallenSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../PassantenfrequenzStadtStgallenTypes';
declare class SearchEntity extends PassantenfrequenzStadtStgallenEntityBase<Search> {
    constructor(client: PassantenfrequenzStadtStgallenSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
