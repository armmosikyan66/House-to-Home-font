import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import Img from "../assets/images/page-404.jpg"

const Error: NextPage<{}> = () => {
    return (
        <section className="pt-9 pb-10" data-animated-id="1">
            <div className="container">
                <div className="text-center mb-5">
                    <img src={Img.src} alt="Page 404" className="mb-5"/>
                    <h1 className="fs-30 lh-16 text-dark font-weight-600 mb-5">Oops! That page can’t be found.</h1>
                    <p className="mb-8">It looks like nothing was found at this location. Maybe try one of the links
                        below or a
                        search?</p>
                    <form>
                        <div className="input-group mb-6 mxw-670 shadow-xxs-2 custom-input-group mb-2">
                            <div className="input-group-prepend">
                                <button className="btn shadow-none text-dark fs-18" type="button"><i
                                    className="fal fa-search"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-white shadow-none border-0 z-index-1"
                                   name="search" placeholder="Enter an address, neighborhood"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
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

export default Error;