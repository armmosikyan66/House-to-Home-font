import React, {FC} from 'react';
// @ts-ignore
import Slider from "react-slick";

import img from "../../assets/images/properties-grid-01.jpg"
import {IProduct} from "../../utils/types/IProduct";
import {API_URL} from "../../utils/constants/api";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
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

export type SliderProps = {
    items: IProduct[];
}

const SliderComp: FC<SliderProps> = ({items}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        appendDots: (dots: any) => (
            <ul className={"slick-dots"}>{dots}</ul>
        ),
        customPaging: (i: number) => (
            <span key={i}></span>
        )
    };

    return (
        <div className="position-relative">
            <Slider {...settings}>
                {items.length ? items.map(item => (
                    <div key={item.id} className="box pt-2 slick-slide slick-current slick-active px-0"
                         data-slick-index="1"
                         aria-hidden="false" role="tabpanel" id="slick-slide01"
                         aria-describedby="slick-slide-control01">
                        <div className="card shadow-hover-2 zoomIn animated" data-animate="zoomIn">
                            <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                                <div style={{
                                    background: `url('${API_URL}${item.imageUrl[0]}') center / cover no-repeat`,
                                    display: "block",
                                    width: "100%",
                                    height: 210,
                                    content: ""
                                }}></div>
                                <div className="card-img-overlay p-2 d-flex flex-column">
                                    <div>
                                        <span
                                            className={`badge mr-2 badge-${item.status.en === "sale" ? "indigo" : "primary"}`}>{item?.status[lang]}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-3">
                                <h2 className="card-title fs-16 lh-2 mb-0"><a href="single-property-1.html"
                                                                              className="text-dark hover-primary">Affordable
                                    Urban House</a></h2>
                                <p className="card-text font-weight-500 text-gray-light mb-2">{capitalize(`${item.city[lang]}, ${item.region[lang]}`)}</p>
                                <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                                        data-toggle="tooltip" title="" data-original-title="3 Bedroom">
                                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bed"></i>
                                        {item.rooms} Rm
                                    </li>
                                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                                        data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
                                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bath"></i>
                                        {item.baths} Ba
                                    </li>
                                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                                        data-toggle="tooltip" title="" data-original-title="Size">
                                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-chart-area"></i>
                                        {item.floorArea} Sq.Ft
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                                <p className="fs-17 font-weight-bold text-heading mb-0">${item.price}</p>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="#"
                                           className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                                           data-toggle="tooltip" title="" data-original-title="Wishlist"><i
                                            className="far fa-heart"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"
                                           className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                                           data-toggle="tooltip" title="" data-original-title="Compare"><i
                                            className="fas fa-exchange-alt"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )) : null}
            </Slider>
        </div>
    );
};

export default SliderComp;