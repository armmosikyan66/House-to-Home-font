import React, {useState} from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import FormInput from "../../component/ui/FormInput";
import useForm, {FormErrors} from "../../utils/hooks/useForm";
import {ILogin} from "../../utils/types/IAuth";
import {login} from "../../services/auth";
import Toastify from "../../component/ui/Toastify";
import {useRouter} from "next/router";

const validate = (values: ILogin) => {
    let errors: FormErrors<ILogin> = {};

    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailRegex.test(values.email)) {
        errors.email = 'Email is invalid';
    }

    // Validate password minimum length
    if (values.password && values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    return errors;
};

const Login: NextPage<{}> = () => {
    const router = useRouter();
    const [toastify, setToastify] = useState<{status: "danger" | "info" | "success"; message: string;}>({
        status: "info",
        message: ""
    })
    const {values, errors, handleChange, handleSubmit} = useForm<ILogin>({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit,
    });

    async function onSubmit() {
        const user = await login(values);

        if (user?.status && user?.status === "error" && user.message) {
            return setToastify({status: "danger", message: user.message})
        }

        setToastify({status: "success", message: "You successfully logged in"});
        setTimeout(() => {
            router.push("/admin")
        },  1500);
    }

    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
            <main style={{background: "#0061f2", minHeight: "100vh"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                            <div className="card my-10">
                                <div className="card-body p-5 text-center">
                                    <div className="h3 font-weight-light">Sign In</div>
                                </div>
                                <hr className="my-0"/>
                                <div className="card-body p-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <FormInput error={errors?.email} onChange={handleChange}
                                                       defaultValue={values.email} label={"E-mail"} type={"email"}
                                                       keyWord={"email"}/>
                                        </div>
                                        <div className="mb-4">
                                            <FormInput error={errors?.password} onChange={handleChange}
                                                       defaultValue={values.password} label={"Password"}
                                                       type={"password"} keyWord={"password"}/>
                                        </div>
                                        <div
                                            className="form-group d-flex align-items-center justify-content-between mb-0">
                                            <button style={{background: "#0061f2", fontSize: 14}}
                                                    className="btn rounded-sm py-2 btn-primary w-100">Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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

export default Login;