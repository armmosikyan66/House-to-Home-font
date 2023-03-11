import React, {useState} from 'react';
import {FC} from "react";
import {IUser} from "../../../utils/types/IUser";
import FormInput from "../../ui/FormInput";
import FormSelect from "../../ui/FormSelect";
import {updateUser} from "../../../services/admin";
import {Admin} from "./index";
import Toastify from "../../ui/Toastify";

interface UserModalProps {
    handleClose: () => void;
    open: boolean;
    selected: IUser | null;
}


const UserModal: FC<UserModalProps> = ({handleClose, open, selected}) => {
    const [userRole, setUserRole] = useState<"admin" | "locale" | "user">(selected?.role ? selected?.role : "user");
    const [toastify, setToastify] = useState<{status: "danger" | "info" | "success"; message: string;}>({
        status: "info",
        message: ""
    })

    const handleSubmit = async () => {
        if (!selected?.id) return;

        const updatedUser = await updateUser(userRole, selected?.id);


        if ("status" in updatedUser && updatedUser?.status === "error") {
            return setToastify({status: "success", message: updatedUser.message});;
        }

        setToastify({status: "success", message: "Success"});
        setTimeout(() => handleClose(), 1500);
    }

    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
            <Admin.Modal handleClose={handleClose} size={"lg"} open={open}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal with tabs</h5>
                    <button onClick={handleClose} type="button" className="close m-0 fs-23 p-0" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                {selected && open ? <div className="modal-body">
                    <div className="row">
                        <div className="col-6 mb-2">
                            <FormInput defaultValue={selected?.firstName} disabled={true} label={"First Name"}
                                       type={"text"}
                                       keyWord={"firstName"}/>
                        </div>
                        <div className="col-6 mb-2">
                            <FormInput defaultValue={selected?.lastName} disabled={true} label={"Last Name"}
                                       type={"text"}
                                       keyWord={"lastName"}/>
                        </div>
                        <div className="col-6 mb-2">
                            <FormInput defaultValue={selected?.email} disabled={true} label={"E-mail"} type={"email"}
                                       keyWord={"email"}/>
                        </div>
                        <div className="col-6 mb-2">
                            <FormInput defaultValue={selected?.phoneNumber} disabled={true} label={"Phone Number"}
                                       type={"text"}
                                       keyWord={"phoneNumber"}/>
                        </div>
                        <div className="col-6">
                            <FormSelect onChange={(key, val) => setUserRole(val as "admin" | "locale" | "user")}
                                        selected={userRole} options={["admin", "locale", "user"]} label={"Status"}
                                        keyWord={"role"}/>
                        </div>
                    </div>
                </div> : null}
                <div className="modal-footer">
                    <button onClick={handleClose} type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal">Close
                    </button>
                    <button onClick={handleSubmit} type="button" className="btn btn-primary">Save changes</button>
                </div>
            </Admin.Modal>
        </>
    );
};

export default UserModal;