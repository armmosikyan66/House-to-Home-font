import React, {FC, useEffect, useRef, useState} from 'react';
import useClickOutside from "../../utils/hooks/useClickOutside";
import capitalize from "../../utils/helpers/capitalize";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {trans} from "../../utils/constants/trans";

export type FormSelectProps = {
    onChange?: (key: string, value: number | boolean | string) => void;
    options: (string | number | boolean)[];
    label: string;
    selected?: number | boolean | string | null;
    keyWord: string;
    keyWordForTranslation?: string,
}

const FormSelect: FC<FormSelectProps> = ({selected, onChange, keyWord, options, label, keyWordForTranslation}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {t, i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    const [sourceLanguage, setSourceLanguage] = useState(lang);
    const [selectedOption, setSelectedOption] = useState<number | boolean | string | null>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    useClickOutside(selectRef, (): void => setIsOpen(false));

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (selected) {
            setSelectedOption(selected);
        }
    }, [selected]);

    useEffect(() => {
        if(selectedOption !== null && keyWordForTranslation) {
            const sourceArray = trans[sourceLanguage][keyWordForTranslation];
            const targetArray = trans[lang][keyWordForTranslation]

            const sourceIndex = sourceArray.findIndex(item => item === selectedOption.toString());
            const translation = targetArray[sourceIndex];
            setSelectedOption(translation);
            setSourceLanguage(lang);
            if (onChange) {
                onChange(keyWord, translation);
            }
        }
    }, [lang])

    const handleOptionSelect = (option: number | boolean | string): void => {
        setSelectedOption(option);
        setIsOpen(false);
        setSourceLanguage(lang);
        if (onChange) {
            onChange(keyWord, option);
        }
    };

    return (
        <div ref={selectRef} className="form-group mb-0">
            <label
                htmlFor="location"
                className="sr-only">{label}</label>
            <div className="dropdown bootstrap-select form-control border-0 shadow-none form-control-lg dropup show">
                <select
                    className="form-control border-0 shadow-none form-control-lg selectpicker" name="location"
                    title="Location"
                    data-style="btn-lg py-2 h-52" id="location">
                    <option className="bs-title-option" value=""></option>
                    {options.length ? options.map((option, index) => (
                        <option key={index}>{option}</option>
                    )) : null}
                </select>
                <button onClick={handleToggle} type="button"
                        className="btn dropdown-toggle btn-lg py-2 h-52 bs-placeholder"
                        data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox"
                        aria-expanded="false" data-id="type" title="All Types">
                    <div className="filter-option">
                        <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">{capitalize(String(selectedOption !== null ? selectedOption : label))}</div>
                        </div>
                    </div>
                </button>
                <div className={`dropdown-menu ${isOpen ? "show" : ""}`}
                     style={{
                         maxHeight: 382,
                         overflow: "hidden",
                         position: "absolute",
                         transform: "translate3d(0px, 52px, 0px)",
                         top: 0,
                         left: 0,
                         willChange: "transform"
                     }}
                     x-placement="bottom-start">
                    <div className="inner show" role="listbox" id="bs-select-1"
                         style={{maxHeight: 350, overflowY: "auto"}}>
                        <ul className="dropdown-menu inner show" role="presentation"
                            style={{marginTop: 0, marginBottom: 0}}>
                            {options.length ? options.map((option, index) => (
                                <li key={index} onClick={() => handleOptionSelect(option)}>
                                    <a role="option" className={`dropdown-item ${option.toString().toLowerCase() === selectedOption ? "active" : ""}`}>
                                        <span className="text">{capitalize(String(option))}</span>
                                    </a>
                                </li>
                            )) : null}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSelect;