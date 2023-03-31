import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';

export type ToastiyProps = {
    status: "danger" | "info" | "success";
    message: string;
    setToastify: Dispatch<SetStateAction<{status: "danger" | "info" | "success"; message: string;}>>
}

const Toastify: FC<ToastiyProps> = ({status = "info", message, setToastify}) => {
    useEffect(() => {
        setTimeout(() => {
            setToastify({status: "info", message: ""})
        }, 1500)
    }, [])

    return (
        <>
            <div className={`z-index-10 d-flex align-items-center position-fixed pos-fixed-bottom-right mr-5 alert alert-${status} alert-solid`} role="alert">
                <p className="p-0 m-0">{message}!</p>

                <button onClick={() => setToastify({status: "info", message: ""})} className="ml-2 close text-white" type="button" data-dismiss="alert" aria-label="Close"><span
                    aria-hidden="true">×</span></button>
            </div>
        </>
    );
};

export default Toastify;