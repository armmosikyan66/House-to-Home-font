import React, {useEffect, useState, MouseEvent} from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {Catalog} from "../../component/templates/app/catalog";
import {IProductResponse} from "../../utils/types/IProduct";
import {getAll} from "../../services/products";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import Link from "next/link";
import {useRouter} from "next/router";
import {decodeParams} from "../../utils/helpers/queryString";

const Index: NextPage<{}> = () => {
    const {t} = useTranslation("common");
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const router = useRouter();
    const [count, setCount] = useState<number>(() => {
        if (typeof window !== 'undefined') {
            return Number(localStorage.getItem('count') || 1);
        }
        return 0;
    });
    const [items, setItems] = useState<IProductResponse>({
        founded: 0,
        products: []
    });

    useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count]);

    useEffect(() => {
        (async () => {
            if (!router.isReady) return;
            const {page, ...options} = decodeParams(router.asPath.replace(router.route, ""));

            const data = await getAll(lang, Number(page || 1), options);

            setItems(data);
        })();
    }, [router.query]);

    const handleChangeCount = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setCount(Number(event.currentTarget.id))
    }

    return (
        <section className="pt-16 pb-11" data-animated-id="2">
            <div className="container">
                <div className="row">
                    <Catalog.FilterBy/>
                    <div className="col-lg-8 mb-8 mb-lg-0 order-1 order-lg-2">
                        <div className="row align-items-sm-center mb-6">
                            <div className="col-md-10">
                                <h2 className="fs-15 text-dark mb-0" dangerouslySetInnerHTML={{__html: t("catalog.founded", {count: items.founded})}}/>
                            </div>
                            <div className="col-md-2 mt-6 mt-md-0">
                                <div className="d-flex justify-content-md-end align-items-center">
                                    <div className="d-none d-md-block">
                                        <Link onClick={handleChangeCount} id={"1"}
                                              className={`fs-sm-18 text-dark ${count === 2 ? "opacity-2" : ""}`}
                                              href={"#"}>
                                            <i className="fas fa-list"></i>
                                        </Link>
                                        <Link onClick={handleChangeCount} id={"2"}
                                              className={`fs-sm-18 text-dark ml-5 ${count !== 2 ? "opacity-2" : ""}`}
                                              href={"#"}>
                                            <i className="fa fa-th-large"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Catalog.Content count={count} founded={items.founded} items={items.products}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const getStaticProps: GetStaticProps<{}> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(
            locale ?? "am",
            ['common'],
            nextI18NextConfig
        )),
    },
})

export default Index;