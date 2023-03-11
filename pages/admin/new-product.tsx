import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {Admin} from "../../component/templates/admin";

const NewProduct = () => {
    return (
        <main id="content" className="bg-gray-01 pt-xl-0 pt-12">
            <Admin.NewProductSteps/>
        </main>
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

export default NewProduct;