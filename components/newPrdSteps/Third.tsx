import {FC, useState} from 'react';
import FormSelect from "../ui/FormSelect";
import Formtextarea from "../ui/FormTextarea";
import {StepProps} from "../../pages/admin/add-new-product";
import {cities} from "../../utils/constants/cities";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {regions} from "../../utils/constants/regions";

const Third: FC<StepProps> = ({setPrdData}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [isCitySelected, setIsCitySelected] = useState<string>("");

    const handleChange = (key: string, value: string): void => {
        setPrdData(prev => ({...prev, address: value}));
    }

    const handleChangeCity = (key: string, value: string): void => {
        const foundedIndex = cities[lang].map(el => el.toLowerCase()).indexOf(value);
        const option = {
            am: cities["am"][foundedIndex].toLowerCase(),
            en: cities["en"][foundedIndex].toLowerCase(),
            ru: cities["ru"][foundedIndex].toLowerCase(),
        }
        setPrdData(prev => {
            setIsCitySelected(value.toLowerCase());
            return ({...prev, city: option})
        })
    }

    const handleChangeRegion = (key: string, value: string): void => {
        const regIdx = regions[lang][isCitySelected].map(el => el.toLowerCase()).indexOf(value);
        const cityIdx = cities[lang].map(el => el.toLowerCase()).indexOf(isCitySelected);

        const option = {
            am: regions["am"][cities["am"][cityIdx].toLowerCase()][regIdx].toLowerCase(),
            en: regions["en"][cities["en"][cityIdx].toLowerCase()][regIdx].toLowerCase(),
            ru: regions["ru"][cities["ru"][cityIdx].toLowerCase()][regIdx].toLowerCase(),
        }

        setPrdData(prev => ({...prev, region: option}))
    }

    return (
        <div className="show active  tab-pane tab-pane-parent fade px-0" id="location" role="tabpanel"
             aria-labelledby="location-tab">
            <div className="card bg-transparent border-0">
                <div
                    className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                    id="heading-location">
                    <h5 className="mb-0">
                        <button className="btn btn-block collapse-parent border shadow-none"
                                data-toggle="false" data-number="3."
                                data-target="#location-collapse" aria-expanded="true"
                                aria-controls="location-collapse">
                            <span className="number">3.</span> Location
                        </button>
                    </h5>
                </div>
                <div id="location-collapse" className="collapse collapsible show"
                     aria-labelledby="heading-location" data-parent="#collapse-tabs-accordion">
                    <div className="card-body py-4 py-md-0 px-0">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="card mb-6">
                                    <div className="card-body p-6">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Listing
                                            Location</h3>
                                        <p className="card-text mb-5">Lorem ipsum dolor sit
                                            amet, consectetur
                                            adipiscing elit</p>
                                        <div className="form-row mx-n2">
                                            <div className="mb-4 col-md-6 col-lg-12 col-xxl-6 px-2">
                                                <FormSelect
                                                    handleSelect={handleChangeCity}
                                                    options={cities[lang]}
                                                    label={"Cities"}
                                                />
                                            </div>
                                            {isCitySelected.length ? (
                                                <div className="mb-4 col-md-6 col-lg-12 col-xxl-6 px-2">
                                                    <FormSelect
                                                        handleSelect={handleChangeRegion}
                                                        options={regions[lang][isCitySelected]}
                                                        label={"Region"}
                                                    />
                                                </div>
                                            ) : null}
                                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                                <Formtextarea onChange={handleChange} label={"Address"}/>
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

export default Third;
