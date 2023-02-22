import '../styles/dropzone.css';
import '../styles/select.css';
import "../styles/theme.css";
import '../styles/globals.css';
import type {AppProps} from 'next/app'
import {appWithTranslation} from "next-i18next";
import nextI18NextConfig from '../next-i18next.config.js'
import {wrapper} from "../redux/store";
import {useEffect} from "react";
import {useTypedDispatch} from "../redux/types/IRedux";
import {checkAuth} from "../services/auth";
import {setUser} from "../redux/actions/user";
import {IUser} from "../utils/types/IUser";
import AppLayout from "../components/layouts/AppLayout";

function MyApp({Component, pageProps}: AppProps) {
    const dispatch = useTypedDispatch();

    const checkIsAuth = async () => {
        const {user, status, message} = await checkAuth();

        if (!user && status === "error") {
            alert(message)
            return;
        }
        dispatch(setUser(user as IUser));
    }


    useEffect(() => {
        (async () => {
            if (localStorage.getItem('token'))
                checkIsAuth();
        })()
    }, []);

    return (
        <>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </>
    )
}

export default appWithTranslation(wrapper.withRedux(MyApp), nextI18NextConfig)
