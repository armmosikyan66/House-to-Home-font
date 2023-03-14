import React, {FC} from 'react';

const About: FC<{}> = () => {
    return (
        <section className="bg-single-image-02 bg-accent py-lg-13 py-11" data-animated-id="12">
            <div className="container">
                <div className="row">
                    <div className="col-ld-6 col-sm-7 fadeInLeft animated" data-animate="fadeInLeft">
                        <div className="pl-6 border-4x border-left border-primary">
                            <h2 className="text-heading lh-15 fs-md-32 fs-25">For more information about our
                                services,<span className="text-primary"> get in touch</span> with our expert consultants
                            </h2>
                            <p className="lh-2 fs-md-15 mb-0">10 new offers every day. 350 offers on site, Trusted by a
                                community of thousands of users.</p>
                        </div>
                    </div>
                    <div className="col-ld-6 col-sm-5 text-center mt-sm-0 mt-8 fadeInRight animated"
                         data-animate="fadeInRight">
                        <i className="fal fa-phone fs-40 text-primary"></i>
                        <p className="fs-13 font-weight-500 letter-spacing-173 text-uppercase lh-2 mt-3">Call for help
                            now!</p>
                        <p className="fs-md-42 fs-32 font-weight-600 text-secondary lh-1">1900 68668</p>
                        <a href="#" className="btn btn-lg btn-primary mt-2 px-10">Contact us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;