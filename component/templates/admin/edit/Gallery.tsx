import React, {Dispatch, FC, SetStateAction, useRef, useState} from 'react';
import Link from "next/link";
import {IProduct} from "../../../../utils/types/IProduct";
import {API_URL} from "../../../../utils/constants/api";
import {addImg, removeImg} from "../../../../services/admin";
import Toastify from "../../../ui/Toastify";

interface GalleryProps extends IProduct {
    handleClose: () => void;
}

const Gallery: FC<GalleryProps> = ({imageUrl, prdId, handleClose}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [toastify, setToastify] = useState<{status: "danger" | "info" | "success"; message: string;}>({
        status: "info",
        message: ""
    })

    const handleFileInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = new FormData();
        if (event.target.files) {
            data.append("image", event.target.files[0]);
            const dirId = imageUrl[0].replace("/uploads/", "").split("/")[0];
            const updatedPrd = await addImg(data, dirId, prdId);

            if (updatedPrd?.status === "error") {
                return setToastify({status: "success", message: updatedPrd.message});
            }

            setToastify({status: "success", message: "Success"});
            setTimeout(() => handleClose(), 1500);
        }
    };

    const handleRemoveFile = async (imageUrl: string) => {
        const dirId = imageUrl.replace("/uploads/", "").split("/")[0];
        const imgName = imageUrl.replace("/uploads/", "").split("/")[1];
        const updatedPrd = await removeImg(dirId, imgName, prdId);

        if (updatedPrd?.status === "error") {
            return setToastify({status: "success", message: updatedPrd.message});;
        }

        setToastify({status: "success", message: "Success"});
        setTimeout(() => handleClose(), 1500);
    };

    return (
        <>
            {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
            <div className="tab-pane fade show active" id="home" role="tabpanel"
                 aria-labelledby="home-tab">
                <p>Gallery tab content</p>
            </div>
            <div className="row align-items-center flex-wrap">
                {imageUrl.length ? imageUrl.map((img) => (
                    <div
                        key={img}
                        className="d-flex align-items-center justify-content-center flex-column col-auto dz-preview dz-processing dz-error dz-complete dz-image-preview">
                        <div className="dz-image">
                            <div style={{
                                display: "inline-block",
                                background: `url("${API_URL}${img}") center / cover no-repeat`,
                                width: 125,
                                height: 80,
                                content: ""
                            }}/>
                        </div>
                        <Link href="#" onClick={(event) => {
                            event.preventDefault();
                            handleRemoveFile(img);
                        }} className="dz-remove">Remove file</Link>
                    </div>
                )) : null}
                <div className="dz-default dz-message">
                    <label htmlFor={"fileInp"} className="btn btn-indigo px-7 mb-2">
                        Add Image
                    </label>
                    <input
                        id={"fileInp"}
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleFileInput}
                        style={{display: "none"}}
                        ref={fileInputRef}
                    />
                </div>
            </div>
        </>
    );
};

export default Gallery;