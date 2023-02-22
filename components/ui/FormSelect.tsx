import React, {FC, useEffect, useRef, useState} from 'react';
import useClickOutside from "../../utils/hooks/useClickOutside";
import capitalize from "../../utils/helpers/capitalize";

export type FormSelectProps = {
    options: (string | number)[];
    label: string;
    handleSelect?: (key: string, txt: string) => void;
    selected?: string | null;
    keyWord?: string;
}

const FormSelect: FC<FormSelectProps> = ({selected, options, handleSelect, label, keyWord}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
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

    const handleOptionSelect = (option: string): void => {
        setSelectedOption(option);
        setIsOpen(false);

        if (handleSelect) {
            handleSelect(keyWord || label.toString().toLowerCase(), option.toString().toLowerCase());
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
                            <div className="filter-option-inner-inner">{capitalize(selectedOption || label)}</div>
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
                                <li key={index} onClick={() => handleOptionSelect(String(option).toLowerCase())}>
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