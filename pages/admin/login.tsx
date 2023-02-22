import {GetStaticProps, NextPage} from "next";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import {ILogin} from "../../utils/types/IAuth";
import {useTranslation} from "next-i18next";
import {login} from "../../services/auth";
import {setUser} from "../../redux/actions/user";
import {useTypedDispatch, useTypedSelector} from "../../redux/types/IRedux";
import {IUser} from "../../utils/types/IUser";
import {useRouter} from "next/router";

const schema = yup.object().shape({
    email: yup.string().required("required").email("invalid"),
    password: yup.string().required("required").min(8, "invalid"),
});

const Login: NextPage<{}> = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth);
    const router = useRouter();
    const {t} = useTranslation("common");
    const dispatch = useTypedDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm<ILogin>({
        resolver: yupResolver(schema as any) // todo add types
    });

    const onSubmit = async (data: ILogin) => {
        const {user, status, message} = await login(data);

        if (!user && status === "error") {
            alert(message) // todo create toastify
            return;
        }
        dispatch(setUser(user as IUser));
        router.push("/admin");
    };

    useEffect(() => {
        (async () => {
            if (isAuth) {
                router.push("/admin");
            }
        })();
    }, [isAuth])

    return (
        <main style={{background: "#0061f2", minHeight: "100vh"}} id="content">
            <section className="py-15">
                <div className="container">
                    <div className="row login-register justify-content-center">
                        <div className="col-lg-5">
                            <div className="card border-0 shadow-xxs-2 mb-6">
                                <div className="card-body px-8 py-6">
                                    <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Log In</h2>
                                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                                        <div className="form-group mb-4">
                                            <label htmlFor="username-1">Email</label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg border-0"
                                                id="username-1"
                                                {...register("email")}
                                                name="email"
                                                placeholder="Your email"
                                            />
                                            {errors.email ?
                                                <p className="form-text">{t(`auth.email.${errors.email.message}`)}</p> : null}
                                        </div>
                                        <div className="form-group mb-4">
                                            <label htmlFor="username-1">Password</label>
                                            <input
                                                type="password"
                                                className="form-control form-control-lg border-0"
                                                id="username-1"
                                                {...register("password")}
                                                name="password"
                                                placeholder="Your Password"
                                            />
                                            {errors.email ?
                                                <p className="form-text">{t(`auth.password.${errors.email.message}`)}</p> : null}
                                        </div>
                                        <div className="d-flex mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="remember-me-1"
                                                       name="remember"/>
                                                <label className="form-check-label" htmlFor="remember-me-1">
                                                    Stay signed in
                                                </label>
                                            </div>
                                        </div>
                                        <button style={{background: "#0061f2", border: "none"}} type="submit"
                                                className="btn btn-primary btn-lg btn-block rounded">Log
                                            in
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

export default Login;
