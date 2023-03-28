import React, {FC, Fragment} from 'react';
// @ts-ignore
import Slider from "react-slick";

import {IProduct} from "../../utils/types/IProduct";
import SliderProductCard from "./SliderProductCard";


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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        customPaging: (i: number) => (
            <span key={i}></span>
        ),
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    };

    return (
        <>
            <div className="position-relative">
                <Slider {...settings}>
                    {items.length ? items.map(item => (
                        <Fragment key={item.id}>
                            <SliderProductCard {...item} />
                        </Fragment>
                    )) : null}
                </Slider>
            </div>
        </>

    );
};

export default SliderComp;