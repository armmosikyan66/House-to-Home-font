import React, {FC} from 'react';
import FormSelect from "../../../ui/FormSelect";
import {StepsProps} from "./Steps";
import {status, types} from "../../../../utils/constants/productInfo";
import {useTranslation} from "next-i18next";
import {ITrans, LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";

const First: FC<StepsProps> = ({setProductFields, productFields}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;

    const handleChange = (key: string, value: boolean | string | number, obj: ITrans): void => {
        const keyword = Object.keys(obj[lang]).find(key => obj[lang][key] === value.toString());

        if (!keyword) return;

        const options = {
            am: obj["am"][keyword].toLowerCase(),
            en: obj["en"][keyword].toLowerCase(),
            ru: obj["ru"][keyword].toLowerCase(),
        }

        setProductFields(prev => ({
            ...prev,
            [key.toLowerCase()]: options,
        }))
    }

    return (
        <div className="tab-content shadow-none p-0">
            <form>
                <div id="collapse-tabs-accordion">
                    <div className="tab-pane tab-pane-parent fade show active px-0" id="description"
                         role="tabpanel" aria-labelledby="description-tab">
                        <div className="card bg-transparent border-0">
                            <div
                                className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                                id="heading-description">
                                <h5 className="mb-0">
                                    <button
                                        className="btn btn-lg collapse-parent btn-block border shadow-none"
                                        data-toggle="collapse" data-number="1."
                                        data-target="#description-collapse" aria-expanded="true"
                                        aria-controls="description-collapse">
                                        <span className="number">1.</span> Description
                                    </button>
                                </h5>
                            </div>
                            <div id="description-collapse" className="collapse show collapsible"
                                 aria-labelledby="heading-description"
                                 data-parent="#collapse-tabs-accordion">
                                <div className="card-body py-4 py-md-0 px-0">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="card mb-6">
                                                <div className="card-body p-6">
                                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">
                                                        Property
                                                        Type</h3>
                                                    <p className="card-text mb-5">Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit</p>
                                                    <div className="mb-4">
                                                        <FormSelect
                                                            onChange={(key, val) => handleChange(key, val, types)}
                                                            options={Object.values(types[lang])}
                                                            label={"Category"}
                                                            keyWord={"type"}
                                                            selected={productFields?.type ? productFields?.type[lang] : undefined}
                                                        />
                                                    </div>
                                                    <div className="">
                                                        <FormSelect
                                                            onChange={(key, val) => setProductFields(prev => ({
                                                                ...prev,
                                                                [key]: val
                                                            }))}
                                                            options={[true, false]}
                                                            label={"Public"}
                                                            keyWord={"public"}
                                                            selected={productFields?.public ? productFields?.public : undefined}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-6">
                                                <div className="card-body p-6">
                                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">
                                                        Select
                                                        Category</h3>
                                                    <p className="card-text mb-5">Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit</p>
                                                    <div className="form-row mx-n2">
                                                        <div
                                                            className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4 mb-md-0">
                                                            <FormSelect
                                                                onChange={(key, val) => handleChange(key, val, status)}
                                                                options={Object.values(status[lang])}
                                                                label={"Category"}
                                                                keyWord={"status"}
                                                                selected={productFields?.status ? productFields?.status[lang] : undefined}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default First;