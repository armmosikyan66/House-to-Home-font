import React, {Dispatch, MouseEvent, SetStateAction, useEffect, useState} from 'react';
import {IProduct} from "../../utils/types/IProduct";
import {API_URL} from "../../utils/constants/api";
import capitalize from "../../utils/helpers/capitalize";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import Link from "next/link";
import {useTypedDispatch, useTypedSelector} from "../../redux/types/IRedux";
import {addFavorite, removeFavorite} from "../../services/user";
import {setUser} from "../../redux/actions/user";
import {GenerateDescription} from "./GenerateDescription";
import {GenerateTitle} from "./GenerateTitle";

type ModalProps = {
    setModal: Dispatch<SetStateAction<boolean>>
    onData: (data: number) => void
    onToastify: (status: "success" | "info" | "danger", message: string) => void
}
type MyProps = IProduct & ModalProps

const ProductCardLg = ({prdId, id, type, newBuilding, currentFloor, elevator, furniture, floorsCount, region, city, imageUrl, rooms, baths, floorArea, price, status, onToastify, onData, setModal}: MyProps) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const user = useTypedSelector(state => state.auth.user);
    const dispatch = useTypedDispatch();
    const [liked, setLiked] = useState<boolean>(false);


    useEffect(() => {
        setLiked(user?.favorites?.some(fav => fav === id))
    }, [user])

    const handleSetFavorite = async (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (!user || !user?.id) {
            onToastify("danger", "Please first SignIn or SignUp");
            return
        } else if (!user?.isActivated) {
            onToastify("danger", "Please activate your account");
            return
        }

        if (!liked) {
            const favorite = await addFavorite(user.id, id);
            dispatch(setUser(favorite))
        } else {
            const favorite = await removeFavorite(user.id, id)
            dispatch(setUser(favorite))
        }
    }

    const handleClick = () => {
        setModal(true);
        onData(prdId)
    }

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
                                <a href="#" onClick={handleSetFavorite}
                                   className={`w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white border-white bg-hover-primary border-hover-primary hover-white text-${liked ? "primary" : "white"}`}>
                                    <i className="far fa-heart"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" onClick={handleClick}
                                   className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-heading bg-white border-white bg-hover-primary border-hover-primary hover-white">
                                    <i className="fas fa-exchange-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="media-body mt-3 mt-sm-0">
                    <h2 className="my-0">
                        <GenerateTitle type={type} region={region} status={status} prdId={prdId} className={"fs-16 lh-2 text-dark hover-primary d-block"}/>
                    </h2>
                    <p className="mb-1 font-weight-500 text-gray-light">{capitalize(`${city[lang]}, ${region[lang]}`)}</p>
                    <p className="fs-17 font-weight-bold text-heading mb-1">
                        ${price}
                    </p>
                    <GenerateDescription type={type} floorsCount={floorsCount} floorArea={floorArea} region={region} newBuilding={newBuilding} elevator={elevator} furniture={furniture} rooms={rooms} baths={baths} currentFloor={currentFloor} substr={true}/>
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