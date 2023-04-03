import React, {FC} from 'react';
import BgImage from "../../../../assets/images/bg-home-01.jpg";
import Signature from "../../../../assets/images/signature.png"
import {useTranslation} from "next-i18next";
import capitalize from "../../../../utils/helpers/capitalize";
import Link from 'next/link'

const Intro: FC<{}> = () => {
    const { t } = useTranslation('common');

    return (
        <section className="d-flex flex-column" data-animated-id="1">
            <div style={{backgroundImage: `url(${BgImage.src})`, backgroundAttachment: "fixed"}}
                 className="bg-cover d-flex align-items-center custom-vh-100 bg-cover text-center d-flex align-items-center justify-content-center flex-column">
                <p className="fs-md-45 fs-30 text-white font-weight-light mb-0 lh-15 pt-8 zoomIn animated"
                   data-animate="zoomIn">{capitalize(t("home.intro.title"))}</p>
                <h2 className="text-white display-1 lh-1 mb-0 zoomIn animated" data-animate="zoomIn">{capitalize(t("home.intro.subtitle"))}</h2>
                <img src={Signature.src} className="pl-md-17 ml-md-17 mr-md-n8 zoomIn animated" alt="Dream home"/>
                <p className="font-weight-500 text-white fs-15 mb-6 mt-3 pb-1 zoomIn animated"
                   data-animate="zoomIn">{t("home.intro.text")}.</p>
                <Link href="/properties" className="btn btn-lg btn-primary font-weight-600 rounded-lg mb-8 zoomIn animated"
                   data-animate="zoomIn">{capitalize(t("home.intro.btnText"))}<i className="far fa-long-arrow-right ml-2"></i></Link>
            </div>
        </section>
    );
};

export default Intro;