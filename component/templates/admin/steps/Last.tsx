import React, {FC} from 'react';
import {StepsProps} from "./Steps";
import FormInput from "../../../ui/FormInput";
import {buildingTypes} from "../../../../utils/constants/buildingTypes";
import {useTranslation} from "next-i18next";
import {ITrans, LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";
import FormSelect from "../../../ui/FormSelect";

const Last: FC<StepsProps> = ({setProductFields}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;

    const handleChange = (key: string, value: string | number | boolean): void => {
        setProductFields(prev => ({...prev, [key]: value}))
    }

    const handleChangeType = (key: string, value: string | number | boolean, obj: ITrans):  void => {
        const keyword = Object.keys(obj[lang]).find(key => obj[lang][key] === value.toString());
        if (!keyword) return;

       const options = {
            am: obj["am"][keyword].toString().toLowerCase(),
            en: obj["en"][keyword].toString().toLowerCase(),
            ru: obj["ru"][keyword].toString().toLowerCase(),
        }

        setProductFields(prev => ({...prev, [key]: options}))
    }

    return (
        <div className="tab-pane tab-pane-parent fade px-0 active show" id="detail" role="tabpanel"
             aria-labelledby="detail-tab">
            <div className="card bg-transparent border-0">
                <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                     id="heading-detail">
                    <h5 className="mb-0">
                        <button className="btn btn-block collapse-parent collapsed border shadow-none"
                                data-toggle="collapse" data-number="4."
                                data-target="#detail-collapse" aria-expanded="true"
                                aria-controls="detail-collapse">
                            <span className="number">4.</span> Detail
                        </button>
                    </h5>
                </div>
                <div id="detail-collapse" className="collapse collapsible show"
                     aria-labelledby="heading-detail"
                     data-parent="#collapse-tabs-accordion">
                    <div className="card-body py-4 py-md-0 px-0">
                        <div className="card mb-6">
                            <div className="card-body p-6">
                                <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing
                                    Detail</h3>
                                <p className="card-text mb-5">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit</p>
                                <div className="row align-items-end">
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput label={"Size in Mt (only numbers)"} type={"number"}
                                                       keyWord={"floorArea"}
                                                       onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput label={"Rooms"} type={"number"} keyWord={"rooms"}
                                                       onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput label={"Baths"} type={"number"} keyWord={"baths"}
                                                       onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"ceilingHeight"}
                                                label={"Ceiling height (only numbers)"}
                                                type={"number"}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"plotArea"}
                                                label={"Plot Area in MT (only numbers)"}
                                                type={"number"}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"currentFloor"}
                                                label={"Current Floor (only numbers)"}
                                                type={"number"}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"floorsCount"}
                                                label={"Floors Count (only numbers)"}
                                                type={"number"}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                keyWord={"buildingType"}
                                                options={Object.values(buildingTypes[lang])}
                                                label={"buildingType"}
                                                onChange={(key, val) => handleChangeType(key, val, buildingTypes)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={"New Building"}
                                                keyWord={"newBuilding"}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={"Balcony"}
                                                keyWord={"balcony"}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={"Elevator"}
                                                keyWord={"elevator"}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={"Furniture"}
                                                keyWord={"furniture"}
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

export default Last;