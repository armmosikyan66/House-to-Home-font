import React from 'react';
import House from "../../../../assets/images/sofa.png";
import Apartment from "../../../../assets/images/architecture-and-city.png";
import Villa from "../../../../assets/images/eco-house.png";
import Building from "../../../../assets/images/verified.png";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";
import {types} from "../../../../utils/constants/productInfo";

const PropertyTypes = () => {
    const { t } = useTranslation('common');
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const content = [
        {title: types[lang].house, image: House.src},
        {title: types[lang].apartment, image: Apartment.src},
        {title: types[lang].office, image: Building.src},
        {title: types[lang].land, image: Villa.src},
    ]

    return (
        <section data-animated-id="3">
            <div className="bg-gray-02 py-lg-13 pt-11 pb-6">
                <div className="container container-xxl">
                    <div className="row">
                        <div className="col-lg-4 pr-xl-13 fadeInLeft animated" data-animate="fadeInLeft">
                            <h2 className="text-heading lh-1625">{t("home.byTypes.title")}</h2>
                            <span className="heading-divider"></span>
                            <Link href="/properties" locale={lang}
                               className="btn btn-lg text-secondary btn-accent">{t("home.byTypes.btnText")}
                                <i className="far fa-long-arrow-right ml-1"></i>
                            </Link>
                        </div>
                        <div className="col-lg-8 fadeInRight animated" data-animate="fadeInRight">
                            <div className="slick-slider arrow-haft-inner custom-arrow-xxl-hide mx-0 slick-initialized">
                                <div className="row row-cols-1 row-cols-md-4 row-cols-1 row-cols-sm-2">
                                    {content.map((elem) => (
                                        <div key={elem.title}
                                             className="box px-0 py-6 slick-slide slick-current slick-active">
                                            <Link href={`/${lang}/properties?type="${elem.title}"`}
                                                  className="card border-0 align-items-center justify-content-center pt-7 pb-5 px-3 shadow-hover-3 bg-transparent bg-hover-white text-decoration-none"
                                            >
                                                <img style={{width: "auto"}} src={elem.image} className="card-img-top" alt="House"/>
                                                <div className="card-body px-0 pt-5 pb-0">
                                                    <h4 className="card-title fs-16 lh-2 text-dark mb-0">{elem.title}</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyTypes;