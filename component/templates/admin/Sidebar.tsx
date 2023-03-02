import React, {FC} from 'react';

const Sidebar: FC<{}> = () => {
    return (
        <div className="db-sidebar bg-white">
            <nav className="navbar navbar-expand-xl navbar-light d-block px-0 header-sticky dashboard-nav py-0">
                <div className="sticky-area shadow-xs-1 py-3" style={{position: "fixed", top: 0}}>
                    <div className="d-flex px-3 px-xl-6 w-100">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="HomeID"/>
                        </a>
                        <div className="ml-auto d-flex align-items-center ">
                            <div className="d-flex align-items-center d-xl-none">
                                <div className="dropdown px-3">
                                    <a href="#" className="dropdown-toggle d-flex align-items-center text-heading"
                                       data-toggle="dropdown">
                                        <span className="fs-13 font-weight-500 d-none d-sm-inline ml-2">
                                            Ronald Hunter
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">My Profile</a>
                                        <a className="dropdown-item" href="#">My Profile</a>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </div>
                                <div className="dropdown no-caret py-4 px-3 d-flex align-items-center notice mr-3">
                                    <a href="#" className="dropdown-toggle text-heading fs-20 font-weight-500 lh-1"
                                       data-toggle="dropdown">
                                        <i className="far fa-bell"></i>
                                        <span
                                            className="badge badge-primary badge-circle badge-absolute font-weight-bold fs-13">1</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <button className="navbar-toggler border-0 px-0" type="button" data-toggle="collapse"
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
                                    <button className="btn border-0 shadow-none fs-20 text-muted pr-0" type="submit"><i
                                        className="far fa-search"></i></button>
                                </div>
                                <input type="text" className="form-control border-0 form-control-lg shadow-none"
                                       placeholder="Search for..." name="search"/>
                            </div>
                        </form>
                        <ul className="list-group list-group-flush w-100">
                            <li className="list-group-item pt-6 pb-4">
                                <h5 className="fs-13 letter-spacing-087 text-muted mb-3 text-uppercase px-3">Main</h5>
                                <ul className="mb-2 list-group list-group-no-border rounded-lg">
                                    <li className="list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <a href="dashboard.html" className="text-heading lh-1 sidebar-link">
                                            <span className="sidebar-item-text">Dashboard</span>
                                        </a>
                                    </li>
                                    <li className="mb-2 list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <a href="dashboard-add-new-property.html"
                                           className="text-heading lh-1 sidebar-link">
                                            <span className="sidebar-item-text">Add new</span>
                                        </a>
                                    </li>
                                    <li className="mb-2 list-group-item px-3 px-xl-4 py-2 sidebar-item">
                                        <a href="dashboard-add-new-property.html"
                                           className="text-heading lh-1 sidebar-link">
                                            <span className="sidebar-item-text">Add new</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;