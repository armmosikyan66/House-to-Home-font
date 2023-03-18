import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import FormInput from "../../../ui/FormInput";
import useForm from "../../../../utils/hooks/useForm";
import {IRegister} from "../../../../utils/types/IAuth";
import {validateRegister} from "../../../../utils/helpers/validations";
import {register} from "../../../../services/auth";
import Toastify from "../../../ui/Toastify";

export type RegisterType = {
    setSelected: Dispatch<SetStateAction<"login" | 'register'>>
}

const Register: FC<RegisterType> = ({setSelected}) => {
    const [toastify, setToastify] = useState<{ status: "danger" | "info" | "success"; message: string; }>({
        status: "info",
        message: ""
    })
    const {values, errors, handleChange, handleSubmit} = useForm<IRegister>({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            password: "",
        },
        validate: validateRegister,
        onSubmit,
    });

    async function onSubmit() {
        const user = await register(values);

        if (user?.status && user?.status === "error" && user.message) {
            return setToastify({status: "danger", message: user.message})
        }

        setToastify({status: "success", message: "You successfully create account"});
        setTimeout(() => {
            setSelected("login");
        }, 1500)
    }

    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
            <div className="p-1 tab-pane fade active show overflow-auto" id="register" role="tabpanel" aria-labelledby="register-tab">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-4">
                        <FormInput error={errors?.firstName} onChange={handleChange}
                                   defaultValue={values.firstName} label={"First Name"} type={"text"}
                                   keyWord={"firstName"}/>
                    </div>
                    <div className="mb-4">
                        <FormInput error={errors?.lastName} onChange={handleChange}
                                   defaultValue={values.lastName} label={"Last Name"} type={"text"}
                                   keyWord={"lastName"}/>
                    </div>
                    <div className="mb-4">
                        <FormInput error={errors?.email} onChange={handleChange}
                                   defaultValue={values.email} label={"E-mail"} type={"email"}
                                   keyWord={"email"}/>
                    </div>
                    <div className="mb-4">
                        <FormInput error={errors?.phoneNumber} onChange={handleChange}
                                   defaultValue={values.phoneNumber} label={"Phone Number"} type={"text"}
                                   keyWord={"phoneNumber"}/>
                    </div>
                    <div className="mb-4">
                        <FormInput error={errors?.password} onChange={handleChange}
                                   defaultValue={values.password} label={"Password"}
                                   type={"password"} keyWord={"password"}/>
                    </div>
                    <div className="d-flex mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""
                                   id="remember-me" name="remember-me"/>
                            <label className="form-check-label" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;