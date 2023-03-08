import React from 'react';
import {FC} from "react";
import {IUser} from "../../../utils/types/IUser";
import FormInput from "../../ui/FormInput";
import FormSelect from "../../ui/FormSelect";

const UserModal: FC<IUser> = ({role, id, firstName, email, lastName, phoneNumber}) => {
    return (
        <>
            <div className="modal-backdrop fade show"></div>

            <div style={{display: "block"}} className="modal fade show bd-example-modal-lg " id="exampleModal"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">user Modal</h5>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                               <div className="col-6 mb-2">
                                   <FormInput defaultValue={firstName} disabled={true} label={"First Name"} type={"text"} keyWord={"firstName"} />
                               </div>
                               <div className="col-6 mb-2">
                                   <FormInput defaultValue={lastName} disabled={true} label={"Last Name"} type={"text"} keyWord={"lastName"} />
                               </div>
                               <div className="col-6 mb-2">
                                   <FormInput defaultValue={email} disabled={true} label={"E-mail"} type={"email"} keyWord={"email"} />
                               </div>
                               <div className="col-6 mb-2">
                                   <FormInput defaultValue={phoneNumber} disabled={true} label={"Phone Number"} type={"text"} keyWord={"phoneNumber"} />
                               </div>
                               <div className="col-6">
                                   <FormSelect selected={role} options={["admin", "locale", "user"]} label={"Status"} keyWord={"role"} />
                               </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                document.body.style.overflow = "auto";
                            }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserModal;