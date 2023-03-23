import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

const Contactus: NextPage<{}> = () => {
    return (
        <section className="pt-16 pb-9" data-animated-id="2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="border-bottom pb-7">
                            <h2 className="text-heading mb-2 fs-22 lh-15 pr-6">For more information about our services,
                                get in
                                touch
                                with our expert consultants. We're always eager to hear from you!</h2>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscorem ipsum dolor
                                sit
                                ametcipsu
                            </p>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <input type="text" placeholder="First Name"
                                                   className="form-control form-control-lg border-0" name="first-name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <input type="text" placeholder="Last Name" name="last-name"
                                                   className="form-control form-control-lg border-0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-4">
                                            <input placeholder="Your Email"
                                                   className="form-control form-control-lg border-0" type="email"
                                                   name="email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-2">
                                        <div className="form-group mb-4">
                                            <input type="text" placeholder="Your Phone" name="phone"
                                                   className="form-control form-control-lg border-0"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className="form-control border-0" placeholder="Message" name="message"
                                              ></textarea>
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary px-9">Submit</button>
                            </form>
                        </div>
                        <div className="row mt-8">
                            <div className="col-md-6 mb-6">
                                <div className="media">
                                    <span className="fs-32 text-primary mr-4"><i className="fal fa-phone"></i></span>
                                    <div className="media-body mt-3">
                                        <h4 className="fs-16 lh-2 mb-1 text-dark">Contact</h4>
                                        <div className="row mb-1">
                                            <div className="col-3">
                                                <span>Office</span>
                                            </div>
                                            <div className="col-9">
                                                <a href="tel:123-900-68668" className="text-heading font-weight-500">123
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
                                    <span className="fs-32 text-primary mr-4"><i className="fal fa-clock"></i></span>
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

export default Contactus;