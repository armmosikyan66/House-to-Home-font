import React, {Dispatch, SetStateAction, useState, MouseEvent} from 'react';
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import First from "../../components/newPrdSteps/First";
import Second from "../../components/newPrdSteps/Second";
import Third from "../../components/newPrdSteps/Third";
import Fourth from "../../components/newPrdSteps/Fourth";
import {INewProduct} from "../../utils/types/INewProduct";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Link from "next/link";
/*
    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('file', file);

* */

export type StepProps = {
    setPrdData: Dispatch<SetStateAction<INewProduct>>;
}

const AddNewProduct: NextPage<{}> = () => {
    const [prdData, setPrdData] = useState<INewProduct>({} as INewProduct);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const steps = [First, Second, Third, Fourth];
    const CurrentStep = steps[currentStep];

    console.log(prdData)
    const handleChangeStep = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
        event.preventDefault();
        if (event.currentTarget.id === "plus") {
            return setCurrentStep(prev => prev + 1);
        }

        setCurrentStep(prev => prev - 1);
    }

    return (
        <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 my-profile" data-animated-id="1">
                <div className="mb-6">
                    <h2 className="mb-0 text-heading fs-22 lh-15">Add new property
                    </h2>
                    <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                </div>
                <div className="collapse-tabs new-property-step">
                    <ul className="nav nav-pills border py-2 px-3 mb-6 d-none d-md-flex mb-6" role="tablist">
                        <li className="nav-item col">
                            <a className={`nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block ${currentStep >= 0 ? "active" : ""}`}><span
                                className="number">1.</span> Description</a>
                        </li>
                        <li className="nav-item col">
                            <a className={`nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block ${currentStep >= 1 ? "active" : ""}`}><span
                                className="number">2.</span> Media</a>
                        </li>
                        <li className="nav-item col">
                            <a className={`nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block ${currentStep >= 2 ? "active" : ""}`}><span
                                className="number">3.</span> Location</a>
                        </li>
                        <li className="nav-item col">
                            <a className={`nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block ${currentStep >= 3 ? "active" : ""}`}><span
                                className="number">4.</span> Detail</a>
                        </li>
                    </ul>
                    <div className="tab-content shadow-none p-0">
                        <form>
                            <div id="collapse-tabs-accordion">
                                <CurrentStep setPrdData={setPrdData}/>
                                <div className="d-flex flex-wrap">
                                    {currentStep > 0 ? <Link onClick={handleChangeStep} id="minus" href="#"
                                           className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                                        <span className="d-inline-block text-primary mr-2 fs-16">
                                        <AiOutlineArrowLeft fill={"#0ec6d5"} className="fal fa-long-arrow-left"/></span>Prev
                                        step
                                    </Link> : null}
                                    {currentStep < steps.length ? <button onClick={handleChangeStep} id="plus"
                                             className="btn btn-lg btn-primary next-button mb-3">Next
                                        step
                                        <span className="d-inline-block ml-2 fs-16"><AiOutlineArrowRight
                                            fill={"#fff"} className="fal fa-long-arrow-right"/></span>
                                    </button> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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


export default AddNewProduct;
