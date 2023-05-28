import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import {useTranslation} from "next-i18next";

const PrivacyPolicy: NextPage<{}> = () => {
    const {t} = useTranslation("common");

    return (
        <>
            <div className="container pt-14 pb-14" dangerouslySetInnerHTML={{__html: t("privacyPolicy")}}/>
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

export default PrivacyPolicy;