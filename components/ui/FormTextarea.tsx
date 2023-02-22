import React, {ChangeEvent, FC, useState} from 'react';

export type FormTextareaProps =  {
    label: string;
    onChange?: (key: string, value: string) => void;
}

const Formtextarea: FC<FormTextareaProps> = ({label, onChange}) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(label.toString().toLowerCase(), event.target.value.toString());
        }
    }

    return (
        <div className="form-group mb-0">
            <label htmlFor="description-01" className="text-heading">{label}</label>
            <textarea value={value} className="form-control border-0" onChange={handleChange}></textarea>
        </div>
    );
};

export default Formtextarea;
