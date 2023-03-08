import {FormEvent, useState} from "react";

type FormValues = Record<string, string>;

export type FormErrors<T extends FormValues> = Partial<Record<keyof T, string>>;

type UseFormProps<T extends FormValues> = {
    initialValues: T;
    validate: (values: T) => FormErrors<T>;
    onSubmit: (values: T) => void;
};

const useForm = <T extends FormValues>({initialValues, validate, onSubmit}: UseFormProps<T>) => {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<FormErrors<T>>({});

    const handleChange = (key: string, value: string | number) => {
        setValues({ ...values, [key]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(() => validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(values);
        }
    };

    return { values, errors, handleChange, handleSubmit };
};

export default useForm;