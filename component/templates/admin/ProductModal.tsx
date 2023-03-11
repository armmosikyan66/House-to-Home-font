import React, {FC, useState} from 'react';
import {IProduct} from "../../../utils/types/IProduct";
import Info from "./edit/Info";
import Gallery from "./edit/Gallery";
import { Admin } from '.';

interface ProductModalProps {
    handleClose: () => void;
    open: boolean;
    selected: IProduct | null
}

const ProductModal: FC<ProductModalProps> = ({handleClose, open, selected}) => {
    const [step, setStep] = useState<"info" | "gallery">("info");

    return (
        <>
            <Admin.Modal handleClose={handleClose} size={"xl"} open={open}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal with tabs</h5>
                    <button onClick={handleClose} type="button" className="close m-0 fs-23 p-0" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button onClick={() => setStep("info")} className={`nav-link ${step === "info" ? "active" : null}`} id="home-tab" data-bs-toggle="tab"
                                    data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                    aria-selected="true">Info
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={() => setStep("gallery")} className={`nav-link  ${step === "gallery" ? "active" : null}`} id="profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                    aria-selected="false">Gallery
                            </button>
                        </li>
                    </ul>
                    {selected ? <div className="tab-content mt-3">
                        {step === "info" ? <Info handleClose={handleClose}  {...selected} /> : null}
                        {step === "gallery" ? <Gallery handleClose={handleClose} {...selected}/> : null}
                    </div> : null}
                </div>
            </Admin.Modal>
        </>
    );
};

export default ProductModal;