import React, {FC, Fragment, useState} from 'react';
// @ts-ignore
import Slider from "react-slick";

import {IProduct} from "../../utils/types/IProduct";
import SliderProductCard from "./SliderProductCard";
import ShareModal from "./ShareModal";
import Toastify from "./Toastify";

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
    const [modal, setModal] = useState<boolean>(false);
    const [data, setData] = useState<number | null>(null);
    const [toastify, setToastify] = useState<{ status: "danger" | "info" | "success"; message: string }>({
        status: "info",
        message: ""
    })
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
    function handleData(data: number) {
        setData(data)
    }
    function handleToastifyData(status: "success" | "info" | "danger", message: string) {
        setToastify({status: status, message: message})
    }
    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message} /> : null}
            <div className="position-relative">
                <Slider {...settings}>
                    {items.length ? items.map((item) => (
                        <Fragment key={item.id}>
                            <SliderProductCard onToastify={handleToastifyData} onData={handleData} setModal={setModal} {...item} />
                        </Fragment>
                    )) : null}
                </Slider>
            </div>
            {modal ? <ShareModal propertyId={data} setModal={setModal} /> : null}
        </>

    );
};

export default SliderComp;