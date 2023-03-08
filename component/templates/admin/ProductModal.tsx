import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {IProduct} from "../../../utils/types/IProduct";
import Info from "./edit/Info";
import Gallery from "./edit/Gallery";

interface ProductModalProps extends IProduct {
    setSelected: Dispatch<SetStateAction<IProduct | null>>
}

const ProductModal: FC<ProductModalProps> = ({setSelected, ...props}) => {
    const [step, setStep] = useState<"info" | "gallery">("info");

    return (
        <>
            <div className="modal-backdrop fade show"></div>

            <div style={{display: "block"}} className="modal fade show bd-example-modal-xl " id="exampleModal" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog  modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal with tabs</h5>
                            <button onClick={() => {
                                setSelected(null);
                                document.body.style.overflow = "auto";
                            }} type="button" className="close m-0 fs-23 p-0" data-dismiss="modal" aria-label="Close">
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
                            <div className="tab-content mt-3">
                                {step === "info" ? <Info setSelected={setSelected}  {...props} /> : null}
                                {step === "gallery" ? <Gallery setSelected={setSelected} {...props}/>: null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductModal;