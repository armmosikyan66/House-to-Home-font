import React, {FC, useState} from 'react';
import useForm from "../../../../utils/hooks/useForm";
import {ILogin} from "../../../../utils/types/IAuth";
import {validateLogin} from "../../../../utils/helpers/validations";
import {login} from "../../../../services/auth";
import FormInput from "../../../ui/FormInput";
import Toastify from "../../../ui/Toastify";
import {AuthProps} from "./index";
import {useTypedDispatch} from "../../../../redux/types/IRedux";
import {setUser} from "../../../../redux/actions/user";


const Login: FC<AuthProps> = ({setModal}) => {
    const dispatch = useTypedDispatch();
    const [toastify, setToastify] = useState<{status: "danger" | "info" | "success"; message: string;}>({
        status: "info",
        message: ""
    })
    const {values, errors, handleChange, handleSubmit} = useForm<ILogin>({
        initialValues: {
            email: "",
            password: "",
        },
        validate: validateLogin,
        onSubmit,
    });

    async function onSubmit() {
        const {status, message, user} = await login(values);

        if (status && status === "error" && message) {
            return setToastify({status: "danger", message: message})
        }

        setToastify({status: "success", message: "You successfully logged in"});
        if (user) dispatch(setUser(user));
        setTimeout(() => {
            setModal(false)
        }, 1500);
    }
    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
            <div className="p-1 tab-pane fade show active" id="login" role="tabpanel"
                 aria-labelledby="login-tab">
                <form onSubmit={handleSubmit} className="form">
                    <div className="mb-4">
                        <FormInput error={errors?.email} onChange={handleChange}
                                   defaultValue={values.email} label={"E-mail"} type={"email"}
                                   keyWord={"email"}/>
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
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Log in
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;