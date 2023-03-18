import React, {Fragment, useEffect, useState} from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import {IProduct} from "../utils/types/IProduct";
import {useTypedSelector} from "../redux/types/IRedux";
import {getFavorites} from "../services/user";
import ProductCard from "../component/ui/ProductCard";

const Favorites: NextPage<{}> = () => {
    const [favorites, setFavorites] = useState<IProduct[]>([]);
    const user = useTypedSelector(state => state.auth.user);

    useEffect(() => {
        (async () => {
            const data = await getFavorites();

            setFavorites(data);
        })()
    }, [user])

    return (
        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-16" data-animated-id="1">
            <div className="d-flex flex-wrap flex-md-nowrap mb-6">
                <div className="mr-0 mr-md-auto">
                    <h2 className="mb-0 text-heading fs-22 lh-15">My Favorites<span
                        className="badge badge-white badge-pill text-primary fs-18 font-weight-bold ml-2">5</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
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
                            <ProductCard {...favorite} />
                        </Fragment>
                    )) : null}
                </div>
            </div>
        </div>
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