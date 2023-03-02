import React from 'react';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {Admin} from "../../component/templates/admin";

const NewProduct = () => {
    return (
        <div>
            <Admin.NewProductSteps/>
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

export default NewProduct;