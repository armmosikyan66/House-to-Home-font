import React, {FC} from 'react';
import img from "../assets/images/my-properties-01.jpg";
import Logo from "../assets/images/logo.svg";
import capitalize from "../utils/helpers/capitalize";
import {FiSearch} from "react-icons/fi";
import {RiSettings3Line} from "react-icons/ri";
import {AiOutlineFileAdd} from "react-icons/ai";
import {BsHouseDoor} from "react-icons/bs";
import {BiUser} from "react-icons/bi";
import {TbFileInvoice} from "react-icons/tb";
import {FaChevronDown} from "react-icons/fa";
import {useTypedSelector} from "../redux/types/IRedux";
import Link from "next/link";
import {useRouter} from "next/router";

const Sidebar: FC = () => {
    const user = useTypedSelector(state => state.auth.user);
    const router = useRouter();
    return (
        <div className="db-sidebar bg-white">
            <nav className="navbar navbar-expand-xl navbar-light d-block px-0 header-sticky dashboard-nav py-0">
                <div className="sticky-area shadow-xs-1 py-3" style={{position: "fixed", top: 0, zIndex: 10}}>
                    <div className="d-flex px-3 px-xl-6 w-100">
                        <Link className="navbar-brand" href="/" locale={router.locale}>
                            <img src={Logo.src} alt="HomeID"/>
                        </Link>
                        <div className="ml-auto d-flex align-items-center ">
                            <div className="d-flex align-items-center d-xl-none">
                                <div className="dropdown px-3">
                                    <Link /*todo add model to logout*/ href="#"
                                       className="dropdown-toggle d-flex align-items-center text-heading"
                                       data-toggle="dropdown">
                                                <span className="fs-13 font-weight-500 d-none d-sm-inline ml-2">
                                                    {capitalize(`${user.firstName} ${user.lastName}`)}
                                                </span>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" href="#">My Profile</Link>
                                        <Link className="dropdown-item" href="#">My Profile</Link>
                                        <Link className="dropdown-item" href="#">Logout</Link>
                                    </div>
                                </div>
                            </div>
                            <button className="navbar-toggler border-0 px-0" type="button"
                                    data-toggle="collapse"
                                    data-target="#primaryMenuSidebar" aria-controls="primaryMenuSidebar"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse bg-white" id="primaryMenuSidebar">
                        <form className="d-block d-xl-none pt-5 px-3">
                            <div className="input-group">
                                <div className="input-group-prepend mr-0 bg-input">
                                    <button className="btn border-0 shadow-none fs-20 text-muted pr-0"
                                            type="submit">
                                        <FiSearch
                                            className="far fa-search"/></button>
                                </div>
                                <input type="text" className="form-control border-0 form-control-lg shadow-none"
                                       placeholder="Search for..." name="search"/>
                            </div>
                        </form>
                        <ul className="list-group list-group-flush w-100">
                            <li className="list-group-item pt-6 pb-4">
                                <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Main</h5>
                                <ul className="list-group list-group-no-border rounded-lg">
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <Link locale={router.locale} href="/admin/" className="text-heading lh-1 sidebar-link">
                                            <span
                                                className="sidebar-item-icon d-inline-block mr-3 fs-20"><RiSettings3Line
                                                className="fal fa-cog"/></span>
                                            <span className="sidebar-item-text">Dashboard</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="list-group-item pt-6 pb-4">
                                <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Manage
                                    Listings</h5>
                                <ul className="list-group list-group-no-border rounded-lg">
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <Link locale={router.locale} href="/admin/add-new-product"
                                           className="text-heading lh-1 sidebar-link">
                                                        <span
                                                            className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20 fs-20">
                                                        <AiOutlineFileAdd className="icon icon-add-new"/></span>
                                            <span className="sidebar-item-text">Add new</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <Link locale={router.locale} href="/admin/products"
                                           className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                                        <span
                                                            className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                        <BsHouseDoor className="icon icon-my-properties"/>
                                                        </span>
                                            <span className="sidebar-item-text">My Properties</span>
                                            <span
                                                className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">29</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <Link href="/admin/user"
                                           className="text-heading lh-1 sidebar-link d-flex align-items-center">
                                                    <span
                                                        className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                    <BiUser className="icon icon-review"/>
                                                    </span>
                                            <span className="sidebar-item-text">Users</span>
                                            <span
                                                className="sidebar-item-number ml-auto text-primary fs-15 font-weight-bold">29</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <Link /*todo create functionality*/ href="#invoice_collapse"
                                           className="text-heading lh-1 sidebar-link d-flex align-items-center"
                                           data-toggle="collapse" aria-haspopup="true" aria-expanded="false">
                                                    <span
                                                        className="sidebar-item-icon d-inline-block mr-3 text-muted fs-20">
                                                    <TbFileInvoice className="fal fa-file-invoice"/>
                                                    </span>
                                            <span className="sidebar-item-text">Invoice</span>
                                            <span className="d-inline-block ml-auto"><FaChevronDown
                                                className="fal fa-angle-down"/></span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="collapse show" id="invoice_collapse">
                                    <div className="card card-body border-0 bg-transparent py-0 pl-6">
                                        <ul className="list-group list-group-flush list-group-no-border">
                                            <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                                <Link locale={router.locale} className="text-heading lh-1 sidebar-link"
                                                   href="/admin/admin-listing">Locales</Link>
                                            </li>
                                            <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                                <Link locale={router.locale} className="text-heading lh-1 sidebar-link"
                                                   href="/admin/add-new-locale">Add New Locale</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
