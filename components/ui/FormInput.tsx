import {ChangeEvent, FC, useState} from 'react';
import capitalize from "../../utils/helpers/capitalize";

export type FormInputProps = {
    label: string;
    type?: "text" | "input" | "password" | "number";
    onChange?: (key: string, value: string) => void;
    keyWord?: string;
}

const FormInput: FC<FormInputProps> = ({label, onChange, type = "text", keyWord}) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);

        if (onChange) {
            onChange(keyWord || label.toString().toLowerCase(), event.target.value.toString());
        }
    }

    return (
        <div className="form-group mb-0">
            <label htmlFor="before-price" className="text-heading">{capitalize(label)}</label>
            <input value={value} onChange={handleChange} type={type} className="form-control form-control-lg border-0"/>
        </div>
    );
};

export default FormInput;
