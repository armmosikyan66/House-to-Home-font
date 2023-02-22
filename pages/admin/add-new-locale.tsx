import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const AddNewLocale: NextPage<{}> = () => {
    return (
        <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 my-profile" data-animated-id="1">
                <div className="mb-6">
                    <h2 className="mb-0 text-heading fs-22 lh-15">Add new property
                    </h2>
                    <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                </div>
                <div className="collapse-tabs new-property-step">
                    <div className="tab-content shadow-none p-0">
                        <form>
                            <div className="tab-pane tab-pane-parent fade px-0 active show" id="detail" role="tabpanel"
                                 aria-labelledby="detail-tab">
                                <div className="card bg-transparent border-0">
                                    <div
                                        className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                                        id="heading-detail">
                                        <h5 className="mb-0">
                                            <button className="btn btn-block collapse-parent border shadow-none"
                                                    data-toggle="false" data-number="4." data-target="#detail-collapse"
                                                    aria-expanded="true" aria-controls="detail-collapse">
                                                <span className="number">4.</span> Detail
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="detail-collapse" className="collapse collapsible show"
                                         aria-labelledby="heading-detail" data-parent="#collapse-tabs-accordion">
                                        <div className="card-body py-4 py-md-0 px-0">
                                            <div className="card mb-6">
                                                <div className="card-body p-6">
                                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing
                                                        Detail</h3>
                                                    <p className="card-text mb-5">Lorem ipsum dolor sit amet,
                                                        consectetur
                                                        adipiscing elit</p>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="size-in-ft" className="text-heading">Size
                                                                    in ft <span
                                                                        className="text-muted">(only numbers)</span></label>
                                                                <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="size-in-ft" name="size-in-ft"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="lot-size-in-ft"
                                                                       className="text-heading">Lot size in ft <span
                                                                    className="text-muted">(only numbers)</span></label>
                                                                <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="lot-size-in-ft" name="lot-size-in-ft"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="room"
                                                                       className="text-heading">Rooms</label>
                                                                <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="room" name="rooms"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="size-in-ft" className="text-heading">Size
                                                                    in ft <span
                                                                        className="text-muted">(only numbers)</span></label>
                                                                <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="size-in-ft" name="size-in-ft"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="lot-size-in-ft"
                                                                       className="text-heading">Lot size in ft <span
                                                                    className="text-muted">(only numbers)</span></label>
                                                                <input type="text"
                                                                       className="form-control form-control-lg border-0"
                                                                       id="lot-size-in-ft" name="lot-size-in-ft"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
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

export default AddNewLocale;
