import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import capitalize from "../../utils/helpers/capitalize";

interface FormInputProps {
    onChange?: (key: string, value: string | number) => void;
    label?: string;
    type: "text" | "number" | "email" | "password";
    defaultValue?: string | number;
    keyWord: string;
    error?: string;
    disabled?: boolean;
    placeholder?: string;
}

const FormInput: FC<FormInputProps> = ({placeholder, keyWord, type, label, onChange, defaultValue, error, disabled}) => {
    const [value, setValue] = useState<string | number>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.currentTarget.value);

        if (onChange) {
            onChange(keyWord, type === "number" ? Number(event.target.value) : event.target.value);
        }
    }

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [])

    return (
        <div className="form-group mb-0">
            {label ? <label htmlFor="address" className="text-heading">{capitalize(label)}</label>: null}
            <input
                disabled={disabled}
                value={value}
                type={type}
                className="form-control form-control-lg border-0"
                id={keyWord}
                name={keyWord}
                onChange={handleChange}
                min={type === "number" ? 0 : undefined}
                placeholder={placeholder}
            />
            {error ? <p className="form-text">{error}</p> : null}
        </div>
    );
};

export default FormInput;