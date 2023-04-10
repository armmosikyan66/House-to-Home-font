import React, {FC} from 'react';
import {IProduct} from "../../utils/types/IProduct";
import {API_URL} from "../../utils/constants/api";
import capitalize from "../../utils/helpers/capitalize";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import Link from "next/link";

const ProductCardLg: FC<IProduct> = ({prdId, type, newBuilding, currentFloor, elevator, furniture,buildingType, authorPhoneNumber, floorsCount, address, region, city, imageUrl, rooms, baths, floorArea, price, status}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const {t} = useTranslation();
    const isNewBuilding = newBuilding ? t("singlePrd.isHas.isNewBuilding") : null;
    const isHasElevator = elevator ? t("singlePrd.isHas.elevator") : null;
    const isOnFloor = type && type[lang] === 'house' || 'дом' || 'տուն' ? null : t("singlePrd.isHas.inFloor", {currentFloor: currentFloor});
    const isHasFurniture = furniture ? t("singlePrd.isHas.isHasFurniture") : null;

    return (
        <div className="py-5 px-4 border rounded-lg shadow-hover-1 bg-white mb-4 fadeInUp animated"
             data-animate="fadeInUp">
            <div className="media flex-column flex-sm-row no-gutters">
                <div className="col-sm-3 mr-sm-5 card border-0 hover-change-image bg-hover-overlay mb-sm-5">
                    <div style={{
                        background: `url('${API_URL}${imageUrl[0]}') center / cover no-repeat`,
                        display: "block",
                        width: "100%",
                        height: 180,
                        content: ""
                    }}></div>
                    <div className="card-img-overlay p-2">
                        <ul className="list-inline mb-0 d-flex justify-content-center align-items-center h-100 hover-image">
                            <li className="list-inline-item">
                                <a href="#"
                                   className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white border-white bg-hover-primary border-hover-primary hover-white">
                                    <i className="far fa-heart"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"
                                   className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white border-white bg-hover-primary border-hover-primary hover-white">
                                    <i className="fas fa-exchange-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="media-body mt-3 mt-sm-0">
                    <h2 className="my-0">
                        <Link href={`/properties/${prdId}`} className="fs-16 lh-2 text-dark hover-primary d-block">Home
                            in Metric
                            Way</Link>
                    </h2>
                    <p className="mb-1 font-weight-500 text-gray-light">{capitalize(`${city[lang]}, ${region[lang]}`)}</p>
                    <p className="fs-17 font-weight-bold text-heading mb-1">
                        ${price}
                    </p>
                    <p className="mb-2 ml-0" dangerouslySetInnerHTML={{
                        __html: t("singlePrd.dynamicDesc", {
                            type: type && capitalize(type[lang]),
                            region: region[lang],
                            buildingType: buildingType && buildingType[lang],
                            isOnFloor: isOnFloor,
                            floorsCount: floorsCount,
                            floorArea: floorArea,
                            isHasElevator: isHasElevator,
                            rooms: rooms,
                            baths: baths,
                            isHasFurniture: isHasFurniture,
                            isNewBuilding: isNewBuilding,
                            authorPhoneNumber: authorPhoneNumber
                        })
                    }}/>
                </div>
            </div>
            <div className="d-sm-flex justify-content-sm-between">
                <ul className="list-inline d-flex mb-0 flex-wrap">
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bed"></i>
                        {rooms} Rm
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip" title="" data-original-title="Size">
                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bath"></i>
                        {baths} Ba
                    </li>
                    <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                        data-toggle="tooltip" title="" data-original-title="Year">
                        <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-chart-area"></i>
                        {floorArea} Sq.M
                    </li>
                </ul>
                <span
                    className={`badge badge-${status.en === "rent" ? "primary" : "indigo"} mr-xl-2 mt-3 mt-sm-0`}>{capitalize(status[lang])}</span>
            </div>
        </div>
    );
};

export default ProductCardLg;