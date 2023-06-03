export enum LanguagesKeys {
    am = "am",
    ru = "ru",
    en = "en",
}

export interface ITrans {
    ru: {
        [k: string]: string
    }
    am: {
        [k: string]: string
    }
    en: {
        [k: string]: string
    }
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

export interface ITranslations {
    [language: string]: {
        [key: string]: string[];
    };
}