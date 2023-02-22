import type {GetStaticProps, NextPage} from 'next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from '../next-i18next.config.js'
//<link href="/app.css" rel="stylesheet" /> todo this in admin

const Home: NextPage<{}> = () => {
    return (
        <div>
            qweqwe
        </div>
    )
}

export const getStaticProps: GetStaticProps<{}> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(
            locale ?? "am",
            ['common'],
            nextI18NextConfig
        )),
    },
})

export default Home;
