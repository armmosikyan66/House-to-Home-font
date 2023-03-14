import React, {FC} from 'react';
import {IProduct} from "../../utils/types/IProduct";
import {API_URL} from "../../utils/constants/api";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import capitalize from "../../utils/helpers/capitalize";
import Link from 'next/link';

const ProductCard: FC<IProduct> = ({prdId, rooms, floorArea, baths, imageUrl, status, price, city, region}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    return (
        <div className="card border-0 fadeInUp animated" data-animate="fadeInUp">
            <div
                className="position-relative hover-change-image bg-hover-overlay rounded-lg card-img">
                <div style={{
                    background: `url('${API_URL}${imageUrl[0]}') center / cover no-repeat`,
                    display: "block",
                    width: "100%",
                    height: 210,
                    content: ""
                }}></div>
                <div className="card-img-overlay d-flex flex-column">
                    <div><span className={`badge badge-${status.en === "sale" ? "indigo" : "primary"}`}>{status[lang]}</span></div>
                    <div className="mt-auto d-flex hover-image">
                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">

                        </ul>
                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                            <li className="list-inline-item mr-3 h-32"
                                data-toggle="tooltip" title=""
                                data-original-title="Wishlist">
                                <a href="pages/properties/properties#" className="text-white fs-20 hover-primary">
                                    <i className="far fa-heart"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mr-3 h-32"
                                data-toggle="tooltip" title=""
                                data-original-title="Compare">
                                <a href="pages/properties/properties#" className="text-white fs-20 hover-primary">
                                    <i className="fas fa-exchange-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-body pt-3 px-0 pb-1">
                <h2 className="fs-16 mb-1">
                    <Link href={`/properties/${prdId}`} className="text-dark hover-primary">Home in
                    Metric Way</Link>
                </h2>
                <p className="font-weight-500 text-gray-light mb-0">{capitalize(`${city[lang]}, ${region[lang]}`)}</p>
                <p className="fs-17 font-weight-bold text-heading mb-0 lh-16">
                    ${price}
                </p>
            </div>
            <div className="card-footer bg-transparent px-0 pb-0 pt-2">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                        data-toggle="tooltip" title="" data-original-title="3 Bedroom">
                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bed"></i>
                        {rooms} Rm
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 mr-sm-7"
                        data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bath"></i>
                        {baths} Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13"
                        data-toggle="tooltip" title="" data-original-title="Size">
                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-chart-area"></i>
                        {floorArea} Sq.Ft
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCard;