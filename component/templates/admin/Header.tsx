 // @ts-nocheck 
import React, {FC, useState, useRef} from 'react';
import {useRouter} from "next/router";
import {logout} from "../../../services/auth";
import Toastify from "../../ui/Toastify";
import {useTypedSelector} from "../../../redux/types/IRedux";
import capitalize from "../../../utils/helpers/capitalize";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../../utils/types/ILanguagesKeys";
import useClickOutside from "../../../utils/hooks/useClickOutside";

const Header: FC<{}> = () => {
    const user = useTypedSelector(state => state.auth.user)
    const [opened, setOpened] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const langRef = useRef<HTMLLIElement>(null)
    const router = useRouter();
    const {i18n} = useTranslation()
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [toastify, setToastify] = useState<{ status: "danger" | "info" | "success"; message: string; }>({
        status: "info",
        message: ""
    })
    useClickOutside(langRef, (): void => setModal(false))


    const handleClickLogout = async () => {
        const err = await logout();

        if (err) {
            return setToastify({
                status: "danger",
                message: err.message,
            })
        }

        router.push("/")
    }

    const onToggleLanguageClick = (newLocale: string) => {
        const {pathname, asPath, query} = router;
        router.push({pathname, query}, asPath, {locale: newLocale})
    }

    return (
        <>
            {toastify.message.length ?
                <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
            <header className="main-header shadow-none shadow-lg-xs-1 bg-white position-relative d-none d-xl-block">
                <div className="container-fluid">
                    <nav className="navbar navbar-light py-0 row no-gutters px-3 px-lg-0">
                        <div className="col-md-4 px-0 px-md-6 order-1 order-md-0"></div>
                        <div className="col-md-6 d-flex flex-wrap justify-content-md-end order-0 order-md-1">
                            <div className="ml-auto d-none d-xl-block">
                                <ul className="navbar-nav flex-row ml-auto align-items-center justify-content-lg-end flex-wrap py-2">
                                    <li ref={langRef} className="pointer nav-item dropdown">
                                        <div className="nav-link dropdown-toggle mr-md-2 pr-2 pl-0 pl-lg-2"
                                             onClick={() => setModal(!modal)}>
                                            {lang.toUpperCase()}
                                        </div>
                                        <div
                                            className={`dropdown-menu dropdown-sm dropdown-menu-right ${modal ? "show" : ""}`}
                                            aria-labelledby="bd-versions">
                                            {["am", "en", "ru"].map(el => (
                                                <div key={el} className={`dropdown-item ${lang === el ? "active" : ""}`}
                                                     onClick={() => onToggleLanguageClick(el)}>{el.toUpperCase()}</div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown border-md-right border-0 py-3 text-right">
                                <div onClick={() => setOpened(prevState => !prevState)}
                                     className="pointer dropdown-toggle text-heading pr-3 pr-sm-6 d-flex align-items-center justify-content-end"
                                     data-toggle="dropdown">
                                    <div className="fs-13 font-weight-500 lh-1">
                                        {capitalize(`${user?.firstName} ${user?.lastName}`)}
                                    </div>
                                </div>
                                <div className={`dropdown-menu dropdown-menu-right w-100 ${opened ? "show" : ""}`}>
                                    <div className="dropdown-item pointer" onClick={handleClickLogout}>Logout</div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};


export default Header;
