 // @ts-nocheck 
import React, {FC, useRef, useState} from 'react';
import Logo from "../../../assets/images/logo.svg";
import LogoWhite from "../../../assets/images/logo-white.svg";
import {useTranslation, withTranslation} from "next-i18next";
import {LanguagesKeys} from "../../../utils/types/ILanguagesKeys";
import Auth from "./auth";
import {useTypedDispatch, useTypedSelector} from "../../../redux/types/IRedux";
import {logout} from "../../../services/auth";
import {setUser} from "../../../redux/actions/user";
import {IUser} from "../../../utils/types/IUser";
import Link from "next/link";
import {useRouter} from "next/router";
import useClickOutside from "../../../utils/hooks/useClickOutside";
import capitalize from "../../../utils/helpers/capitalize";

const Header: FC<{}> = () => {
    const router = useRouter();
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [mobileDropdown, setMobileDropdown] = useState<boolean>(false);
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [modal, setModal] = useState<boolean>(false);
    const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
    const user = useTypedSelector(state => state.auth.user);
    const dispatch = useTypedDispatch();
    const langRef = useRef<HTMLLIElement>(null);
    const { t } = useTranslation('common');
    useClickOutside(langRef, (): void => setDropdown(false));

    const handleLogout = async () => {
        const data = await logout();
        dispatch(setUser({} as IUser))
        localStorage.removeItem("token");
    }

    const onToggleLanguageClick = (newLocale: string) => {
        const {pathname, asPath, query} = router
        router.push({pathname, query}, asPath, {locale: newLocale})
        setBurgerMenu(false)
    }

    return (
        <>
            <header
                className={`navbar-light navbar-light-sticky main-header position-absolute fixed-top m-0 header-sticky header-sticky-smart header-mobile-xl`}>
                <div className="sticky-area-wrap sticky">
                    <div className={`sticky-area`}
                         style={{position: "fixed", top: 0}}>
                        <div className="container container-xxl">
                            <div className="d-flex align-items-center">
                                <nav className="navbar navbar-expand-xl bg-transparent px-0 w-100 w-xl-auto">
                                    <Link className="navbar-brand mr-7" href="/" locale={lang}>
                                        <img style={{height: 40}} src={LogoWhite.src} alt="HomeID"
                                             className="normal-logo"/>
                                        <img style={{height: 40}} src={Logo.src} alt="HomeID" className="sticky-logo"/>
                                    </Link>
                                    <Link locale={lang} className="d-block d-xl-none ml-auto mr-4 position-relative text-white p-2" href="/favorites">
                                        <i className="fal fa-heart fs-large-4"></i>
                                        {user?.favorites?.length ? <span
                                            className="badge badge-primary badge-circle badge-absolute">{user?.favorites?.length}</span> : null}
                                    </Link>
                                    <button onClick={() => setBurgerMenu(!burgerMenu)} className="navbar-toggler border-0 px-0" type="button"
                                            data-toggle="collapse"
                                            data-target="#primaryMenu02" aria-controls="primaryMenu02"
                                            aria-expanded="true"
                                            aria-label="Toggle navigation">
                                        <span className="text-white fs-24"><i className="fal fa-bars"></i></span>
                                    </button>
                                    <div className={`collapse navbar-collapse mt-3 mt-xl-0 ${burgerMenu ? "show" : ""}`} id="primaryMenu02">
                                        <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                                            <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                                                className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                                                <Link locale={lang} className="nav-link p-0" href="/properties"
                                                   data-toggle="dropdown">
                                                    {t("header.real_state")}
                                                    <span className="caret"></span>
                                                </Link>
                                            </li>
                                            <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                                                className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                                                <Link locale={lang} className="nav-link p-0" href="/contact-us"
                                                   data-toggle="dropdown">
                                                    {t("header.contact_us")}
                                                    <span className="caret"></span>
                                                </Link>
                                            </li>
                                            <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                                                className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                                                <Link locale={lang} className="nav-link p-0" href="/services"
                                                   data-toggle="dropdown">
                                                    {t("header.services")}
                                                    <span className="caret"></span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="d-block d-xl-none">
                                            <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                                                <li ref={langRef} className="pointer nav-item dropdown">
                                                    <div className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                                                         onClick={() => setMobileDropdown(!mobileDropdown)}>
                                                        {lang.toUpperCase()}
                                                    </div>
                                                    <div
                                                        className={`dropdown-menu dropdown-sm dropdown-menu-left ${mobileDropdown ? "show" : ""}`}
                                                        aria-labelledby="bd-versions">
                                                        {["am", "en", "ru"].map(el => (
                                                            <div key={el} className={`dropdown-item ${lang === el ? "active" : ""}`} onClick={() => onToggleLanguageClick(el)}>{el.toUpperCase()}</div>
                                                        ))}
                                                    </div>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="nav-item ">
                                                    {user && !Object.keys(user).length ? (
                                                        <div onClick={() => setModal(true)}
                                                             className="pointer nav-link pl-3 pr-2" data-toggle="modal">{capitalize(t("header.sign_in"))}</div>
                                                    ) : (
                                                        <div onClick={handleLogout} className="pointer nav-link pl-3 pr-2"
                                                             data-toggle="modal">{capitalize(t("header.logout"))}</div>
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <div className="ml-auto d-none d-xl-block">
                                    <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                                        <li ref={langRef} className="pointer nav-item dropdown">
                                            <div className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                                                 onClick={() => setDropdown(!dropdown)}>
                                                {lang.toUpperCase()}
                                            </div>
                                            <div
                                                className={`dropdown-menu dropdown-sm dropdown-menu-right ${dropdown ? "show" : ""}`}
                                                aria-labelledby="bd-versions">
                                                {["am", "en", "ru"].map(el => (
                                                    <div key={el} className={`dropdown-item ${lang === el ? "active" : ""}`} onClick={() => onToggleLanguageClick(el)}>{el.toUpperCase()}</div>
                                                ))}
                                            </div>
                                        </li>
                                        <li className="divider"></li>
                                        <li className="nav-item">
                                            {user && !Object.keys(user).length ? (
                                                <div onClick={() => setModal(true)}
                                                     className="pointer nav-link pl-3 pr-2" data-toggle="modal">{capitalize(t("header.sign_in"))}</div>
                                            ) : (
                                                <div onClick={handleLogout} className="pointer nav-link pl-3 pr-2"
                                                     data-toggle="modal">{capitalize(t("header.logout"))}</div>
                                            )}
                                        </li>
                                        <li className="nav-item mr-auto mr-lg-6">
                                            <Link locale={lang} className="nav-link px-2 position-relative" href="/favorites">
                                                <i className="fal fa-heart fs-large-4"></i>
                                                {user?.favorites?.length ? <span
                                                    className="badge badge-primary badge-circle badge-absolute">{user?.favorites?.length}</span> : null}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {modal ? <Auth setModal={setModal}/> : null}
        </>
    );
};


export default withTranslation("common")(Header);
