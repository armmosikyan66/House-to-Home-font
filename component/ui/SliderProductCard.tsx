import React, {Dispatch, MouseEvent, SetStateAction, useEffect, useState} from 'react';
// @ts-ignore
import {IProduct} from "../../utils/types/IProduct";
import {API_URL} from "../../utils/constants/api";
import capitalize from "../../utils/helpers/capitalize";
import {useTypedDispatch, useTypedSelector} from "../../redux/types/IRedux";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {addFavorite, removeFavorite} from "../../services/user";
import {setUser} from "../../redux/actions/user";
import Link from 'next/link'

type ModalProps = {
    setModal: Dispatch<SetStateAction<boolean>>
    onData: (data: string) => void
    onToastify: (status: "success" | "info" | "danger", message: string) => void
}
type MyProps = IProduct & ModalProps

const SliderProductCard = ({id, prdId, rooms, floorArea, baths, imageUrl, status, price, city, region, setModal, onData, onToastify}: MyProps) => {
    const {i18n} = useTranslation()
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
            onToastify("danger", "Please first SignIn or SignUp!");
            return
        } else if (!user?.isActivated) {
            onToastify("danger", "Please activate your account!");
            return
        }

        if (!liked) {
            console.log("qwe")
            const favorite = await addFavorite(user.id, id);
            dispatch(setUser(favorite))
        } else {
            console.log("ert")
            const favorite = await removeFavorite(user.id, id)
            dispatch(setUser(favorite))
        }
    }

    const handleClick = () => {
        setModal(true);
        onData(id)
    }

    return (
        <>
            <div key={id} className="box pt-2 slick-slide slick-current slick-active px-0"
                 style={{width: `100%`}}
                 data-slick-index="1"
                 aria-hidden="false" role="tabpanel" id="slick-slide01"
                 aria-describedby="slick-slide-control01">
                <div className="card shadow-hover-2 zoomIn animated" data-animate="zoomIn">
                    <div className="hover-change-image bg-hover-overlay rounded-lg card-img-top">
                        <div style={{
                            background: `url('${API_URL}${imageUrl[0]}') center / cover no-repeat`,
                            display: "block",
                            width: "100%",
                            height: 210,
                            content: ""
                        }}></div>
                        <div className="card-img-overlay p-2 d-flex flex-column">
                            <div>
                                <span className={`badge mr-2 badge-${status.en === "sale" ? "indigo" : "primary"}`}>{status[lang]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pt-3">
                        <h2 className="card-title fs-16 lh-2 mb-0"><Link href={`/properties/${prdId}`} className="text-dark hover-primary">Affordable Urban House</Link></h2>
                        <p className="card-text font-weight-500 text-gray-light mb-2">{capitalize(`${city[lang]}, ${region[lang]}`)}</p>
                        <ul className="list-inline d-flex mb-0 flex-wrap mr-n5">
                            <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                                data-toggle="tooltip" title="" data-original-title="3 Bedroom">
                                <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bed"></i>
                                {rooms} Rm
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                                data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
                                <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-bath"></i>
                                {baths} Ba
                            </li>
                            <li className="list-inline-item text-gray font-weight-500 fs-13 d-flex align-items-center mr-5"
                                data-toggle="tooltip" title="" data-original-title="Size">
                                <i className="icon icon-bedroom fs-18 text-primary mr-1 fas fa-chart-area"></i>
                                {floorArea} Sq.M
                            </li>
                        </ul>
                    </div>
                    <div
                        className="card-footer bg-transparent d-flex justify-content-between align-items-center py-3">
                        <p className="fs-17 font-weight-bold text-heading mb-0">${price}</p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item" data-toggle="tooltip" title=""
                                data-original-title="Wishlist">
                                <a href="#" onClick={handleSetFavorite}
                                   className={`text-${liked ? "primary" : "grey"} fs-20 hover-primary w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center`}><i
                                    className="far fa-heart"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <button onClick={handleClick}
                                   className="w-40px h-40 border rounded-circle d-inline-flex align-items-center justify-content-center text-body hover-secondary bg-hover-accent border-hover-accent"
                                   data-toggle="tooltip" title="" data-original-title="Compare"><i
                                    className="fas fa-exchange-alt"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderProductCard;