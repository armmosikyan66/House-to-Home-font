 // @ts-nocheck 
import React, {Fragment, useEffect, useState} from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import {IProduct} from "../utils/types/IProduct";
import {useTypedSelector} from "../redux/types/IRedux";
import {getFavorites} from "../services/user";
import ProductCard from "../component/ui/ProductCard";
import Toastify from "../component/ui/Toastify";
import ShareModal from "../component/ui/ShareModal";

const Favorites: NextPage<{}> = () => {
    const [favorites, setFavorites] = useState<IProduct[]>([]);
    const user = useTypedSelector(state => state.auth.user);
    const [modal, setModal] = useState<boolean>(false);
    const [data, setData] = useState<number | null>(null);
    const [toastify, setToastify] = useState<{ status: "danger" | "info" | "success"; message: string }>({
        status: "info",
        message: ""
    })

    function handleData(data: number) {
        setData(data)
    }
    function handleToastifyData(status: "success" | "info" | "danger", message: string) {
        setToastify({status: status, message: message})
    }

    useEffect(() => {
        (async () => {
            const data = await getFavorites(user?.favorites);

            setFavorites(data);
        })()
    }, [user])

    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message} /> : null}
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-16" data-animated-id="1">
                <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                    <div className="mr-0 mr-md-auto">
                        <h2 className="mb-0 text-heading fs-22 lh-15">My Favorites<span
                            className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">{favorites.length}</span>
                        </h2>
                    </div>
                    <div className="form-inline justify-content-md-end mx-n2">
                        <div className="p-2">
                            <div className="input-group input-group-lg bg-white border">
                                <div className="input-group-prepend">
                                    <button className="btn pr-0 shadow-none" type="button"><i className="far fa-search"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-transparent border-0 shadow-none text-body"
                                       placeholder="Search listing" name="search"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-6 col-xxl-3 mb-6">
                        {favorites.length ? favorites.map((favorite) => (
                            <Fragment key={favorite.id}>
                                <ProductCard onToastify={handleToastifyData} onData={handleData} setModal={setModal} {...favorite} />
                            </Fragment>
                        )) : null}
                    </div>
                </div>
            </div>
            {modal ? <ShareModal propertyId={data} setModal={setModal} /> : null}
        </>
    );
};

export const getStaticProps: GetStaticProps<{}> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(
            locale ?? "am",
            ['common'],
            nextI18NextConfig
        )),
    },
})

export default Favorites;
