import React, {useEffect} from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {useTypedSelector} from "../../redux/types/IRedux";
import {useRouter} from "next/router";
import {AiOutlineEye} from "react-icons/ai";
import {BsHouse} from "react-icons/bs";
import {TbMessageCircle} from "react-icons/tb";
import {FaRegHeart} from "react-icons/fa";

const Admin: NextPage<{}> = () => {
    const router = useRouter();
    const user = useTypedSelector(state => state.auth.user);

    useEffect(() => {
        (async () => {
            if (!user || user.role === "user") {
                router.push("/")
                return;
            }
        })();
    }, [user]);

    return (
        <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10" data-animated-id="1">
                <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                    <div className="mr-0 mr-md-auto">
                        <h2 className="mb-0 text-heading fs-22 lh-15">Welcome back, Ronald Hunter!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At iusto, laboriosam.
                            Atque</p>
                    </div>
                    <div>
                        <a href="dashboard-add-new-property.html" className="btn btn-primary btn-lg">
                            <span>Add New Property</span>
                            <span className="d-inline-block ml-1 fs-20 lh-1">
                                            <BsHouse className="icon icon-add-new"/>
                                        </span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-xxl-3 mb-6">
                        <div className="card">
                            <div className="card-body row align-items-center px-6 py-7">
                                <div className="col-5">
                                                <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-blue badge-circle">
                                                    <BsHouse className="icon icon-1"/>
                                                </span>
                                </div>
                                <div className="col-7 text-center">
                                    <p className="fs-42 lh-12 mb-0 counterup" data-start="0" data-end="29"
                                       data-decimals="0" data-duration="0" data-separator="">29</p>
                                    <p>Properties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xxl-3 mb-6">
                        <div className="card">
                            <div className="card-body row align-items-center px-6 py-7">
                                <div className="col-5">
                                                <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-green badge-circle">
                                                    <AiOutlineEye className="icon icon-2"/>
                                                </span>
                                </div>
                                <div className="col-7 text-center">
                                    <p className="fs-42 lh-12 mb-0 counterup" data-start="0" data-end="1730"
                                       data-decimals="0" data-duration="0" data-separator="">1730</p>
                                    <p>Total views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xxl-3 mb-6">
                        <div className="card">
                            <div className="card-body row align-items-center px-6 py-7">
                                <div className="col-4">
                                                <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-yellow badge-circle">
                                                    <TbMessageCircle className="icon icon-review"/>
                                                </span>
                                </div>
                                <div className="col-8 text-center">
                                    <p className="fs-42 lh-12 mb-0 counterup" data-start="0" data-end="329"
                                       data-decimals="0" data-duration="0" data-separator="">329</p>
                                    <p>Total Visitor Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xxl-3 mb-6">
                        <div className="card">
                            <div className="card-body row align-items-center px-6 py-7">
                                <div className="col-5">
                                                <span className="w-83px h-83 d-flex align-items-center justify-content-center fs-36 badge badge-pink badge-circle">
                                                    <FaRegHeart className="icon icon-heart"/>
                                                </span>
                                </div>
                                <div className="col-7 text-center">
                                    <p className="fs-42 lh-12 mb-0 counterup" data-start="0" data-end="914"
                                       data-decimals="0" data-duration="0" data-separator="">914</p>
                                    <p>Total Favorites</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 mb-6">
                        <div className="card px-7 py-6 h-100 chart">
                            <div className="card-body p-0 collapse-tabs">
                                <div className="d-flex align-items-center mb-5">
                                    <h2 className="mb-0 text-heading fs-22 lh-15 mr-auto">View
                                        statistics</h2>
                                    <ul className="nav nav-pills justify-content-end d-none d-sm-flex nav-pills-01"
                                        role="tablist">
                                        <li className="nav-item px-5 py-1">
                                            <a className="nav-link active bg-transparent shadow-none p-0 letter-spacing-1"
                                               id="hours-tab" data-toggle="tab" href="#hours" role="tab"
                                               aria-controls="hours" aria-selected="true">Hours</a>
                                        </li>
                                        <li className="nav-item px-5 py-1">
                                            <a className="nav-link bg-transparent shadow-none p-0 letter-spacing-1"
                                               id="weekly-tab" data-toggle="tab" href="#weekly" role="tab"
                                               aria-controls="weekly" aria-selected="false">Weekly</a>
                                        </li>
                                        <li className="nav-item px-5 py-1">
                                            <a className="nav-link bg-transparent shadow-none p-0 letter-spacing-1"
                                               id="monthly-tab" data-toggle="tab" href="#monthly" role="tab"
                                               aria-controls="monthly" aria-selected="false">Monthly</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content shadow-none p-0">
                                    <div id="collapse-tabs-accordion">
                                        <div className="tab-pane tab-pane-parent fade show active px-0"
                                             id="hours" role="tabpanel" aria-labelledby="hours-tab">
                                            <div className="card bg-transparent mb-sm-0 border-0">
                                                <div
                                                    className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0"
                                                    id="headingHours">
                                                    <h5 className="mb-0">
                                                        <button
                                                            className="btn collapse-parent font-size-h5 btn-block border shadow-none"
                                                            data-toggle="false"
                                                            data-target="#hours-collapse"
                                                            aria-expanded="true"
                                                            aria-controls="hours-collapse">
                                                            Hours
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="hours-collapse"
                                                     className="collapse show collapsible"
                                                     aria-labelledby="headingHours"
                                                     data-parent="#collapse-tabs-accordion">
                                                    <div className="card-body p-0 py-4">
                                                        <canvas className="chartjs" data-chart-options="[]"
                                                                data-chart-labels="[&quot;05h&quot;,&quot;08h&quot;,&quot;11h&quot;,&quot;14h&quot;,&quot;17h&quot;,&quot;20h&quot;,&quot;23h&quot;]"
                                                                data-chart-datasets="[{&quot;label&quot;:&quot;Clicked&quot;,&quot;data&quot;:[0,7,10,3,15,30,10],&quot;backgroundColor&quot;:&quot;rgba(105, 105, 235, 0.1)&quot;,&quot;borderColor&quot;:&quot;#6969eb&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true},{&quot;label&quot;:&quot;View&quot;,&quot;data&quot;:[10,9,18,20,28,40,27],&quot;backgroundColor&quot;:&quot;rgba(254, 91, 52, 0.1)&quot;,&quot;borderColor&quot;:&quot;#ff6935&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true}]">
                                                        </canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane tab-pane-parent fade px-0" id="weekly"
                                             role="tabpanel" aria-labelledby="weekly-tab">
                                            <div className="card bg-transparent mb-sm-0 border-0">
                                                <div
                                                    className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0"
                                                    id="headingWeekly">
                                                    <h5 className="mb-0">
                                                        <button
                                                            className="btn collapse-parent font-size-h5 btn-block collapsed border shadow-none"
                                                            data-toggle="collapse"
                                                            data-target="#weekly-collapse"
                                                            aria-expanded="true"
                                                            aria-controls="weekly-collapse">
                                                            Weekly
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="weekly-collapse" className="collapse collapsible"
                                                     aria-labelledby="headingWeekly"
                                                     data-parent="#collapse-tabs-accordion">
                                                    <div className="card-body p-0 py-4">
                                                        <canvas className="chartjs" data-chart-options="[]"
                                                                data-chart-labels="[&quot;Mar 12&quot;,&quot;Mar 13&quot;,&quot;Mar 14&quot;,&quot;Mar 15&quot;,&quot;Mar 16&quot;,&quot;Mar 17&quot;,&quot;Mar 18&quot;,&quot;Mar 19&quot;]"
                                                                data-chart-datasets="[{&quot;label&quot;:&quot;Clicked&quot;,&quot;data&quot;:[0,13,9,3,15,15,10,0],&quot;backgroundColor&quot;:&quot;rgba(105, 105, 235, 0.1)&quot;,&quot;borderColor&quot;:&quot;#6969eb&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true},{&quot;label&quot;:&quot;View&quot;,&quot;data&quot;:[10,20,18,15,28,33,27,10],&quot;backgroundColor&quot;:&quot;rgba(254, 91, 52, 0.1)&quot;,&quot;borderColor&quot;:&quot;#ff6935&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true}]">
                                                        </canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane tab-pane-parent fade px-0" id="monthly"
                                             role="tabpanel" aria-labelledby="monthly-tab">
                                            <div className="card bg-transparent mb-sm-0 border-0">
                                                <div
                                                    className="card-header d-block d-sm-none bg-transparent px-0 py-1 border-bottom-0"
                                                    id="headingMonthly">
                                                    <h5 className="mb-0">
                                                        <button
                                                            className="btn btn-block collapse-parent collapsed border shadow-none"
                                                            data-toggle="collapse"
                                                            data-target="#monthly-collapse"
                                                            aria-expanded="true"
                                                            aria-controls="monthly-collapse">
                                                            Monthly
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id="monthly-collapse" className="collapse collapsible"
                                                     aria-labelledby="headingMonthly"
                                                     data-parent="#collapse-tabs-accordion">
                                                    <div className="card-body p-0 py-4">
                                                        <canvas className="chartjs" data-chart-options="[]"
                                                                data-chart-labels="[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;,&quot;Sep&quot;,&quot;Oct&quot;,&quot;Nov&quot;,&quot;Dec&quot;]"
                                                                data-chart-datasets="[{&quot;label&quot;:&quot;Clicked&quot;,&quot;data&quot;:[2,15,20,10,15,20,10,0,20,30,10,0],&quot;backgroundColor&quot;:&quot;rgba(105, 105, 235, 0.1)&quot;,&quot;borderColor&quot;:&quot;#6969eb&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true},{&quot;label&quot;:&quot;View&quot;,&quot;data&quot;:[10,20,18,15,28,33,27,10,20,30,10,0],&quot;backgroundColor&quot;:&quot;rgba(254, 91, 52, 0.1)&quot;,&quot;borderColor&quot;:&quot;#ff6935&quot;,&quot;borderWidth&quot;:3,&quot;fill&quot;:true}]">
                                                        </canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 mb-6">
                        <div className="card px-7 py-6 h-100">
                            <div className="card-body p-0">
                                <h2 className="mb-2 text-heading fs-22 lh-15">Recent Activities</h2>
                                <ul className="list-group list-group-no-border">
                                    <li className="list-group-item px-0 py-2">
                                        <div className="media align-items-center">
                                            <div
                                                className="badge badge-blue w-40px h-40 d-flex align-items-center justify-content-center property fs-18 mr-3">
                                                <BsHouse className="icon icon-1" />
                                            </div>
                                            <div className="media-body">
                                                Your listing <a href="#" className="text-heading"> Villa
                                                Called Archangel</a> has been
                                                approved
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 py-2">
                                        <div className="media align-items-center">
                                            <div
                                                className="badge badge-green w-40px h-40 d-flex align-items-center justify-content-center property fs-18 mr-3">
                                                <AiOutlineEye className="icon icon-2" />
                                            </div>
                                            <div className="media-body">
                                                Your listing <a href="#" className="text-heading"> Villa
                                                Called Archangel</a> has been
                                                approved
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 py-2">
                                        <div className="media align-items-center">
                                            <div
                                                className="badge badge-yellow w-40px h-40 d-flex align-items-center justify-content-center fs-18 mr-3">
                                                <TbMessageCircle className="icon icon-review"/>
                                            </div>
                                            <div className="media-body">
                                                Dollie Horton left a review on
                                                <a href="#" className="text-heading"> Villa
                                                    Called Archangel</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item px-0 py-2">
                                        <div className="media align-items-center">
                                            <div
                                                className="badge badge-pink w-40px h-40 d-flex align-items-center justify-content-center fs-18 mr-3">
                                                <FaRegHeart className="icon icon-heart"/>
                                            </div>
                                            <div className="media-body">
                                                Someone favorites your <a href="#"
                                                                          className="text-heading"> Adorable
                                                Garden Gingerbread
                                                House</a>
                                                listing
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

export default Admin;
