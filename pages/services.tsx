import React from 'react';
import {GetStaticProps, NextPage} from "next";
import BgImg from "../assets/images/BG3.jpg"
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import {useTranslation} from "next-i18next";

const Services: NextPage<{}> = () => {
    const {t} = useTranslation();
    return (
        <>
            <section className="pt-2 pb-10 pb-lg-17 page-title bg-overlay bg-img-cover-center"
                     style={{backgroundImage: `url('${BgImg.src}')`, backgroundAttachment: "fixed"}} data-animated-id="1">
                <div className="container">
                    <h1 className="fs-22 fs-md-42 mb-0 text-white font-weight-normal text-center pt-17 pb-13 lh-15 px-lg-16 fadeInDown animated"
                        data-animate="fadeInDown">
                        {t("services.intro.title")}
                    </h1>
                </div>
            </section>
            <section className="bg-patten-05 mb-13" data-animated-id="2">
                <div className="container">
                    <div className="card mt-n13 z-index-3 pt-10 border-0">
                        <div className="card-body p-0">
                            <h2 className="text-dark lh-1625 text-center mb-2">{t("services.content.title")}</h2>
                            <p className="mxw-751 text-center mb-8 px-8">{t("services.content.subtitle")}</p>
                        </div>
                    </div>
                    <div className="row mb-9">
                        <div className="col-sm-6 col-lg-4 mb-6">
                            <div
                                className="card border-hover shadow-hover-lg-1 px-7 pb-6 pt-4 h-100 bg-transparent bg-hover-white">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
                                    <span className="text-primary fs-90 lh-1"><svg
                                        className="icon icon-e1"></svg></span>
                                </div>
                                <div className="card-body px-0 pt-6 pb-0 text-center">
                                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">{t("services.content.property_management.title")}</h4>
                                    <p className="card-text px-2">{t("services.content.property_management.subtitle")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-6">
                            <div
                                className="card border-hover shadow-hover-lg-1 px-7 pb-6 pt-4 h-100 bg-transparent bg-hover-white">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
<span className="text-primary fs-90 lh-1">
<svg className="icon icon-e2"></svg>
</span>
                                </div>
                                <div className="card-body px-0 pt-6 pb-0 text-center">
                                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">{t("services.content.mortgage_service.title")}</h4>
                                    <p className="card-text px-2">{t("services.content.mortgage_service.subtitle")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-6">
                            <div
                                className="card border-hover shadow-hover-lg-1 px-7 pb-6 pt-4 h-100 bg-transparent bg-hover-white">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
<span className="text-primary fs-90 lh-1">
<svg className="icon icon-e3"></svg>
</span>
                                </div>
                                <div className="card-body px-0 pt-6 text-center pb-0">
                                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">{t("services.content.consulting_service.title")}</h4>
                                    <p className="card-text px-2">{t("services.content.consulting_service.subtitle")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-6">
                            <div
                                className="card border-hover shadow-hover-lg-1 px-7 pb-6 pt-4 h-100 bg-transparent bg-hover-white">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
<span className="text-primary fs-90 lh-1">
<svg className="icon icon-e4"></svg>
</span>
                                </div>
                                <div className="card-body px-0 pt-6 pb-0 text-center">
                                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">{t("services.content.home_buying.title")}</h4>
                                    <p className="card-text px-2">{t("services.content.home_buying.subtitle")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-6">
                            <div
                                className="card border-hover shadow-hover-lg-1 px-7 pb-6 pt-4 h-100 bg-transparent bg-hover-white">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
<span className="text-primary fs-90 lh-1">
<svg className="icon icon-e5"></svg>
</span>
                                </div>
                                <div className="card-body px-0 pt-6 pb-0 text-center">
                                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">{t("services.content.home_selling.title")}</h4>
                                    <p className="card-text px-2">{t("services.content.home_selling.subtitle")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 mb-6">
                            <div
                                className="card border-hover shadow-hover-lg-1 px-7 pb-6 pt-4 h-100 bg-transparent bg-hover-white">
                                <div className="card-img-top d-flex align-items-end justify-content-center">
<span className="text-primary fs-90 lh-1">
<svg className="icon icon-e6"></svg>
</span>
                                </div>
                                <div className="card-body px-0 pt-6 text-center pb-0">
                                    <h4 className="card-title fs-18 lh-17 text-dark mb-2">{t("services.content.escrow_services.title")}</h4>
                                    <p className="card-text px-2">{t("services.content.escrow_services.subtitle")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-11"/>
                    <h2 className="text-heading mb-2 fs-22 fs-md-32 text-center lh-16 mxw-571 px-lg-8">{t("services.form.title")}</h2>
                    <p className="text-center mxw-670 mb-8">{t("services.form.subtitle")}</p>
                    <form className="mxw-774">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder={`${t("services.form.first_name")}`}
                                           className="form-control form-control-lg border-0" name="first-name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder={`${t("services.form.last_name")}`} name="last-name"
                                           className="form-control form-control-lg border-0"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input placeholder={`${t("services.form.your_email")}`}
                                           className="form-control form-control-lg border-0" type="email"
                                           name="email"/>
                                </div>
                            </div>
                            <div className="col-md-6 px-2">
                                <div className="form-group">
                                    <input type="text" placeholder={`${t("services.form.your_phone")}`} name="phone"
                                           className="form-control form-control-lg border-0"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-6">
                                <textarea className="form-control border-0" placeholder={`${t("services.form.message")}`} name="message"
                                ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-lg btn-primary px-9">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
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

export default Services;