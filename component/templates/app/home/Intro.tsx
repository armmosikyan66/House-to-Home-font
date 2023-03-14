import React, {FC} from 'react';
import BgImage from "../../../../assets/images/bg-home-01.jpg";
import Signature from "../../../../assets/images/signature.png"

const Intro: FC<{}> = () => {
    return (
        <section className="d-flex flex-column" data-animated-id="1">
            <div style={{backgroundImage: `url(${BgImage.src})`, backgroundAttachment: "fixed"}}
                 className="bg-cover d-flex align-items-center custom-vh-100 bg-cover text-center d-flex align-items-center justify-content-center flex-column">
                <p className="fs-md-45 fs-30 text-white font-weight-light mb-0 lh-15 pt-8 zoomIn animated"
                   data-animate="zoomIn">Find your</p>
                <h2 className="text-white display-1 lh-1 mb-0 zoomIn animated" data-animate="zoomIn">Dream home</h2>
                <img src={Signature.src} className="pl-md-17 ml-md-17 mr-md-n8 zoomIn animated" alt="Dream home"/>
                <p className="font-weight-500 text-white fs-15 mb-6 mt-3 pb-1 zoomIn animated"
                   data-animate="zoomIn">Than 10,000 customers buy or sell a home with us each year.</p>
                <a href="#" className="btn btn-lg btn-primary font-weight-600 rounded-lg mb-8 zoomIn animated"
                   data-animate="zoomIn">Find out more<i className="far fa-long-arrow-right ml-2"></i></a>
            </div>
        </section>
    );
};

export default Intro;