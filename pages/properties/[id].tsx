import React, {useEffect, useState} from 'react';
// @ts-ignore
import Slider from 'react-slick';
import {useTranslation, withTranslation} from "next-i18next";
import prdImg from "../../assets/images/properties-grid-01.jpg"
import SliderComp from "../../component/ui/Slider";
import {useRouter} from "next/router";
import {IProduct} from "../../utils/types/IProduct";
import {getOne, getRecommended} from "../../services/products";
import {API_URL} from "../../utils/constants/api";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import dateFormatter from "../../utils/helpers/dateFormatter";
import capitalize from "../../utils/helpers/capitalize";

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
    const router = useRouter();
    const [product, setProduct] = useState<IProduct>({} as IProduct);
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [sliderItems, setSliderItems] = useState<IProduct[]>([]);

    useEffect(() => {
        (async () => {
            if (!router.isReady && !router.query.id || typeof router.query.id !== "string") return;

            const prd = await getOne(router.query.id);

            if (prd?.status?.en) {
                const items = await getRecommended(prd.status["en"] as "rent" | "sale", "en");
                setSliderItems(items);
            }

            setProduct(prd);
        })();
    }, [router.isReady, router.query])

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
                            <li className="breadcrumb-item fs-12 letter-spacing-087 active">#{router.query.id}
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
                            {product?.imageUrl?.length ? product.imageUrl.map((img) => (
                                <div key={img} className="box slick-slide p-0" data-slick-index="0"
                                     aria-hidden="false" style={{maxWidth: "100%"}}>
                                    <div className="item item-size-3-2">
                                        <div className="card p-0 hover-change-image">
                                            <a href="images/single-property-lg-1.jpg" className="card-img"
                                               style={{backgroundImage: `url('${API_URL}${img}')`}}>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )) : null}
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
                                    <li className="list-inline-item badge badge-primary mr-3">{product?.status && product?.status[lang]}</li>
                                </ul>
                                <div className="d-sm-flex justify-content-sm-between">
                                    <div>
                                        <h2 className="fs-35 font-weight-600 lh-15 text-heading">Villa on Hollywood
                                            Boulevard</h2>
                                        <p className="mb-0"><i
                                            className="fal fa-map-marker-alt mr-2"></i>{(product?.city && product?.region) && capitalize(`${product?.city[lang]}, ${product?.region[lang]}`)}
                                        </p>
                                    </div>
                                    <div className="mt-2 text-lg-right">
                                        <p className="fs-22 text-heading font-weight-bold mb-0">${product?.price}</p>
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
                                                <i className="fa fa-home icon icon-price fs-32 text-primary">
                                                </i>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">SQMT</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">{product?.floorArea}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <i className="fas fa-bed icon icon-bedroom fs-32 text-primary">
                                                </i>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">ROOMS</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">{product?.rooms}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <i className="fa fa-bath icon icon-sofa fs-32 text-primary">
                                                </i>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="my-1 fs-14 text-uppercase letter-spacing-093 font-weight-normal">BATHROOMS</h5>
                                                <p className="mb-0 fs-13 font-weight-bold text-heading">2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-4 mb-6">
                                        <div className="media">
                                            <div className="p-2 shadow-xxs-1 rounded-lg mr-2">
                                                <i className="fa fa-info-square icon icon-status fs-32 text-primary">
                                                </i>
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
                                        <dd>{product?.prdId}</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Price</dt>
                                        <dd>${product?.price}</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property type
                                        </dt>
                                        <dd>{product?.type && product?.type[lang].toUpperCase()}</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Property
                                            status
                                        </dt>
                                        <dd>{product?.status && product?.status[lang]}</dd>
                                    </dl>
                                    {product?.status?.en !== "land" ? <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Rooms</dt>
                                        <dd>{product.rooms}</dd>
                                    </dl> : null}
                                    {product?.status?.en !== "land" ? <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Bathrooms</dt>
                                        <dd>{product.baths}</dd>
                                    </dl> : null}
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Size</dt>
                                        <dd>{product.floorArea}SqMt</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Floors count</dt>
                                        <dd>{product.floorsCount}</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Floors count</dt>
                                        <dd>{product.currentFloor}</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Ceiling Height</dt>
                                        <dd>{product.ceilingHeight}</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Plot Area</dt>
                                        <dd>{product.plotArea}</dd>
                                    </dl>
                                    <dl className="col-sm-6 mb-0 d-flex">
                                        <dt className="w-110px fs-14 font-weight-500 text-heading pr-2">Building Type</dt>
                                        <dd>{product?.buildingType && capitalize(product.buildingType[lang])}</dd>
                                    </dl>
                                </div>
                            </section>
                            <section className="mt-2 pb-7 px-6 pt-5 bg-white rounded-lg">
                                <h4 className="fs-22 text-heading mb-4">Offices Amenities</h4>
                                <ul className="list-unstyled mb-0 row no-gutters">
                                    <li className="col-sm-3 col-6 mb-2">
                                        <i className={`far fa-times mr-2 text-${product?.furniture ? "primary":"reset"}`}></i>Furniture
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2">
                                        <i className={`far fa-times mr-2 text-${product?.elevator ? "primary":"reset"}`}></i>Elevator
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2">
                                        <i className={`far fa-times mr-2 text-${product?.newBuilding ? "primary":"reset"}`}></i>New Building
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2">
                                        <i className={`far fa-times mr-2 text-${product?.balcony ? "primary":"reset"}`}></i>Balcony
                                    </li>
                                    <li className="col-sm-3 col-6 mb-2">
                                        <i className="far fa-times mr-2 text-primary"></i>Active
                                    </li>
                                </ul>
                            </section>
                            <section className="mt-2 pb-7 px-6 pt-6 bg-white rounded-lg">
                                <h4 className="fs-22 text-heading mb-6">Similar Homes You May Like</h4>
                                <SliderComp items={sliderItems}/>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withTranslation("common")(Id);