export enum LanguagesKeys {
    am = "am",
    ru = "ru",
    en = "en",
}

export interface ICities {
    ru: string[]
    am: string[]
    en:  string[]
}

export interface IRegions {
    ru: {
        [k: string]: string[];
    };
    am: {
        [k: string]: string[];
    };
    en: {
        [k: string]: string[];
    };
}