import React from 'react';
import {FiSearch} from "react-icons/fi";
import capitalize from "../utils/helpers/capitalize";
import {useTypedSelector} from "../redux/types/IRedux";

const Header = () => {
    const user = useTypedSelector(state => state.auth.user);

    return (
        <header
            className="main-header shadow-none shadow-lg-xs-1 bg-white position-relative d-none d-xl-block">
            <div className="container-fluid">
                <nav className="navbar navbar-light py-0 row no-gutters px-3 px-lg-0">
                    <div className="col-md-4 px-0 px-md-6 order-1 order-md-0">
                        <form>
                            <div className="input-group">
                                <div className="input-group-prepend mr-0">
                                    <button className="btn border-0 shadow-none fs-20 text-muted p-0"
                                            type="submit"><FiSearch
                                        className="far fa-search"/></button>
                                </div>
                                <input type="text"
                                       className="form-control border-0 bg-transparent shadow-none"
                                       placeholder="Search for..." name="search"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex flex-wrap justify-content-md-end order-0 order-md-1">
                        <div className="dropdown border-0 py-3 text-right">
                            <a href="#"
                               className="dropdown-toggle text-heading pr-3 pr-sm-6 d-flex align-items-center justify-content-end"
                               data-toggle="dropdown">
                                <div className="fs-13 font-weight-500 lh-1">
                                    {capitalize(`${user.firstName} ${user.lastName}`)}
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right w-100">
                                <a className="dropdown-item" href="dashboard-my-profiles.html">My
                                    Profile</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
