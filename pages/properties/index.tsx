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
            const options = decodeParams(router.asPath.replace(router.route, ""));
            const data = await getAll(lang, 1, options);

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
                            <div className="col-md-6">
                                <h2 className="fs-15 text-dark mb-0">We found <span
                                    className="text-primary">{items.founded}</span> properties
                                    available for
                                    you
                                </h2>
                            </div>
                            <div className="col-md-6 mt-6 mt-md-0">
                                <div className="d-flex justify-content-md-end align-items-center">
                                    <div className="input-group border rounded input-group-lg w-auto bg-white mr-3">
                                        <label
                                            className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                                            htmlFor="inputGroupSelect01"><i
                                            className="fas fa-align-left fs-16 pr-2"></i>Sortby:</label>
                                        <div
                                            className="dropdown bootstrap-select form-control border-0 bg-transparent shadow-none p-0 sortby">
                                            <select
                                                className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                                                data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                                                id="inputGroupSelect01" name="sortby">
                                                <option>Top Selling</option>
                                                <option value="1">Most Viewed</option>
                                                <option value="2">Price(low to high)</option>
                                                <option value="3">Price(high to low)</option>
                                            </select>
                                            <button type="button"
                                                    className="btn dropdown-toggle bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                                                    data-toggle="dropdown" role="combobox" aria-owns="bs-select-6"
                                                    aria-haspopup="listbox" aria-expanded="false"
                                                    data-id="inputGroupSelect01" title="Top Selling">
                                                <div className="filter-option">
                                                    <div className="filter-option-inner">
                                                        <div className="filter-option-inner-inner">Top Selling</div>
                                                    </div>
                                                </div>
                                            </button>
                                            <div className="dropdown-menu ">
                                                <div className="inner show" role="listbox" id="bs-select-6"
                                                >
                                                    <ul className="dropdown-menu inner show" role="presentation"></ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-none d-md-block">
                                        <Link onClick={handleChangeCount} id={"1"} className={`fs-sm-18 text-dark ${count === 2 ? "opacity-2" : ""}`} href={"#"}>
                                            <i className="fas fa-list"></i>
                                        </Link>
                                        <Link onClick={handleChangeCount} id={"2"} className={`fs-sm-18 text-dark ml-5 ${count === 1 ? "opacity-2" : ""}`} href={"#"}>
                                            <i className="fa fa-th-large"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Catalog.Content count={count} items={items.products}/>
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