import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import capitalize from "../../utils/helpers/capitalize";

interface FormTextProps {
    onChange?: (key: string, value: string | number) => void;
    label?: any;
    defaultValue?: string | number;
    keyWord: string;
    rows?: number;
    error?: string;
    placeholder?: string;
}

const FormTextarea: FC<FormTextProps> = ({rows, label, defaultValue, keyWord , onChange, placeholder, error}) => {
    const [value, setValue] = useState<string | number>("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setValue(event.currentTarget.value);

        if (onChange) {
            onChange(keyWord, event.target.value);
        }
    }

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [])
    return (
        <div className="form-group mb-0">
            {label ? <label htmlFor="description-01" className="text-heading">{capitalize(label)}</label> : null}
            <textarea
                value={value}
                onChange={handleChange}
                className="form-control border-0"
                rows={rows}
                name={keyWord}
                placeholder={placeholder}
                id={keyWord}></textarea>
            {error ? <p className="form-text">{error}</p> : null}
        </div>
    );
};

export default FormTextarea;