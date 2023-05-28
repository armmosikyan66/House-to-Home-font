import React, {Dispatch, MouseEvent, SetStateAction, useEffect, useState} from 'react';
import {IProduct} from "../../utils/types/IProduct";
import {API_URL} from "../../utils/constants/api";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import capitalize from "../../utils/helpers/capitalize";
import {addFavorite, removeFavorite} from "../../services/user";
import {useTypedDispatch, useTypedSelector} from "../../redux/types/IRedux";
import {setUser} from "../../redux/actions/user";
import {GenerateTitle} from "./GenerateTitle";

type ModalProps = {
    setModal: Dispatch<SetStateAction<boolean>>
    onData: (data: number) => void
    onToastify: (status: "success" | "info" | "danger", message: string) => void
}
type MyProps = IProduct & ModalProps

const ProductCard = ({id, prdId, rooms, type, floorArea, baths, imageUrl, status, price, city, region, setModal, onData, onToastify}: MyProps) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const user = useTypedSelector(state => state.auth.user);
    const dispatch = useTypedDispatch();
    const [liked, setLiked] = useState<boolean>(false);

    useEffect(() => {
        setLiked(user?.favorites?.some(fav => fav === id));
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
                    <div><span
                        className={`badge badge-${status.en === "sale" ? "indigo" : "primary"}`}>{status[lang]}</span>
                    </div>
                    <div className="mt-auto d-flex hover-image">
                        <ul className="list-inline mb-0 d-flex align-items-end mr-auto">

                        </ul>
                        <ul className="list-inline mb-0 d-flex align-items-end mr-n3">
                            <li className="list-inline-item mr-3 h-32"
                                data-toggle="tooltip" title=""
                                data-original-title="Wishlist">
                                <a href="#" onClick={handleSetFavorite}
                                   className={`text-${liked ? "primary" : "white"} fs-20 hover-primary`}>
                                    <i className="far fa-heart"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mr-3 h-32"
                                data-toggle="tooltip" title=""
                                data-original-title="Compare">
                                <a href="#" onClick={handleClick} className="text-white fs-20 hover-primary">
                                    <i className="fas fa-exchange-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card-body pt-3 px-0 pb-1">
                <h2 className="fs-16 mb-1">
                    <GenerateTitle type={type} region={region} status={status} prdId={prdId} className="text-dark hover-primary"/>
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
                        {floorArea} Sq.M
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCard;