import React, {useState} from 'react';
import {NextPage, GetStaticProps} from "next";
import nextI18NextConfig from "../next-i18next.config";
import {sendReport} from '../services/user';
import useForm from '../utils/hooks/useForm';
import Toastify from '../component/ui/Toastify';
import {IReport} from '../utils/types/IReport';
import {validateReport} from "../utils/helpers/validations";
import FormInput from "../component/ui/FormInput";
import FormTextarea from "../component/ui/FormTextarea";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Contactus: NextPage<{}> = () => {
    const [toastify, setToastify] = useState<{ status: "danger" | "info" | "success"; message: string }>({
        status: "info",
        message: ""
    })
    const {values, errors, handleChange, handleSubmit} = useForm<IReport>({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
        },
        validate: validateReport,
        onSubmit
    })

    async function onSubmit() {
        const report = await sendReport(values)
        if (report?.status && report?.status === "error" && report.message) {
            return setToastify({status: "danger", message: report.message})
        }

        setToastify({status: "success", message: "Your report successfully sent."})
    }

    return (
        <>
            {toastify.message.length ?
                <Toastify status={toastify.status} message={toastify.message} setToastify={setToastify}/> : null}
            <section className="pt-16 pb-9" data-animated-id="2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="border-bottom pb-7">
                                <h2 className="text-heading mb-2 fs-22 lh-15 pr-6">For more information about our
                                    services,
                                    get in
                                    touch
                                    with our expert consultants. Were always eager to hear from you!</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <FormInput error={errors?.firstName} type={"text"} keyWord={"firstName"}
                                                           onChange={handleChange} defaultValue={values.firstName}
                                                           placeholder={"First Name"}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <FormInput error={errors?.lastName} type={"text"} keyWord={"lastName"}
                                                           onChange={handleChange} defaultValue={values.lastName}
                                                           placeholder={"Last Name"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <FormInput error={errors?.email} type={"email"} keyWord={"email"}
                                                           onChange={handleChange} defaultValue={values.email}
                                                           placeholder={"Your Email"}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 px-2">
                                            <div className="form-group mb-4">
                                                <FormInput error={errors?.phoneNumber} type={"text"}
                                                           keyWord={"phoneNumber"}
                                                           onChange={handleChange} defaultValue={values.email}
                                                           placeholder={"Phone Number"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-6">
                                        <FormTextarea keyWord={"message"} defaultValue={values.message}
                                                      onChange={handleChange} error={errors.message}
                                                      placeholder={"Message"}/>
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-primary px-9">Submit</button>
                                </form>
                            </div>
                            <div className="row mt-8">
                                <div className="col-md-6 mb-6">
                                    <div className="media">
                                        <span className="fs-32 text-primary mr-4"><i
                                            className="fal fa-phone"></i></span>
                                        <div className="media-body mt-3">
                                            <h4 className="fs-16 lh-2 mb-1 text-dark">Contact</h4>
                                            <div className="row mb-1">
                                                <div className="col-3">
                                                    <span>Office</span>
                                                </div>
                                                <div className="col-9">
                                                    <a href="tel:123-900-68668"
                                                       className="text-heading font-weight-500">123
                                                        900
                                                        68668</a>
                                                </div>
                                            </div>
                                            <div className="row mb-1">
                                                <div className="col-3">
                                                    <span>Mobile</span>
                                                </div>
                                                <div className="col-9">
                                                    <a href="tel:12390068098" className="text-heading font-weight-500">123
                                                        900
                                                        68098</a>
                                                </div>
                                            </div>
                                            <div className="row mb-1">
                                                <div className="col-3">
                                                    <span>Fax</span>
                                                </div>
                                                <div className="col-9">
                                                    <a href="tel:1-3239006800" className="text-heading font-weight-500">1-323
                                                        900
                                                        6800</a>
                                                </div>
                                            </div>
                                            <div className="row mb-1">
                                                <div className="col-3">
                                                    <span>Office</span>
                                                </div>
                                                <div className="col-9">
                                                    <a href="mailto:hello@homeid.com"
                                                       className="text-body">hello@homeid.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-6">
                                    <div className="media">
                                        <span className="fs-32 text-primary mr-4"><i
                                            className="fal fa-clock"></i></span>
                                        <div className="media-body mt-3">
                                            <h4 className="fs-16 lh-2 mb-1 text-dark">Hour of operation</h4>
                                            <div className="row mb-1">
                                                <div className="col-6">
                                                    <span>Monday - Friday:</span>
                                                </div>
                                                <div className="col-6">
                                                    <span>
                                                    09:00 - 20:00
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="row mb-1">
                                                <div className="col-6">
                                                    <span>Sunday &amp; Saturday:</span>
                                                </div>
                                                <div className="col-6">
                                                    <span>
                                                    10:30 - 22:00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export const getStaticProps: GetStaticProps<{}> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(
            locale ?? "am",
            ['common'],
            nextI18NextConfig
        ))
    }
})

export default Contactus;