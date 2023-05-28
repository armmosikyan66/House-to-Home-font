import '../styles/fontawesome/css/all.css';
import '../styles/dropzone.css';
import '../styles/select.css';
import "../styles/theme.css";
import '../styles/globals.css';
import '../styles/slick.css';
import type {AppProps} from 'next/app'
import {appWithTranslation} from "next-i18next";
import nextI18NextConfig from '../next-i18next.config.js'
import {wrapper} from "../redux/store";
import {useLayoutEffect, useRef} from "react";
import {useTypedDispatch, useTypedSelector} from "../redux/types/IRedux";
import {checkAuth} from "../services/auth";
import {setUser} from "../redux/actions/user";
import {IUser} from "../utils/types/IUser";
import App from "../component/layouts/App";
import {useRouter} from "next/router";


function MyApp({Component, pageProps}: AppProps) {
    const dispatch = useTypedDispatch();
    const router = useRouter();
    const mounted = useRef(false);

    const checkIsAuth = async () => {
        const {user, status} = await checkAuth();

        if (!user && status === "error" && router.asPath.includes("admin") && !router.asPath.includes("/admin/login")) router.push("/");

        dispatch(setUser(user as IUser));
    }

    useLayoutEffect(() => {
        (async () => {
            if (!mounted.current) {
                mounted.current = true;
                if (localStorage.getItem("token")) await checkIsAuth();
            }
        })();
    }, []);

    return (
        <App>
            <Component {...pageProps} />
        </App>
    )
}

export default appWithTranslation(wrapper.withRedux(MyApp), nextI18NextConfig)
