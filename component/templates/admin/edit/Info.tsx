import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import FormTextarea from "../../../ui/FormTextarea";
import {IRegions, ITrans, LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";
import {PropertyTypes} from "../steps/Third";
import {IProduct} from "../../../../utils/types/IProduct";
import {useTranslation} from "next-i18next";
import {types, status} from "../../../../utils/constants/productInfo";
import FormSelect from "../../../ui/FormSelect";
import {cities} from "../../../../utils/constants/cities";
import {regions} from "../../../../utils/constants/regions";
import FormInput from "../../../ui/FormInput";
import {buildingTypes} from "../../../../utils/constants/buildingTypes";
import {updatePrd} from "../../../../services/admin";

interface InfoModalProps extends IProduct {
    setSelected: Dispatch<SetStateAction<IProduct | null>>
}

const Info: FC<InfoModalProps> = ({setSelected, ...props}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [updatesPrd, setUpdatedPrd] = useState<IProduct>({} as IProduct);
    const [selectedCity, setSelectedCity] = useState<string>("");

    useEffect(() => {
        setSelectedCity(props.city.en);
    }, [props.city])

    const handleChangeTypes = (key: string, value: boolean | string | number, obj: ITrans | IRegions): void => {
        let options: PropertyTypes = {} as PropertyTypes;

        if (Object.values(obj[lang]).some(el => !Array.isArray(el))) {
            const keyword = Object.keys(obj[lang]).find(key => obj[lang][key] === value.toString());
            if (!keyword) return;

            options = {
                am: obj["am"][keyword].toString().toLowerCase(),
                en: obj["en"][keyword].toString().toLowerCase(),
                ru: obj["ru"][keyword].toString().toLowerCase(),
            }

            if (keyword === "city")
                setSelectedCity(options.en);
        } else {
            const idx: number = obj[lang][selectedCity].indexOf(String(value));

            options = {
                am: obj["am"][selectedCity][idx].toString().toLowerCase(),
                en: obj["en"][selectedCity][idx].toString().toLowerCase(),
                ru: obj["ru"][selectedCity][idx].toString().toLowerCase(),
            }
        }

        setUpdatedPrd(prev => ({
            ...prev,
            [key.toLowerCase()]: options,
        }))
    }

    const handleChange = (key: string, values: number | string | boolean): void => setUpdatedPrd(prev => ({...prev, [key]: values}));

    const handleSubmit = async () => {
        const newPrd = await updatePrd(updatesPrd, props.prdId);

        if (newPrd?.status === "error") return;

        setSelected(newPrd)
    }

    return (
        <>
            <div className="tab-pane fade show active" id="home" role="tabpanel"
                 aria-labelledby="home-tab">
                <p>Info tab content</p>
            </div>
            <div className="row align-items-end">
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Category</label>
                        <FormSelect
                            onChange={(key, val) => handleChangeTypes(key, val, types)}
                            options={Object.values(types[lang])}
                            label={"Category"}
                            keyWord={"type"}
                            selected={props.type[lang]}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Status</label>
                        <FormSelect
                            onChange={(key, val) => handleChangeTypes(key, val, status)}
                            options={Object.values(status[lang])}
                            label={"Status"}
                            keyWord={"status"}
                            selected={props.status[lang]}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Cities</label>
                        <FormSelect
                            options={Object.values(cities[lang])}
                            label={"Cities"}
                            keyWord={"city"}
                            selected={props.city[lang]}
                            onChange={(key, val) => handleChangeTypes(key, val, cities)}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Region</label>
                        <FormSelect
                            options={regions[lang][!selectedCity.length ? props.city.en : selectedCity]}
                            selected={!selectedCity.length ? props.city[lang] : selectedCity}
                            label={"Region"}
                            keyWord={"region"}
                            onChange={(key, val) => handleChangeTypes(key, val, regions)}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Public</label>
                        <FormSelect
                            onChange={handleChange}
                            selected={props.public}
                            options={[true, false]}
                            label={"Public"}
                            keyWord={"public"}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <FormInput
                            defaultValue={props.floorArea}
                            label={"Size in Mt (only numbers)"} type={"number"}
                            keyWord={"floorArea"}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <FormInput
                            defaultValue={props.price}
                            label={"Price (only numbers)"} type={"number"}
                            keyWord={"price"}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <FormInput
                            defaultValue={props.rooms}
                            label={"Rooms"} type={"number"} keyWord={"rooms"}
                            onChange={handleChange}/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <FormInput
                            defaultValue={props.baths}
                            label={"Baths"} type={"number"} keyWord={"baths"}
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
                            defaultValue={props.ceilingHeight}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <FormInput
                            defaultValue={props.plotArea}
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
                            defaultValue={props.currentFloor}
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
                            defaultValue={props.floorsCount}
                            keyWord={"floorsCount"}
                            label={"Floors Count (only numbers)"}
                            type={"number"}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Building Type</label>
                        <FormSelect
                            keyWord={"buildingType"}
                            options={Object.values(buildingTypes[lang])}
                            label={"Building Type"}
                            selected={props.buildingType ? props.buildingType[lang] : undefined}
                            onChange={(key, val) => handleChangeTypes(key, val, buildingTypes)}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">New Building</label>
                        <FormSelect
                            selected={props.newBuilding}
                            options={[true, false]}
                            label={"New Building"}
                            keyWord={"newBuilding"}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Balcony</label>
                        <FormSelect
                            selected={props.balcony}
                            onChange={handleChange}
                            options={[true, false]}
                            label={"Balcony"}
                            keyWord={"balcony"}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Elevator</label>
                        <FormSelect
                            selected={props.elevator}
                            onChange={handleChange}
                            options={[true, false]}
                            label={"Elevator"}
                            keyWord={"elevator"}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-2">
                        <label className="text-heading">Furniture</label>
                        <FormSelect
                            selected={props.furniture}
                            onChange={handleChange}
                            options={[true, false]}
                            label={"Furniture"}
                            keyWord={"furniture"}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="mb-2">
                        <FormTextarea
                            defaultValue={props.address}
                            onChange={handleChange}
                            label={"Address"}
                            keyWord={"address"}
                            rows={5}
                        />
                    </div>
                </div>
            </div>
            <div className="modal-footer pb-0">
                <button onClick={() => {
                    setSelected(null);
                    document.body.style.overflow = "auto";
                }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
            </div>
        </>
    );
};

export default Info;