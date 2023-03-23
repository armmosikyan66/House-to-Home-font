import IntroBlock from "./Intro";
import Recommended from "./Recommended";
import PropertyTypes from "./PropertyTypes";
import AboutBlock from "./About";
import {useTranslation} from "next-i18next";

export namespace Home {
    export const Intro = () => {
        return <IntroBlock/>
    };
    export const ForSale = () => {
        const { t } = useTranslation('common')
        return <Recommended title={t("home.recommended.titleForSale")} status={"sale"}/>
    };

    export const ForRent = () => {
        const { t } = useTranslation('common')
        return <Recommended status={"rent"} title={t("home.recommended.titleForRent")}/>
    };
    export const PropTypes = () => {
        return <PropertyTypes/>
    };
    export const About = () => {
        return <AboutBlock/>
    };
}