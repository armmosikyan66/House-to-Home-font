import React from 'react';
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import Capitalize from "../../utils/helpers/capitalize";

type titleType = {
    type: {
        am: string;
        en: string;
        ru: string;
    };
    region: {
        am: string;
        en: string;
        ru: string;
    };
    status: {
        am: string;
        en: string;
        ru: string;
    };
    prdId: number,
    className?: string;
}
export const GenerateTitle = ({type, region, status, prdId, className}: titleType) => {
    const {t, i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    switch (status.en) {
        case "rent": {
            const title = t("singlePrd.dynamicTitle.forRent", {type: Capitalize(type && type[lang]), region: region && region[lang]})
            return <Link href={`/properties/${prdId}`} className={className} dangerouslySetInnerHTML={{__html: title}}/>
        }
        case "sale": {
            const title = t("singlePrd.dynamicTitle.forSale", {type: Capitalize(type && type[lang]), region: region && region[lang]})
            return <Link href={`/properties/${prdId}`} className={className} dangerouslySetInnerHTML={{__html: title}}/>
        }
        default: {
            return <></>
        }
    }
};

