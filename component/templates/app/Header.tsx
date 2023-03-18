import React, {FC, useState} from 'react';
import Logo from "../../../assets/images/logo.svg";
import LogoWhite from "../../../assets/images/logo-white.svg";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../../utils/types/ILanguagesKeys";
import Auth from "./auth";
import {useTypedDispatch, useTypedSelector} from "../../../redux/types/IRedux";
import {logout} from "../../../services/auth";
import {setUser} from "../../../redux/actions/user";
import {IUser} from "../../../utils/types/IUser";

const Header: FC<{}> = () => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [modal, setModal] = useState<boolean>(false);
    const user = useTypedSelector(state => state.auth.user);
    const dispatch = useTypedDispatch();

    const handleLogout = async () => {
        const data = await logout();
        dispatch(setUser({} as IUser))
        localStorage.removeItem("token");
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
                                    <a className="navbar-brand mr-7" href="index.html">
                                        <img style={{height: 40}} src={LogoWhite.src} alt="HomeID"
                                             className="normal-logo"/>
                                        <img style={{height: 40}} src={Logo.src} alt="HomeID" className="sticky-logo"/>
                                    </a>
                                    <a className="d-block d-xl-none ml-auto mr-4 position-relative text-white p-2"
                                       href="#">
                                        <i className="fal fa-heart fs-large-4"></i>
                                        <span className="badge badge-primary badge-circle badge-absolute">1</span>
                                    </a>
                                    <button className="navbar-toggler border-0 px-0" type="button"
                                            data-toggle="collapse"
                                            data-target="#primaryMenu02" aria-controls="primaryMenu02"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="text-white fs-24"><i className="fal fa-bars"></i></span>
                                    </button>
                                    <div className="collapse navbar-collapse mt-3 mt-xl-0" id="primaryMenu02">
                                        <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                                            <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                                                className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                                                <a className="nav-link p-0" href="index.html"
                                                   data-toggle="dropdown">
                                                    Real Estates
                                                    <span className="caret"></span>
                                                </a>
                                            </li>
                                            <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                                                className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                                                <a className="nav-link p-0" href="index.html"
                                                   data-toggle="dropdown">
                                                    Contact Us
                                                    <span className="caret"></span>
                                                </a>
                                            </li>
                                            <li id="navbar-item-home" aria-haspopup="true" aria-expanded="false"
                                                className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4">
                                                <a className="nav-link p-0" href="index.html"
                                                   data-toggle="dropdown">
                                                    Services
                                                    <span className="caret"></span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="d-block d-xl-none">
                                            <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                                                       href="#" id="bd-versions-mobile" data-toggle="dropdown"
                                                       aria-haspopup="true" aria-expanded="false">
                                                        ENG
                                                    </a>
                                                    <div className="dropdown-menu dropdown-sm dropdown-menu-left"
                                                         aria-labelledby="bd-versions-mobile">
                                                        <a className="dropdown-item" href="#">VN</a>
                                                        <a className="dropdown-item active" href="#">ENG</a>
                                                        <a className="dropdown-item" href="#">ARB</a>
                                                        <a className="dropdown-item" href="#">KR</a>
                                                        <a className="dropdown-item" href="#">JN</a>
                                                    </div>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="nav-item ">
                                                    <a className="nav-link pl-3 pr-2" data-toggle="modal"
                                                       href="#login-register-modal">SIGN IN</a>
                                                </li>
                                                <li className="nav-item ml-auto w-100 w-sm-auto">
                                                    <a className="btn btn-primary btn-lg"
                                                       href="dashboard-add-new-property.html">
                                                        Add listing
                                                        <img src="images/add-listing-icon.png" alt="Add listing"
                                                             className="ml-1"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <div className="ml-auto d-none d-xl-block">
                                    <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2" href="#"
                                               id="bd-versions" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                ENG
                                            </a>
                                            <div className="dropdown-menu dropdown-sm dropdown-menu-right"
                                                 aria-labelledby="bd-versions">
                                                <a className="dropdown-item" href="#">VN</a>
                                                <a className="dropdown-item active" href="#">ENG</a>
                                                <a className="dropdown-item" href="#">ARB</a>
                                                <a className="dropdown-item" href="#">KR</a>
                                                <a className="dropdown-item" href="#">JN</a>
                                            </div>
                                        </li>
                                        <li className="divider"></li>
                                        <li className="nav-item">
                                            {user && !Object.keys(user).length ? (
                                                <div onClick={() => setModal(true)} className="pointer nav-link pl-3 pr-2" data-toggle="modal">SIGN
                                                    IN</div>
                                            ) : (
                                                <div onClick={handleLogout} className="pointer nav-link pl-3 pr-2" data-toggle="modal">Logout</div>
                                            )}
                                        </li>
                                        <li className="nav-item mr-auto mr-lg-6">
                                            <a className="nav-link px-2 position-relative" href="#">
                                                <i className="fal fa-heart fs-large-4"></i>
                                                {user?.favorites?.length ? <span
                                                    className="badge badge-primary badge-circle badge-absolute">{user?.favorites?.length}</span> : null}
                                            </a>
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

export default Header;