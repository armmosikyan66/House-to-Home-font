import React, {useState, MouseEvent, useEffect, Dispatch, SetStateAction, FC} from 'react';
import Login from "./Login";
import Register from './Register';

export type AuthProps = {
    setModal: Dispatch<SetStateAction<boolean>>
}

const Index: FC<AuthProps> = ({setModal}) => {
    const [selected, setSelected] = useState<"login" | 'register'>("login");

    const handleChange =  (event: MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        setSelected(event.currentTarget.id as "login" | 'register');
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <>
            <div className='modal fade login-register login-register-modal show opacity-10 d-block'>
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered mxw-571">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-0">
                            <div className="nav nav-tabs row w-100 no-gutters" id="myTab" role="tablist">
                                <a onClick={handleChange} className={`nav-item col-sm-3 ml-0 nav-link pr-6 py-4 pl-9 ${selected === "login" ? "active" : ""} fs-18`}
                                   id="login"href="#login">Login</a>
                                <a onClick={handleChange} className={`nav-item col-sm-3 ml-0 nav-link py-4 px-6 fs-18  ${selected !== "login" ? "active" : ""}`} id="register" href="#register">Register</a>
                                <div className={`nav-item col-sm-6 ml-0 d-flex align-items-center justify-content-end`}>
                                    <button onClick={() => setModal(false)} type="button" className="close m-0 fs-23" data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body p-4 py-sm-7 px-sm-8">
                            <div className="tab-content shadow-none p-0">
                                {selected === "login" ? <Login setModal={setModal}/> : <Register setSelected={setSelected}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default Index;