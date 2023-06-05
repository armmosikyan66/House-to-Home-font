import React from 'react';
import {GetServerSideProps, GetStaticProps} from "next";
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

export const getServerSideProps: GetServerSideProps = async ({ locale , req}) => {
    const token = req.cookies.token;

    if(token) {
        const decodedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf8'));

        if (decodedToken?.role === "user") {
            return {
                redirect: {
                    permanent: false,
                    destination: '/'
                }
            }
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(locale ?? "am", ['common'])),
        },
    }
}

export default NewProduct;