import React, {FC, useEffect, useRef, useState} from 'react';
import capitalize from "../../../../utils/helpers/capitalize";
import Slider from "../../../ui/Slider";
import {getRecommended} from "../../../../services/products";
import {IProduct} from "../../../../utils/types/IProduct";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";

export type RecommendedProps = {
    title: string;
    status: "rent" | "sale";
}

const Recommended: FC<RecommendedProps> = ({status, title}) => {
    const [items, setItems] = useState<IProduct[]>([]);
    const mounted = useRef<boolean>(false);
    const { t } = useTranslation('common');
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;

    useEffect(() => {
        (async ()  => {
            if (!mounted.current) {
                mounted.current = true;
                const prd = await getRecommended(status, "en")

                setItems(prd);
            }
        })()
    }, [])

    return (
        <section className="pt-lg-12 pb-lg-10 py-11" data-animated-id="2">
            <div className="container container-xxl">
                <div className="row mb-6">
                    <div className="col-md-6">
                        <h2 className="text-heading">{capitalize(title)}</h2>
                        <span className="heading-divider"></span>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <Link href="/properties" locale={lang}
                           className="btn fs-14 text-secondary btn-accent py-3 lh-15 px-7 mb-6 mb-lg-0">{capitalize(t("home.recommended.btnText"))}
                            <i className="far fa-long-arrow-right ml-1"></i>
                        </Link>
                    </div>
                </div>
                <Slider items={items}/>
            </div>
        </section>
    );
};

export default Recommended;