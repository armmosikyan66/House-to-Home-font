import React, {FC, useEffect, useState} from 'react';
import {StepsProps} from "./Steps";
import FormSelect from "../../../ui/FormSelect";
import {cities} from "../../../../utils/constants/cities";
import {useTranslation} from "next-i18next";
import {IRegions, ITrans, LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";
import FormTextarea from "../../../ui/FormTextarea";
import {regions} from "../../../../utils/constants/regions";

export type PropertyTypes = {
    am: string;
    en: string;
    ru: string;
}

const Third: FC<StepsProps> = ({setProductFields, productFields}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [selectedCity, setSelectedCity] = useState<string>("");

    const handleChange = (key: string, value: boolean | string | number, obj: ITrans | IRegions): void => {
        let options: PropertyTypes = {} as PropertyTypes;

        if (Object.values(obj[lang]).some(el => !Array.isArray(el))) {
            const keyword = Object.keys(obj[lang]).find(key => obj[lang][key] === value.toString());
            if (!keyword) return;

            options = {
                am: obj["am"][keyword].toString().toLowerCase(),
                en: obj["en"][keyword].toString().toLowerCase(),
                ru: obj["ru"][keyword].toString().toLowerCase(),
            }
            setSelectedCity(options.en);
        } else {
            const idx: number = obj[lang][selectedCity].indexOf(String(value));

            options = {
                am: obj["am"][selectedCity][idx].toString().toLowerCase(),
                en: obj["en"][selectedCity][idx].toString().toLowerCase(),
                ru: obj["ru"][selectedCity][idx].toString().toLowerCase(),
            }
        }

        setProductFields(prev => ({
            ...prev,
            [key.toLowerCase()]: options,
        }))
    }

    useEffect(() => {
        if ("city" in productFields) {
            setSelectedCity(productFields.city.en)
        }
    }, [])

    return (
        <div className="tab-pane tab-pane-parent fade px-0 active show" id="location" role="tabpanel"
             aria-labelledby="location-tab">
            <div className="card bg-transparent border-0">
                <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                     id="heading-location">
                    <h5 className="mb-0">
                        <button className="btn btn-block collapse-parent collapsed border shadow-none"
                                data-toggle="collapse" data-number="3."
                                data-target="#location-collapse" aria-expanded="true"
                                aria-controls="location-collapse">
                            <span className="number">3.</span> Location
                        </button>
                    </h5>
                </div>
                <div id="location-collapse" className="collapse collapsible show"
                     aria-labelledby="heading-location"
                     data-parent="#collapse-tabs-accordion">
                    <div className="card-body py-4 py-md-0 px-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="card mb-6">
                                    <div className="card-body p-6">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">
                                            Listing
                                            Location</h3>
                                        <p className="card-text mb-5">Lorem ipsum dolor sit
                                            amet, consectetur
                                            adipiscing elit</p>
                                        <div className="mb-2">
                                            <FormSelect
                                                options={Object.values(cities[lang])}
                                                label={"Cities"}
                                                keyWord={"city"}
                                                onChange={(key, val) => handleChange(key, val, cities)}
                                                selected={selectedCity}
                                            />
                                        </div>
                                        {selectedCity ? (
                                            <div className="mb-2">
                                                <FormSelect
                                                    options={regions[lang][selectedCity]}
                                                    label={"Region"}
                                                    keyWord={"region"}
                                                    onChange={(key, val) => handleChange(key, val, regions)}
                                                    selected={productFields.region ? productFields.region[lang] : undefined}
                                                />
                                            </div>
                                        ) : null}
                                        <div className="">
                                            <FormTextarea
                                                onChange={(key, val) => setProductFields(prev => ({...prev, [key]: val}))}
                                                label={"Address"}
                                                keyWord={"address"}
                                                rows={5}
                                                defaultValue={productFields?.address ? productFields?.address : undefined}
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
    );
};

export default Third;