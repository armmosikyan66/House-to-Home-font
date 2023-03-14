import React, {FC, useState, FormEvent} from 'react';
import FormSelect from "../../../ui/FormSelect";
import {LanguagesKeys} from "../../../../utils/types/ILanguagesKeys";
import {useTranslation} from "next-i18next";
import {cities} from "../../../../utils/constants/cities";
import {status, types} from "../../../../utils/constants/productInfo";
import FormInput from "../../../ui/FormInput";
import {IFilter} from "../../../../utils/types/IFilter";
import {regions} from "../../../../utils/constants/regions";
import {useRouter} from "next/router";
import {encodeQueryString} from "../../../../utils/helpers/queryString";

const Filter: FC<{}> = () => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [filter, setFilter] = useState<IFilter>({} as IFilter);
    const router = useRouter();

    const handleChange = (key: string, val: number | string | boolean): void => {
        setFilter(prev => ({
            ...prev,
            [key]: val,
        }))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const queryString = encodeQueryString<any>(filter);
        router.push(router.pathname + queryString);
    }

    return (
        <div className="col-lg-4 order-2 order-lg-1 primary-sidebar sidebar-sticky" id="sidebar">
            <div className="primary-sidebar-inner" style={{position: "sticky", left: "auto", width: 370}}>
                <div className="card mb-4">
                    <div className="card-body px-6 py-4">
                        <h4 className="card-title fs-16 lh-2 text-dark mb-3">Find your home</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="key-word" className="sr-only">Key Word</label>
                                <input type="text"
                                       className="form-control form-control-lg border-0 shadow-none"
                                       id="key-word" placeholder="Enter keyword..."/>
                            </div>
                            <div className="mb-2">
                                <FormSelect
                                    options={Object.values(cities[lang])}
                                    label={"Cities"}
                                    keyWord={"city"}
                                    onChange={handleChange}
                                />
                            </div>
                            {"city" in filter ? (
                                <div className="mb-2">
                                    <FormSelect
                                        options={Object.values(regions[lang][filter.city.toLowerCase()])}
                                        label={"Regions"}
                                        keyWord={"region"}
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : null}
                            <div className="mb-2">
                                <FormSelect
                                    options={Object.values(types[lang])}
                                    label={"Category"}
                                    keyWord={"type"}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-2">
                                <FormSelect
                                    //onChange={(key, val) => handleChange(key, val, status)}
                                    options={Object.values(status[lang])}
                                    label={"Status"}
                                    keyWord={"status"}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-row mb-2">
                                <div className="col">
                                    <FormSelect
                                        options={Array.from({length: 5}, (_, i) => i + 1)}
                                        label={"Rooms"}
                                        keyWord={"rooms"}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <FormSelect
                                        options={Array.from({length: 5}, (_, i) => i + 1)}
                                        label={"Baths"}
                                        keyWord={"baths"}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <FormInput
                                        //onChange={handleChange}
                                        label={"Area Size"}
                                        type={"number"}
                                        keyWord={"areaSize"}
                                        defaultValue={0}
                                    />
                                </div>
                                <div className="col">
                                    <FormInput
                                        //onChange={handleChange}
                                        label={"Price"}
                                        type={"number"}
                                        keyWord={"price"}
                                        defaultValue={Infinity}
                                    />
                                </div>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary btn-lg btn-block shadow-none mt-4">Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;