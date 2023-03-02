import React, {Dispatch, FC, SetStateAction, useState, MouseEvent} from 'react';
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Last from "./Last";
import {IProduct} from "../../../../utils/types/IProduct";
import {createPrd} from "../../../../services/product";

export type StepsProps = {
    setProductFields: Dispatch<SetStateAction<IProduct>>;
    productFields: IProduct
}

const Steps: FC<{}> = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const steps = [First, Second, Third, Last];
    const Step = steps[currentStep];
    const [productFields, setProductFields] = useState<IProduct>({} as IProduct);

    const handleChangeStep = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
        event.preventDefault();

        if (event.currentTarget.id === "plus") {
            return setCurrentStep(prev => prev + 1);
        }

        setCurrentStep(prev => prev - 1);
    }

    const handleSubmit = async (): Promise<void> => {
        const data = new FormData();

        Object.entries(productFields).forEach(([key, value]) => {
            if (key === "images") {
                for (let i = 0; i < value.length; i++) {
                    data.append("images", value[i])
                }
            } else {
                data.append(key, JSON.stringify(value));
            }
        })

        const prd = await createPrd(data);
        console.log(prd)
    }

    return (
        <main id="content" className="bg-gray-01">
            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10 my-profile">
                <div className="mb-6">
                    <h2 className="mb-0 text-heading fs-22 lh-15">Add new property
                    </h2>
                    <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                </div>
                <div className="collapse-tabs new-property-step">
                    <ul className="nav nav-pills border py-2 px-3 mb-6 d-none d-md-flex mb-6" role="tablist">
                        <li className={`nav-item col`}>
                            <a className={`nav-link ${currentStep >= 0 ? "active" : ""} bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block`}><span
                                className="number">1.</span> Description</a>
                        </li>
                        <li className={`nav-item col`}>
                            <a className={`nav-link bg-transparent ${currentStep >= 1 ? "active" : ""} shadow-none py-2 font-weight-500 text-center lh-214 d-block`}><span className="number">2.</span> Media</a>
                        </li>
                        <li className={`nav-item col ${currentStep >= 2 ? "active" : ""}`}>
                            <a className={`nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block ${currentStep >= 2 ? "active" : ""}`}><span className="number">3.</span>
                                Location</a>
                        </li>
                        <li className={`nav-item col`}>
                            <a className={`nav-link bg-transparent shadow-none py-2 font-weight-500 text-center lh-214 d-block ${currentStep === steps.length - 1 ? "active" : ""}`}><span className="number">4.</span>
                                Detail</a>
                        </li>
                    </ul>
                    <Step setProductFields={setProductFields} productFields={productFields}/>
                    <div className={`d-flex flex-wrap ${currentStep === 0 ? "justify-content-end" : "justify-content-between"}`}>
                        {currentStep ? (
                            <a onClick={handleChangeStep} href="#"
                               className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                                                            <span className="d-inline-block text-primary mr-2 fs-16"><i
                                                                className="fal fa-long-arrow-left"></i></span>Prev step
                            </a>
                        ) : null}
                        {currentStep < (steps.length - 1) ? (
                            <button id={"plus"} onClick={handleChangeStep}
                                    className="btn btn-lg btn-primary next-button mb-3">Next
                                step
                                <span className="d-inline-block ml-2 fs-16"><i
                                    className="fal fa-long-arrow-right"></i></span>
                            </button>
                        ) : (
                            <button id={"plus"} onClick={handleSubmit}
                                    className="btn btn-lg btn-primary next-button mb-3">
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Steps;