 // @ts-nocheck 
import React, {useState, useEffect} from 'react';
import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import FormInput from "../../component/ui/FormInput";
import FormSelect from "../../component/ui/FormSelect";
import {IRegister} from "../../utils/types/IAuth";
import useForm, {FormErrors} from "../../utils/hooks/useForm";
import {register} from "../../services/auth";
import {useTypedSelector} from "../../redux/types/IRedux";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const validate = (values: IRegister) => {
    let errors: FormErrors<IRegister> = {};

    if (!values.email) errors.email = 'Email is required';
    if (!values.firstName) errors.firstName = 'First name is required';
    if (!values.lastName) errors.lastName = 'Last name is required';
    if (!values.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!values.password) errors.password = 'Password is required';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailRegex.test(values.email)) {
        errors.email = 'Email is invalid';
    }

    // Validate first name and last name minimum length
    if (values.firstName && values.firstName.length < 3) {
        errors.firstName = 'First name must be at least 3 characters long';
    }
    if (values.lastName && values.lastName.length < 3) {
        errors.lastName = 'Last name must be at least 3 characters long';
    }

    // Validate password minimum length
    if (values.password && values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    return errors;
};

const NewUser: NextPage<{}> = () => {
    const [role, setRole] = useState<"admin" | "locale" | "user" | undefined>(undefined);
    const {t} = useTranslation();
    const user = useTypedSelector(state => state.auth.user);
    const router = useRouter();
    const {values, errors, handleChange, handleSubmit} = useForm<IRegister>({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            password: "",
        },
        validate,
        onSubmit,
    });

    useEffect(() => {
        if(!router.isReady) return;

        if(user.role !== "admin") {
            router.push('/admin')
        }
    }, [router.isReady])

    async function onSubmit() {
        const user = await register({...values, role})

        if (user) {
            // todo create success toastify
        }
    }

    return (
        <main id="content" className="bg-gray-01 pt-xl-0 pt-12">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10" data-animated-id="1">
                <div className="mb-6 row justify-content-center">
                    <h2 className="mb-0 text-heading fs-22 lh-15 col-lg-8">New User
                    </h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row mb-6 justify-content-center">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body px-6 pt-6 pb-5">
                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">{t("admin.newUser.title")}</h3>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <div className="mb-2">
                                        <FormInput error={errors?.firstName} onChange={handleChange} defaultValue={values.firstName} label={t("admin.newUser.firstName")} type={"text"} keyWord={"firstName"}/>
                                    </div>
                                    <div className="mb-2">
                                        <FormInput error={errors?.lastName} onChange={handleChange} defaultValue={values.lastName} label={t("admin.newUser.lastName")} type={"text"} keyWord={"lastName"}/>
                                    </div>
                                    <div className="mb-2">
                                        <FormInput error={errors?.email} onChange={handleChange} defaultValue={values.email} label={t("admin.newUser.email")} type={"email"} keyWord={"email"}/>
                                    </div>
                                    <div className="mb-2">
                                        <FormInput error={errors?.phoneNumber} onChange={handleChange} defaultValue={values.phoneNumber} label={t("admin.newUser.phoneNumber")} type={"text"} keyWord={"phoneNumber"}/>
                                    </div>
                                    <div className="mb-2">
                                        <FormInput error={errors?.password} onChange={handleChange} defaultValue={values.password} label={t("admin.newUser.password")} type={"password"} keyWord={"password"}/>
                                    </div>
                                    <div className="mb-2">
                                        <FormSelect
                                            onChange={(key, val) => setRole(val as any)}
                                            options={["admin", "locale", "user"]}
                                            label={t("admin.newUser.status")}
                                            keyWord={"role"}
                                        />
                                    </div>
                                </div>
                                <div className="px-6 d-flex align-items-center justify-content-end">
                                    <button type="submit" className="btn btn-lg btn-primary ml-4 mb-3">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ locale , req}) => {
    const token = req.cookies.token;

    if(token) {
        const decodedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf8'));

        if (decodedToken?.role === "admin") {
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

export default NewUser;
