import React, {FC, useState, useEffect} from 'react';
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {LanguagesKeys} from "../../../utils/types/ILanguagesKeys";
import {types, status} from "../../../utils/constants/productInfo";
import {useRouter} from "next/router";
import LogoWhite from "../../../assets/images/logo-white.svg";

const Footer: FC<{}> = () => {
    const {t, i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [homeLink, setHomeLink] = useState<string>("")
    const router = useRouter();
    useEffect(() => {
        if ( typeof window !== 'undefined' && window.location.origin) {
            setHomeLink(`${window.location.origin}${router.basePath}/${lang}`)
        }
    }, [])
    return (
        <footer className="bg-dark pt-8 pb-6 footer text-muted">
            <div className="container container-xxl">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
                        <a className="d-block mb-2" href="#">
                            <img src={LogoWhite.src} alt="HomeID"/>
                        </a>
                        <div className="lh-26 font-weight-500">
                            <p className="mb-0">58 Howard Street #2 San Francisco</p>
                            <a className="d-block text-muted hover-white"
                               href="mailto:contact@homeid.com">contact@homeid.com</a>
                            <a className="d-block text-lighter font-weight-bold fs-15 hover-white"
                               href="tel:(+68)122109876">(+68)1221
                                09876</a>
                            <Link target={"_blank"} className="d-block text-muted hover-white" locale={lang}
                                  href={homeLink}>{homeLink}</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">{t("footer.popular_searches.title")}</h4>
                        <ul className="list-group list-group-flush list-group-no-border">
                            <li className="list-group-item bg-transparent p-0">
                                <Link locale={lang} href={`/properties?type="${types[lang]["apartment"]}"&status="${status[lang]["rent"]}"`} className="text-muted lh-26 font-weight-500 hover-white">{t("footer.popular_searches.apartment_for_rent")}</Link>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <Link locale={lang} href="#" className="text-muted lh-26 font-weight-500 hover-white">{t("footer.popular_searches.apartment_low_to_hide")}</Link>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <Link locale={lang} href={`/properties?type="${types[lang]["house"]}"&status="${status[lang]["sale"]}"`} className="text-muted lh-26 font-weight-500 hover-white">{t("footer.popular_searches.offices_for_buy")}</Link>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <Link locale={lang} href={`/properties?type="${types[lang]["land"]}"&status="${status[lang]["sale"]}"`} className="text-muted lh-26 font-weight-500 hover-white">{t("footer.popular_searches.offices_for_rent")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-2 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">{t("footer.quick_links.title")}</h4>
                        <ul className="list-group list-group-flush list-group-no-border">
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 font-weight-500 hover-white">{t("footer.quick_links.terms_of_use")}</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 font-weight-500 hover-white">{t("footer.quick_links.privacy_policy")}</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 font-weight-500 hover-white">{t("footer.quick_links.contact_support")}</a>
                            </li>
                            <li className="list-group-item bg-transparent p-0">
                                <a href="#" className="text-muted lh-26 hover-white font-weight-500">{t("footer.quick_links.careers")}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-6 mb-md-0">
                        <h4 className="text-white fs-16 my-4 font-weight-500">{t("footer.sign_up_for_our_newsletter.title")}</h4>
                        <form>
                            <div className="input-group input-group-lg mb-6">
                                <input type="email" name="email"
                                       className="form-control bg-white shadow-none border-0 z-index-1"
                                       placeholder={`${t("footer.sign_up_for_our_newsletter.your_email")}`}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">Subscribe</button>
                                    </div>
                            </div>
                        </form>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i
                                    className="fab fa-twitter"></i></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i
                                    className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i
                                    className="fab fa-skype"></i></a>
                            </li>
                            <li className="list-inline-item mr-0">
                                <a href="#" className="text-white opacity-3 fs-25 px-4 opacity-hover-10"><i
                                    className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-0 mt-md-10 row">
                    <ul className="list-inline mb-0 col-md-6 mr-auto">
                       
                    </ul>
                    <p className="col-md-auto mb-0 text-muted">
                        © {new Date().getFullYear()} HouseToHome. {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
