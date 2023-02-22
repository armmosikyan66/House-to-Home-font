import React, {ChangeEvent, FC, useState} from 'react';

export type FormCheckbox = {
    label: string;
    onChange?: (key: string, value: boolean) => void;
}

const Formcheckbox: FC<FormCheckbox> = ({label, onChange}) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);

        if (onChange) {
            onChange(label.toString().toLowerCase(), event.target.checked);
        }
    }

    return (
        <li className="list-group-item px-0 p-0 border-0">
            <div className="custom-control custom-checkbox">
                <input checked={checked} onChange={handleChange} type="checkbox" className="custom-control-input"/>
                <label className="custom-control-label" htmlFor="attic">{label}</label>
            </div>
        </li>
    );
};

export default Formcheckbox;
