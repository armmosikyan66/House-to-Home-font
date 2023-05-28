import {ILogin, IRegister} from "../types/IAuth";
import {FormErrors} from "../hooks/useForm";
import {IReport} from "../types/IReport";

export const validateLogin =  (values: ILogin) => {
    let errors: FormErrors<ILogin> = {};

    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailRegex.test(values.email)) {
        errors.email = 'Email is invalid';
    }

    // Validate password minimum length
    if (values.password && values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    return errors;
};

export const validateReport = (values: IReport) => {
    let errors: FormErrors<IReport> = {};

    if (!values.firstName) errors.firstName = 'First Name is required';
    if (!values.lastName) errors.lastName = 'Last Name is required';
    if (!values.email) errors.email = 'Email is required';
    if (!values.phoneNumber) errors.phoneNumber = 'Phone is required';
    if(!values.message) errors.message = "Message is required"

    if (values.firstName && values.firstName.length < 3) {
        errors.firstName = 'First Name must be at least 3 characters long';
    }

    if (values.lastName && values.lastName.length < 3) {
        errors.lastName = 'Last Name must be at least 3 characters long';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (values.email && !emailRegex.test(values.email)) {
        errors.email = 'Email is invalid';
    }
    const phoneRegex = /^[0-9\-\+]{9,15}$/;
    if (values.phoneNumber && !phoneRegex.test(values.phoneNumber)) {
        errors.phoneNumber = 'Phone is invalid';
    }
    if(values.message && values.message.length < 20) {
        errors.message = "Your message must be at least 20 characters long";
    }

    return errors;
}

export const validateRegister =  (values: IRegister) => {
    let errors: FormErrors<IRegister> = {};

    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';
    if (!values.firstName) errors.firstName = 'First Name is required';
    if (!values.lastName) errors.lastName = 'Last Name is required';
    if (!values.phoneNumber) errors.phoneNumber = 'Phone is required';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailRegex.test(values.email)) {
        errors.email = 'Email is invalid';
    }
    // Validate email format
    const phoneRegex = /^[0-9\-\+]{9,15}$/;
    if (values.phoneNumber && !phoneRegex.test(values.phoneNumber)) {
        errors.email = 'Phone is invalid';
    }

    // Validate password minimum length
    if (values.password && values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    // Validate password minimum length
    if (values.firstName && values.firstName.length < 3) {
        errors.firstName = 'First Name must be at least 3 characters long';
    }
    // Validate password minimum length
    if (values.lastName && values.lastName.length < 3) {
        errors.lastName = 'Last Name must be at least 3 characters long';
    }

    return errors;
};