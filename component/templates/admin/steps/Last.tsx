import React, {FC} from 'react';
import {StepsProps} from "./Steps";
import FormInput from "../../../ui/FormInput";
import {buildingTypes} from "../../../../utils/constants/buildingTypes";
import {useTranslation} from "next-i18next";
import {ITrans, LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";
import FormSelect from "../../../ui/FormSelect";

const Last: FC<StepsProps> = ({setProductFields, productFields}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const {t} = useTranslation();

    const handleChange = (key: string, value: string | number | boolean): void => {
        setProductFields(prev => ({...prev, [key]: value}))
    }

    const handleChangeType = (key: string, value: string | number | boolean, obj: ITrans): void => {
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
                            <span className="number">4.</span> {t("admin.newPrd.steps.detail")}
                        </button>
                    </h5>
                </div>
                <div id="detail-collapse" className="collapse collapsible show"
                     aria-labelledby="heading-detail"
                     data-parent="#collapse-tabs-accordion">
                    <div className="card-body py-4 py-md-0 px-0">
                        <div className="card mb-6">
                            <div className="card-body p-6">
                                <h3 className="card-title mb-0 text-heading fs-22 lh-15">{t("admin.newPrd.fourth_step.title")}</h3>
                                <p className="card-text mb-5">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit</p>
                                <div className="row align-items-end">
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                label={t("admin.newPrd.fourth_step.size")}
                                                type={"number"}
                                                keyWord={"floorArea"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.floorArea ? productFields?.floorArea : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                label={t("admin.newPrd.fourth_step.price")}
                                                type={"number"}
                                                keyWord={"price"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.price ? productFields?.price : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                label={t("admin.newPrd.fourth_step.rooms")}
                                                type={"number"}
                                                keyWord={"rooms"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.rooms ? productFields?.rooms : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                label={t("admin.newPrd.fourth_step.baths")}
                                                type={"number"}
                                                keyWord={"baths"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.baths ? productFields?.baths : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"ceilingHeight"}
                                                label={t("admin.newPrd.fourth_step.ceiling_height")}
                                                type={"number"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.ceilingHeight ? productFields?.ceilingHeight : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"plotArea"}
                                                label={t("admin.newPrd.fourth_step.plot_area")}
                                                type={"number"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.plotArea ? productFields?.plotArea : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"currentFloor"}
                                                label={t("admin.newPrd.fourth_step.current_floor")}
                                                type={"number"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.currentFloor ? productFields?.currentFloor : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormInput
                                                keyWord={"floorsCount"}
                                                label={t("admin.newPrd.fourth_step.floors_count")}
                                                type={"number"}
                                                onChange={handleChange}
                                                defaultValue={productFields?.floorsCount ? productFields?.floorsCount : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                keyWord={"buildingType"}
                                                options={Object.values(buildingTypes[lang])}
                                                label={t("admin.newPrd.fourth_step.building_type")}
                                                onChange={(key, val) => handleChangeType(key, val, buildingTypes)}
                                                selected={productFields?.buildingType ? productFields?.buildingType[lang] : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={t("admin.newPrd.fourth_step.newBuilding")}
                                                keyWord={"newBuilding"}
                                                selected={productFields?.newBuilding ? productFields?.newBuilding : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={t("admin.newPrd.fourth_step.balcony")}
                                                keyWord={"balcony"}
                                                selected={productFields?.balcony ? productFields?.balcony : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={t("admin.newPrd.fourth_step.elevator")}
                                                keyWord={"elevator"}
                                                selected={productFields?.elevator ? productFields?.elevator : undefined}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="mb-2">
                                            <FormSelect
                                                onChange={handleChange}
                                                options={[true, false]}
                                                label={t("admin.newPrd.fourth_step.furniture")}
                                                keyWord={"furniture"}
                                                selected={productFields?.furniture ? productFields?.furniture : undefined}
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