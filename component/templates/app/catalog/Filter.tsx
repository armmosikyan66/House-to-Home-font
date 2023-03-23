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
import capitalize from "../../../../utils/helpers/capitalize";

const Filter: FC<{}> = () => {
    const {i18n} = useTranslation();
    const {t} = useTranslation("common");
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [filter, setFilter] = useState<IFilter>({} as IFilter);
    const [selectedCity, setSelectedCity] = useState<string>("")
    const router = useRouter();

    const handleChange = (key: string, val: number | string | boolean): void => {
        if (key === "city") {
            const keyword = Object.keys(cities[lang]).find(key => cities[lang][key] === val.toString());

            if (!keyword) return;

            setSelectedCity(cities["en"][keyword])
        }

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
            <div className="primary-sidebar-inner">
                <div className="card mb-4">
                    <div className="card-body px-6 py-4">
                        <h4 className="card-title fs-16 lh-2 text-dark mb-3">{t("catalog.filter.title")}</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <FormSelect
                                    options={Object.values(cities[lang])}
                                    label={t("catalog.filter.city")}
                                    keyWord={"city"}
                                    onChange={handleChange}
                                />
                            </div>
                            {"city" in filter ? (
                                <div className="mb-2">
                                    <FormSelect
                                        options={Object.values(regions[lang][selectedCity.toLowerCase()])}
                                        label={t("catalog.filter.city")}
                                        keyWord={"region"}
                                        onChange={handleChange}
                                    />
                                </div>
                            ) : null}
                            <div className="mb-2">
                                <FormSelect
                                    options={Object.values(types[lang])}
                                    label={t("catalog.filter.region")}
                                    keyWord={"type"}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-2">
                                <FormSelect
                                    options={Object.values(status[lang])}
                                    label={t("catalog.filter.status")}
                                    keyWord={"status"}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-row mb-2">
                                <div className="col">
                                    <FormSelect
                                        options={Array.from({length: 5}, (_, i) => i + 1)}
                                        label={t("catalog.filter.rooms")}
                                        keyWord={"rooms"}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col">
                                    <FormSelect
                                        options={Array.from({length: 5}, (_, i) => i + 1)}
                                        label={t("catalog.filter.baths")}
                                        keyWord={"baths"}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <label htmlFor="address" className="text-heading">{capitalize(t("catalog.filter.areaSize"))}</label>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <FormInput
                                        placeholder={t("catalog.filter.from") as string}
                                        onChange={(key, value) => setFilter(prev => ({
                                            ...prev,
                                            areaSize: {
                                                ...prev.areaSize,
                                                [key]: value
                                            },
                                        }))}
                                        type={"number"}
                                        keyWord={"from"}
                                        defaultValue={0}
                                    />
                                </div>
                                <div className="col">
                                    <FormInput
                                        onChange={(key, value) => setFilter(prev => ({
                                            ...prev,
                                            areaSize: {
                                                ...prev.areaSize,
                                                [key]: value
                                            },
                                        }))}
                                        placeholder={t("catalog.filter.to") as string}
                                        type={"number"}
                                        keyWord={"to"}
                                        defaultValue={Infinity}
                                    />
                                </div>
                            </div>
                            <label htmlFor="address" className="text-heading">{capitalize(t("catalog.filter.price"))}</label>
                            <div className="form-row mb-4">
                                <div className="col">
                                    <FormInput
                                        placeholder={t("catalog.filter.from") as string}
                                        onChange={(key, value) => setFilter(prev => ({
                                            ...prev,
                                            price: {
                                                ...prev.price,
                                                [key]: value
                                            },
                                        }))}
                                        type={"number"}
                                        keyWord={"from"}
                                        defaultValue={0}
                                    />
                                </div>
                                <div className="col">
                                    <FormInput
                                        onChange={(key, value) => setFilter(prev => ({
                                            ...prev,
                                            price: {
                                                ...prev.price,
                                                [key]: value
                                            },
                                        }))}
                                        placeholder={t("catalog.filter.to") as string}
                                        type={"number"}
                                        keyWord={"to"}
                                        defaultValue={Infinity}
                                    />
                                </div>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary btn-lg btn-block shadow-none mt-4">
                                {capitalize(t("catalog.filter.search"))}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;