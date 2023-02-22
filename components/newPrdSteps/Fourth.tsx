import {FC} from 'react';
import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import FormCheckbox from "../ui/FormCheckbox";
import {StepProps} from "../../pages/admin/add-new-product";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {buildingTypes} from "../../utils/constants/buildingTypes";

const Fourth: FC<StepProps> = ({setPrdData}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;

    const handleChange = (key: string, value: string | number): void => {
        setPrdData(prev => ({
            ...prev,
            [key]: Number(value),
        }))
    }

    const handleChangeType = (key: string, value: string): void => {

    }

    return (
        <div className="tab-pane tab-pane-parent fade px-0 show active" id="detail" role="tabpanel"
             aria-labelledby="detail-tab">
            <div className="card bg-transparent border-0">
                <div
                    className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                    id="heading-detail">
                    <h5 className="mb-0">
                        <button className="btn btn-block collapse-parent border shadow-none"
                                data-toggle="false" data-number="4."
                                data-target="#detail-collapse" aria-expanded="true"
                                aria-controls="detail-collapse">
                            <span className="number">4.</span> Detail
                        </button>
                    </h5>
                </div>
                <div id="detail-collapse" className="collapse collapsible show"
                     aria-labelledby="heading-detail" data-parent="#collapse-tabs-accordion">
                    <div className="card-body py-4 py-md-0 px-0">
                        <div className="card mb-6">
                            <div className="card-body p-6">
                                <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing
                                    Detail</h3>
                                <p className="card-text mb-5">Lorem ipsum dolor sit amet,
                                    consectetur
                                    adipiscing elit</p>
                                <div className="row align-items-end mb-1">
                                    <div className="col-lg-4">
                                        <FormInput
                                            keyWord={"floorArea"}
                                            type="number"
                                            onChange={handleChange}
                                            label={"Size in MT (only numbers)"}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <FormSelect
                                            handleSelect={handleChange}
                                            options={[...new Array(5)].map((_, index) => index + 1)}
                                            label={"rooms"}
                                            keyWord={"rooms"}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <FormSelect
                                            handleSelect={handleChange}
                                            options={[...new Array(5)].map((_, index) => index + 1)}
                                            label={"baths"}
                                            keyWord={"baths"}
                                        />
                                    </div>
                                </div>
                                <div className="row align-items-end mb-1">
                                    <div className="col-lg-4">
                                        <FormInput
                                            keyWord={"ceilingHeight"}
                                            onChange={handleChange}
                                            label={"Ceiling height (only numbers)"}
                                            type={"number"}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <FormInput
                                            keyWord={"plotArea"}
                                            onChange={handleChange}
                                            label={"Plot Area in MT (only numbers)"}
                                            type={"number"}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <FormInput
                                            keyWord={"currentFloor"}
                                            onChange={handleChange}
                                            label={"Current Floor"}
                                            type={"number"}
                                        />
                                    </div>
                                </div>
                                <div className="row align-items-end mb-1">
                                    <div className="col-lg-4">
                                        <FormInput
                                            keyWord="floorsCount"
                                            onChange={handleChange}
                                            label={"Floors Count (only numbers)"} type={"number"}
                                        />
                                    </div>
                                    <div className="col-lg-4">
                                        <FormSelect
                                            keyWord={"buildingType"}
                                            handleSelect={handleChangeType}
                                            options={buildingTypes[lang]}
                                            label={"buildingType"}
                                        />
                                    </div>
                                </div>
                                <div className="row align-items-end mb-1">
                                    <div className="col-lg-4">
                                        <FormCheckbox label={"newBuilding"}/>
                                    </div>
                                    <div className="col-lg-4">
                                        <FormCheckbox label={"balcony"}/>
                                    </div>
                                </div>
                                <div className="row align-items-end mb-1">
                                    <div className="col-lg-4">
                                        <FormCheckbox label={"elevator"}/>
                                    </div>
                                    <div className="col-lg-4">
                                        <FormCheckbox label={"furniture"}/>
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

export default Fourth;
