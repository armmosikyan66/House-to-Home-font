import React from 'react';
// @ts-ignore
import Slider from 'react-slick';
import {withTranslation} from "next-i18next";
import prdImg from "../../assets/images/properties-grid-01.jpg"
import SliderComp from "../../component/ui/Slider";

const PrevArrow = ({onClick}: any) => (
    <div onClick={onClick} className="slick-prev slick-arrow" aria-label="Previous" aria-disabled="false">
        <i className="far fa-angle-left"></i>
    </div>
)
const NextArrow = ({onClick}: any) => {
    return (
        <div onClick={onClick} className="slick-next slick-arrow" aria-label="Next" aria-disabled="true">
            <i className="far fa-angle-right"></i>
        </div>
    )
}

const Id = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
    };
    return (
        <>
            <section className="pt-16 bg-white shadow-5 pb-7">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb py-3">
                            <li className="breadcrumb-item fs-12 letter-spacing-087">
                                <a href="index.htm">Home</a>
                            </li>
                            <li className="breadcrumb-item fs-12 letter-spacing-087">
                                <a href="listing-grid-with-left-filter.html">Listing</a>
                            </li>
                            <li className="breadcrumb-item fs-12 letter-spacing-087 active">Villa on Hollywood Boulevard
                            </li>
                        </ol>
                    </nav>
                    <div className="galleries position-relative zoomIn animated" data-animate="zoomIn">
                        <div className="position-absolute pos-fixed-top-right z-index-3">
                            <ul className="list-inline pt-4 pr-5">
                                <li className="list-inline-item mr-2">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle"
                                       data-original-title="Favourite">
                                        <i className="far fa-heart"></i></a>
                                </li>
                                <li className="list-inline-item mr-2">
                                    <button type="button"
                                            className="btn btn-white p-0 d-flex align-items-center justify-content-center w-40px h-40 text-heading bg-hover-primary hover-white rounded-circle border-0 shadow-none"
                                            data-container="body" data-toggle="popover" data-placement="top"
                                            data-html="true" data-original-title="" title="">
                                        <i className="far fa-share-alt"></i>
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" data-toggle="tooltip" title=""
                                       className="d-flex align-items-center justify-content-center w-40px h-40 bg-white text-heading bg-hover-primary hover-white rounded-circle"
                                       data-original-title="Print">
                                        <i className="far fa-print"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Slider {...settings} className="slick-list draggable">
                            {[...new Array(5)].map(() => (
                                <div className="box slick-slide p-0" data-slick-index="0"
                                     aria-hidden="false" style={{maxWidth: "100%"}}>
                                    <div className="item item-size-3-2">
                                        <div className="card p-0 hover-change-image">
                                            <a href="images/single-property-lg-1.jpg" className="card-img"
                                               style={{backgroundImage: `url('${prdImg.src}')`}}>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <div className="primary-content bg-gray-01 pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <section className="pb-8 px-6 pt-6 bg-white rounded-lg">
                                <ul className="list-inline d-sm-flex align-items-sm-center mb-2">
                                    <li className="list-inline-item badge badge-orange mr-2">Featured</li>
                                    <li className="list-inline-item badge badge-primary mr-3">For Sale</li>
                                    <li className="list-inline-item mr-2 mt-2 mt-sm-0"><i
                                        className="fal fa-clock mr-1"></i>2 months ago
                                    </li>
                                    <li className="list-inline-item mt-2 mt-sm-0"><i className="fal fa-eye mr-1"></i>1039
                                        views
                                    </li>
                                </ul>
                                <div className="d-sm-flex justify-content-sm-between">
                                    <div>
                                        <h2 className="fs-35 font-weight-600 lh-15 text-heading">Villa on Hollywood
                                            Boulevard</h2>
                                        <p className="mb-0"><i className="fal fa-map-marker-alt mr-2"></i>398 Pete
                                            Pascale Pl, New York</p>
                                    </div>
                                    <div className="mt-2 text-lg-right">
                                        <p className="fs-22 text-heading font-weight-bold mb-0">$1.250.000</p>
                                        <p className="mb-0">$9350/SqFt</p>
                                    </div>
                                </div>
                                <h4 className="fs-22 text-heading mt-6 mb-2">Description</h4>
                                <p className="mb-0 lh-214">Massa tempor nec feugiat nisl pretium. Egestas fringilla
                                    phasellus faucibus
                                    scelerisque eleifend donec.
                                    Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt
                                    vitae semper
                                    quis lectus. Turpis in eu mi bibendum neque
                                    egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam.
                                    Dignissim sodales
                                    ut eu sem. Nibh mauris cursus mattis molestie a
                                    iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices
                                    tincidunt.</p>
                            </section>
                            <section className="mt-2 pb-3 px-6 pt-5 bg-white rounded-lg">
                                <h4 className="fs-22 text-heading mb-6">Facts and Features</h4>
                                <div className="row">
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-family fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Type</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">Single
                                                    Family</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-year fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">year
                                                    built</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-heating fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">heating</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">Radiant</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-price fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">SQFT</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">979.0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-bedroom fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Bedrooms</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-sofa fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">bathrooms</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-Garage fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">GARAGE</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <svg className="icon icon-status fs-32 text-primary">
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">Status</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="mt-2 pb-6 px-6 pt-5 bg-white rounded-lg">
                                <h4 className="fs-22 text-heading mb-4">Additional Details</h4>
                                <div className="row">
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property ID</dt>
                                        <dd>AD-2910</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Price</dt>
                                        <dd>$890.000</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property type
                                        </dt>
                                        <dd>Apartment, bar, cafe, villa</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property
                                            status
                                        </dt>
                                        <dd>For Sale</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Rooms</dt>
                                        <dd>4</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bedrooms</dt>
                                        <dd>3</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Size</dt>
                                        <dd>900SqFt</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bathrooms</dt>
                                        <dd>2</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Garage</dt>
                                        <dd>1</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bathrooms</dt>
                                        <dd>2000 SqFt</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Garage size</dt>
                                        <dd>50 SqFt</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Year build</dt>
                                        <dd>2020</dd>
                                    </dl>
                                    <dl className="offset-sm-6 col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Label</dt>
                                        <dd>Bestseller</dd>
                                    </dl>
                                </div>
                            </section>
                            <section className="mt-2 pb-7 px-6 pt-5 bg-white rounded-lg">
                                <h4 className="fs-22 text-heading mb-4">Offices Amenities</h4>
                                <ul className="list-unstyled mb-0 row no-gutters">
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Balcony
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Fireplace
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Balcony
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Fireplace
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Basement
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Cooling
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Basement
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Cooling
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Dining room
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Dishwasher
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Dining room
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2"><i
                                        className="far fa-check mr-2 text-primary"></i>Dishwasher
                                    </li>
                                </ul>
                            </section>
                            <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                                <h4 className="fs-22 text-heading mb-6">Similar Homes You May Like</h4>
                                <SliderComp/>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withTranslation("common")(Id);