import {FC} from 'react';
import FormSelect from "../ui/FormSelect";
import FormInput from "../ui/FormInput";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {status, types} from "../../utils/constants/productInfo";
import {StepProps} from "../../pages/admin/add-new-product";

const First: FC<StepProps> = ({setPrdData}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const {t} = useTranslation("common");

    const onChangeType = (key: string, value: string) => {
        const matchingType: typeof LanguagesKeys  = Object.values(types).find((type) =>
            Object.values(type).includes(value)
        ) as typeof LanguagesKeys;

        setPrdData(prev => ({...prev, type: matchingType}))
    }
    const onChangeStatus = (key: string, value: string) => {
        const matchingType: typeof LanguagesKeys  = Object.values(status).find((type) =>
            Object.values(type).includes(value)
        ) as typeof LanguagesKeys;

        setPrdData(prev => ({...prev, status: matchingType}))
    }

    const onChange = (_: string, value: string): void => setPrdData(prev => ({...prev, price: Number(value)}));

    return (
        <div className="tab-pane tab-pane-parent fade px-0 active show" id="description"
             role="tabpanel" aria-labelledby="description-tab">
            <div className="card bg-transparent border-0">
                <div
                    className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                    id="heading-description">
                    <h5 className="mb-0">
                        <button
                            className="btn btn-lg collapse-parent btn-block border shadow-none"
                            data-toggle="false" data-number="1."
                            data-target="#description-collapse" aria-expanded="true"
                            aria-controls="description-collapse">
                            <span className="number">1.</span> Description
                        </button>
                    </h5>
                </div>
                <div id="description-collapse" className="collapse collapsible show"
                     aria-labelledby="heading-description"
                     data-parent="#collapse-tabs-accordion">
                    <div className="card-body py-4 py-md-0 px-0">
                        <div className="row align-items-start">
                            <div className="col-lg-6">
                                <div className="card mb-6">
                                    <div className="card-body p-6">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Select
                                            Category</h3>
                                        <p className="card-text mb-5">Lorem ipsum dolor sit
                                            amet, consectetur
                                            adipiscing elit</p>
                                        <div className="form-row mx-n2">
                                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4">
                                                <FormSelect handleSelect={onChangeType} options={Object.values(types).map(val => val[lang])} label={t("type")} />
                                            </div>
                                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4">
                                                <FormSelect handleSelect={onChangeStatus} options={Object.values(status).map(val => val[lang])} label={t("status")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mb-6">
                                    <div className="card-body p-6">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property
                                            Price</h3>
                                        <p className="card-text mb-5">Lorem ipsum dolor sit
                                            amet, consectetur
                                            adipiscing elit</p>
                                        <div className="form-row mx-n2">
                                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                                <FormInput label={t("price")} type={"number"} onChange={onChange}/>
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
    );
};

export default First;
