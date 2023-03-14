import IntroBlock from "./Intro";
import Recommended from "./Recommended";
import PropertyTypes from "./PropertyTypes";
import AboutBlock from "./About";

export namespace Home {
    export const Intro = () => {
        return <IntroBlock/>
    };
    export const ForSale = () => {
        return <Recommended title={"Best Properties For Sale"} status={"sale"}/>
    };

    export const ForRent = () => {
        return <Recommended status={"rent"} title={"Best Properties For Rent"}/>
    };
    export const PropTypes = () => {
        return <PropertyTypes/>
    };
    export const About = () => {
        return <AboutBlock/>
    };
}