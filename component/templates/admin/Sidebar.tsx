import React, {FC, useState} from 'react';
import Logo from "../../../assets/images/logo.svg"
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../../utils/types/ILanguagesKeys";
import {useTypedSelector} from "../../../redux/types/IRedux";
import capitalize from "../../../utils/helpers/capitalize";
import {useRouter} from "next/router";
import {logout} from "../../../services/auth";
import Toastify from "../../ui/Toastify";

const Sidebar: FC<{}> = () => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const user = useTypedSelector(state => state.auth.user);
    const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
    const [burgerOpened, setBurgerOpened] = useState<boolean>(false);

    const router = useRouter();
    const [toastify, setToastify] = useState<{status: "danger" | "info" | "success"; message: string;}>({
        status: "info",
        message: ""
    })


    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
            <div className="db-sidebar bg-white">
                <nav className="navbar navbar-expand-xl navbar-light d-block px-0 header-sticky dashboard-nav py-0">
                    <div className="sticky-area shadow-xs-1 py-3" style={{position: "fixed", top: 0, zIndex: 1000}}>
                        <div className="d-flex px-3 px-xl-6 w-100">
                            <Link locale={lang} className="navbar-brand" href="/">
                                <img src={Logo.src} style={{height: 40, width: "auto"}} alt="HomeID"/>
                            </Link>
                            <div className="ml-auto d-flex align-items-center ">
                                <div className="d-flex align-items-center d-xl-none">
                                    <div className="dropdown px-3">
                                        <div onClick={() => setDropdownOpened(prev => !prev)} className="pointer dropdown-toggle d-flex align-items-center text-heading"
                                             data-toggle="dropdown">
                                        <span className="fs-13 font-weight-500 d-none d-sm-inline ml-2">
                                            {capitalize(`${user.firstName} ${user.lastName}`)}
                                        </span>
                                        </div>
                                        <div className={`dropdown-menu dropdown-menu-right ${dropdownOpened ? "show" : ""}`}>
                                            <Link className="dropdown-item" href="/">Logout</Link>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setBurgerOpened(prev => !prev)} className={`navbar-toggler border-0 px-0 ${burgerOpened ? "collapsed" : ""}`} type="button" data-toggle="collapse"
                                        data-target="#primaryMenuSidebar" aria-controls="primaryMenuSidebar"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <div style={{zIndex: 10000}} className={`navbar-collapse bg-white collapse ${burgerOpened ? "show" : ""}`} id="primaryMenuSidebar">
                            <form className="list-group-item pt-6 pb-4d-block d-xl-none pt-5 px-3">
                                <div className="input-group">
                                    <div className="input-group-prepend mr-0 bg-input">
                                        <button className="btn border-0 shadow-none fs-20 text-muted pr-0"
                                                type="submit"><i className="far fa-search"></i></button>
                                    </div>
                                    <input type="text" className="form-control border-0 form-control-lg shadow-none"
                                           placeholder="Search for..." name="search"/>
                                </div>
                            </form>
                            <ul className="py-5 px-2 w-100 mb-2 list-group list-group-no-border rounded-lg">
                                <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                    <Link href="/admin" locale={lang} className="text-heading lh-1 sidebar-link">
                                        <span className="sidebar-item-text">Products</span>
                                    </Link>
                                </li>
                                <li className="mb-2 list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                    <Link href={"/admin/new-product"} locale={lang}
                                          className="text-heading lh-1 sidebar-link">
                                        <span className="sidebar-item-text">Add new Product</span>
                                    </Link>
                                </li>
                                {user.role === "admin" ?
                                    <>
                                        <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                            <Link href="/admin/users" locale={lang} className="text-heading lh-1 sidebar-link">
                                                <span className="sidebar-item-text">Users</span>
                                            </Link>
                                        </li>
                                        <li className="mb-2 list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                            <Link href="/admin/new-user" locale={lang}
                                                  className="text-heading lh-1 sidebar-link">
                                                <span className="sidebar-item-text">Add new User</span>
                                            </Link>
                                        </li>
                                    </>
                                : null}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;