import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {FiSearch} from "react-icons/fi";

const Users: NextPage<{}> = () => {
    return (
        <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 invoice-listing" data-animated-id="1">
                <div className="mb-6">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 d-flex justify-content-md-start justify-content-center">
                            <div className="align-self-center">
                                <button className="btn btn-primary btn-lg" aria-controls="invoice-list">
                                    <span>Add New</span></button>
                            </div>
                        </div>
                        <div
                            className="col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0 mt-3">
                            <div className="input-group input-group-lg bg-white mb-0 position-relative mr-2">
                                <input type="text" className="form-control bg-transparent border-1x"
                                       placeholder="Search..." aria-label="" aria-describedby="basic-addon1"/>
                                <div className="input-group-append position-absolute pos-fixed-right-center">
                                    <button className="btn bg-transparent border-0 text-gray lh-1" type="button">
                                        <FiSearch
                                            className="fal fa-search"/></button>
                                </div>
                            </div>
                            <div className="align-self-center">
                                <button className="btn btn-danger btn-lg" aria-controls="invoice-list">
                                    <span>Delete</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <div id="invoice-list_wrapper" className="dataTables_wrapper no-footer">
                        <table id="invoice-list"
                               className="table table-hover bg-white border rounded-lg dataTable no-footer" role="grid">
                            <thead>
                            <tr role="row">
                                <th className="no-sort py-6 pl-6 sorting_disabled"><label
                                    className="new-control new-checkbox checkbox-primary m-auto">
                                    <input type="checkbox"
                                           className="new-control-input chk-parent select-customers-info"/>
                                </label></th>
                                <th className="py-6 sorting">Invoice Id
                                </th>
                                <th className="py-6 sorting">Name
                                </th>
                                <th className="py-6 sorting">Email
                                </th>
                                <th className="py-6 sorting">Date
                                </th>
                                <th className="py-6 sorting">Amount
                                </th>
                                <th className="py-6 sorting">Status
                                </th>
                                <th className="no-sort py-6 sorting_disabled"
                                    aria-label="Actions">Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>


                            <tr role="row" className="odd">
                                <td className="checkbox-column py-6 pl-6"><label
                                    className="new-control new-checkbox checkbox-primary m-auto">
                                    <input type="checkbox"
                                           className="new-control-input child-chk select-customers-info"/>
                                </label></td>
                                <td className="align-middle"><a href="dashboard-preview-invoice.html"><span
                                    className="inv-number">#081451</span></a>
                                </td>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div className="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" className="img-fluid rounded-circle w-30px"
                                                 src="images/profile-28.jpeg"/>
                                        </div>
                                        <p className="align-self-center mb-0 user-name">Laurie Fox</p>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-primary pr-1"><i
                                    className="fal fa-envelope"></i></span>lauriefox@company.com
                                </td>
                                <td className="align-middle"><span className="text-success pr-1"><i
                                    className="fal fa-calendar"></i></span>15 Dec 2020
                                </td>
                                <td className="align-middle"><span className="inv-amount">$2275.45</span></td>
                                <td className="align-middle"><span
                                    className="badge badge-green text-capitalize">Paid</span></td>
                                <td className="align-middle">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                       data-original-title="Edit"><i className="fal fa-pencil-alt"></i></a>
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary"
                                       data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="checkbox-column py-6 pl-6 align-middle"><label
                                    className="new-control new-checkbox checkbox-primary  m-auto">
                                    <input type="checkbox"
                                           className="new-control-input child-chk select-customers-info"/>
                                </label></td>
                                <td className="align-middle"><a href="dashboard-preview-invoice.html"><span
                                    className="inv-number">#081452</span></a>
                                </td>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div className="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" className="img-fluid rounded-circle w-30px border-light"
                                                 src="images/profile-30.png"/>
                                        </div>
                                        <p className="align-self-center mb-0 Users-name">Alexander Gray</p>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-primary pr-1"><i
                                    className="fal fa-envelope"></i></span>alexGray3188@gmail.com
                                </td>
                                <td className="align-middle"><span className="text-success pr-1"><i
                                    className="fal fa-calendar"></i></span>20 Dec 2020
                                </td>
                                <td className="align-middle"><span className="inv-amount">$1044.00</span></td>
                                <td className="align-middle"><span
                                    className="badge badge-green text-capitalize">Paid</span></td>
                                <td className="align-middle">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                       data-original-title="Edit"><i className="fal fa-pencil-alt"></i></a>
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary"
                                       data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            <tr role="row" className="odd">
                                <td className="checkbox-column py-6 pl-6"><label
                                    className="new-control new-checkbox checkbox-primary  m-auto">
                                    <input type="checkbox"
                                           className="new-control-input child-chk select-customers-info"/>
                                </label></td>
                                <td className="align-middle"><a href="dashboard-preview-invoice.html"><span
                                    className="inv-number">#081681</span></a>
                                </td>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div className="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" className="img-fluid rounded-circle w-30px"
                                                 src="images/profile-32.jpeg"/>
                                        </div>
                                        <p className="align-self-center mb-0 user-name">James Taylor</p>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-primary pr-1"><i
                                    className="fal fa-envelope"></i></span>jamestaylor468@gmail.com
                                </td>
                                <td className="align-middle"><span className="text-success pr-1"><i
                                    className="fal fa-calendar"></i></span>27 Dec 2020
                                </td>
                                <td className="align-middle"><span className="inv-amount">$20.00</span></td>
                                <td className="align-middle"><span
                                    className="badge badge-yellow text-capitalize">Pending</span></td>
                                <td className="align-middle">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                       data-original-title="Edit"><i className="fal fa-pencil-alt"></i></a>
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary"
                                       data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="checkbox-column py-6 pl-6"><label
                                    className="new-control new-checkbox checkbox-primary  m-auto">
                                    <input type="checkbox"
                                           className="new-control-input child-chk select-customers-info"/>
                                </label></td>
                                <td className="align-middle"><a href="dashboard-preview-invoice.html"><span
                                    className="inv-number">#082693</span></a>
                                </td>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div className="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" className="img-fluid rounded-circle w-30px"
                                                 src="images/profile-24.jpeg"/>
                                        </div>
                                        <p className="align-self-center mb-0 user-name">Grace Roberts</p>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-primary pr-1"><i
                                    className="fal fa-envelope"></i></span>graceRoberts@company.com
                                </td>
                                <td className="align-middle"><span className="text-success pr-1"><i
                                    className="fal fa-calendar"></i></span>31 Dec 2020
                                </td>
                                <td className="align-middle"><span className="inv-amount">$344.00</span></td>
                                <td className="align-middle"><span
                                    className="badge badge-green text-capitalize">Paid</span></td>
                                <td className="align-middle">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                       data-original-title="Edit"><i className="fal fa-pencil-alt"></i></a>
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary"
                                       data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            <tr role="row" className="odd">
                                <td className="checkbox-column py-6 pl-6"><label
                                    className="new-control new-checkbox checkbox-primary  m-auto">
                                    <input type="checkbox"
                                           className="new-control-input child-chk select-customers-info"/>
                                </label></td>
                                <td className="align-middle"><a href="dashboard-preview-invoice.html"><span
                                    className="inv-number">#084743</span></a>
                                </td>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div className="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" className="img-fluid rounded-circle w-30px"
                                                 src="images/profile-28.jpeg"/>
                                        </div>
                                        <p className="align-self-center mb-0 user-name">Donna Rogers</p>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-primary pr-1"><i
                                    className="fal fa-envelope"></i></span>donnaRogers@hotmail.com
                                </td>
                                <td className="align-middle"><span className="text-success pr-1"><i
                                    className="fal fa-calendar"></i></span>03 Jan 2021
                                </td>
                                <td className="align-middle"><span className="inv-amount">$405.15</span></td>
                                <td className="align-middle"><span
                                    className="badge badge-green text-capitalize">Paid</span></td>
                                <td className="align-middle">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                       data-original-title="Edit"><i className="fal fa-pencil-alt"></i></a>
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary"
                                       data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="checkbox-column py-6 pl-6"><label
                                    className="new-control new-checkbox checkbox-primary  m-auto">
                                    <input type="checkbox"
                                           className="new-control-input child-chk select-customers-info"/>
                                </label></td>
                                <td className="align-middle"><a href="dashboard-preview-invoice.html"><span
                                    className="inv-number">#086643</span></a>
                                </td>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div className="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" className="img-fluid rounded-circle w-30px"
                                                 src="images/profile-11.jpeg"/>
                                        </div>
                                        <p className="align-self-center mb-0 user-name">Amy Diaz</p>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-primary pr-1"><i
                                    className="fal fa-envelope"></i></span>amy968@gmail.com
                                </td>
                                <td className="align-middle"><span className="text-success pr-1"><i
                                    className="fal fa-calendar"></i></span>14 Jan 2021
                                </td>
                                <td className="align-middle"><span className="inv-amount">$100.00</span></td>
                                <td className="align-middle"><span
                                    className="badge badge-green text-capitalize">Paid</span></td>
                                <td className="align-middle">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                       data-original-title="Edit"><i className="fal fa-pencil-alt"></i></a>
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary"
                                       data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            <tr role="row" className="odd">
                                <td className="checkbox-column py-6 pl-6"><label
                                    className="new-control new-checkbox checkbox-primary  m-auto">
                                    <input type="checkbox"
                                           className="new-control-input child-chk select-customers-info"/>
                                </label></td>
                                <td className="align-middle"><a href="dashboard-preview-invoice.html"><span
                                    className="inv-number">#086773</span></a>
                                </td>
                                <td className="align-middle">
                                    <div className="d-flex align-items-center">
                                        <div className="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" className="img-fluid rounded-circle w-30px"
                                                 src="images/profile-14.jpeg"/>
                                        </div>
                                        <p className="align-self-center mb-0 user-name">Nia Hillyer</p>
                                    </div>
                                </td>
                                <td className="align-middle"><span className="text-primary pr-1"><i
                                    className="fal fa-envelope"></i></span>niahillyer666@comapny.com
                                </td>
                                <td className="align-middle"><span className="text-success pr-1"><i
                                    className="fal fa-calendar"></i></span>20 Jan 2021
                                </td>
                                <td className="align-middle"><span className="inv-amount">$59.21</span></td>
                                <td className="align-middle"><span
                                    className="badge badge-yellow text-capitalize">Pending</span></td>
                                <td className="align-middle">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary mr-5"
                                       data-original-title="Edit"><i className="fal fa-pencil-alt"></i></a>
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-inline-block fs-18 text-muted hover-primary"
                                       data-original-title="Delete"><i className="fal fa-trash-alt"></i></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-6">
                    <nav>
                        <ul className="pagination rounded-active justify-content-center">
                            <li className="page-item"><a className="page-link" href="#"><i
                                className="far fa-angle-double-left"></i></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">...</li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item"><a className="page-link" href="#"><i
                                className="far fa-angle-double-right"></i></a></li>
                        </ul>
                    </nav>
                    <div className="text-center mt-2">6-10 of 29 Results</div>
                </div>
            </div>
        </main>
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


export default Users;
