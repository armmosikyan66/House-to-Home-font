import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {StepsProps} from "./Steps";

interface ImageFile {
    id: string;
    file: File;
    url: string;
}

interface ImageUploaderProps extends StepsProps {
    onChange?: (files: ImageFile[]) => void;
}

const Second: React.FC<ImageUploaderProps> = ({onChange, setProductFields, productFields}) => {
    const [imageFiles, setImageFiles] = useState<ImageFile[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setProductFields(prev => ({...prev, images: imageFiles.map(img => img.file)}));
    }, [imageFiles]);

    const handleDrop = (event: React.DragEvent<HTMLElement>) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        const newImageFiles = files.map((file) => ({
            id: file.name,
            file,
            url: URL.createObjectURL(file),
        }));
        setImageFiles([...imageFiles, ...newImageFiles]);

        if (onChange) {
            onChange([...imageFiles, ...newImageFiles]);
        }
    };

    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        const newImageFiles = files.map((file) => ({
            id: file.name,
            file,
            url: URL.createObjectURL(file),
        }));
        setImageFiles([...imageFiles, ...newImageFiles]);
        if (onChange) {
            onChange([...imageFiles, ...newImageFiles]);
        }
    };

    const handleDelete = (id: string) => {
        const newImageFiles = imageFiles.filter((file) => file.id !== id);
        setImageFiles(newImageFiles);
        if (onChange) {
            onChange(newImageFiles);
        }
    }

    return (
        <div className="tab-pane tab-pane-parent fade px-0 active show">
            <div className="card bg-transparent border-0">
                <div
                    className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
                    id="heading-media">
                    <h5 className="mb-0">
                        <button
                            className="btn btn-lg collapse-parent btn-block border shadow-none">
                            <span className="number">2.</span> Media
                        </button>
                    </h5>
                </div>
                <div className="collapse collapsible show"
                     aria-labelledby="heading-media" data-parent="#collapse-tabs-accordion">
                    <div className="card-body py-4 py-md-0 px-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card mb-6">
                                    <div className="card-body p-6">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Upload
                                            photos
                                            of your property</h3>
                                        <p className="card-text mb-5">Lorem ipsum dolor sit
                                            amet, consectetur
                                            adipiscing elit</p>
                                        <div
                                            onDrop={handleDrop}
                                            onDragOver={(event) => event.preventDefault()}
                                            className="dropzone upload-file text-center py-5 dz-clickable">
                                            {imageFiles.length ? imageFiles.map((file) => (
                                                <div
                                                    key={file.id}
                                                    className="dz-preview dz-processing dz-error dz-complete dz-image-preview">
                                                    <div className="dz-image">
                                                        <img src={file.url}/>
                                                    </div>
                                                    <div className="dz-details">
                                                        <div className="dz-size">
                                                            <span><strong>{Math.ceil(file.file.size / 1024)}</strong> KB</span>
                                                        </div>
                                                        <div className="dz-filename"></div>
                                                    </div>
                                                    <Link href="#" onClick={(event) => {
                                                        event.preventDefault();
                                                        handleDelete(file.id);
                                                    }} className="dz-remove">Remove file</Link>
                                                </div>
                                            )) : (
                                                <div className="dz-default dz-message">
                                                <span
                                                    className="upload-icon lh-1 d-inline-block mb-4">
                                                    <i className="fal fa-cloud-upload-alt"></i></span>
                                                    <p className="text-heading fs-22 lh-15 mb-4">Drag
                                                        and drop image
                                                        or</p>
                                                    <label htmlFor={"fileInp"} className="btn btn-indigo px-7 mb-2">
                                                        Browse file
                                                    </label>
                                                    <input
                                                        id={"fileInp"}
                                                        type="file"
                                                        hidden
                                                        accept="image/*"
                                                        multiple
                                                        onChange={handleFileInput}
                                                        style={{display: "none"}}
                                                        ref={fileInputRef}
                                                    />
                                                    <p>Photos must be JPEG, PNG or JPG format and</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;