export interface Search {
    facet_groups?: any[];
    nhits?: number;
    parameters?: Record<string, any>;
    records?: any[];
}
export interface SearchListMatch {
    dataset: string;
    facet?: any[];
    format?: string;
    q?: string;
    refine_arbeitstag?: string;
    refine_tag_nr?: string;
    refine_wochentag?: string;
    row?: number;
    sort?: string;
    start?: number;
    timezone?: string;
}
