import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    ViberShareButton,
    TwitterIcon, TelegramIcon, WhatsappIcon, FacebookIcon, ViberIcon
} from "react-share";
import {FiLink} from 'react-icons/fi';
import Toastify from './Toastify';
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {useTranslation} from "next-i18next";

export type ShareProps = {
    setModal: Dispatch<SetStateAction<boolean>>
    propertyId?: number | null
}

const ShareModal: FC<ShareProps> = ({setModal, propertyId}) => {
    const {i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys
    const [url, setUrl] = useState(window.location.origin);
    const [toastify, setToastify] = useState<{status: "danger" | "info" | "success", message: string}>({
        status: "info",
        message: ""
    })

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        return setToastify({status: "success", message: "Link successfully copied"})
    }

    useEffect(() => {
        setUrl(`${url}/${lang}/properties/${propertyId}`)
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return (
        <>
            <div className='modal fade login-register login-register-modal show opacity-10 d-block position-fixed p-5'>
                {toastify.message.length ? <Toastify setToastify={setToastify} status={toastify.status} message={toastify.message}/> : null}
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered mxw-571">
                    <div className="modal-content">
                        <div className="modal-header border-0 p-0">
                            <div className="d-block d-xl-none row border-bottom w-100 border-bottom-2 no-gutters d-flex align-items-center justify-content-between">
                                <h2 className="fs-24 mb-0 font-weight-600 ml-3">Share</h2>
                                <div
                                    className="nav-item col-sm-6 w-auto ml-0 bg-white mr-3">
                                    <button onClick={() => setModal(false)} type='button' className='close m-0 fs-23' data-dismiss="modal"
                                            aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                            </div>
                            <div className="d-none d-xl-block w-100">
                                <div className="row border-bottom w-100 border-bottom-2 no-gutters d-flex align-items-center justify-content-around">
                                    <h2 className="fs-24 mb-0 font-weight-600">Share</h2>
                                    <div
                                        className="nav-item col-sm-6 ml-0 d-flex align-items-center justify-content-end bg-white">
                                        <button onClick={() => setModal(false)} type='button' className='close m-0 fs-23' data-dismiss="modal"
                                                aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-body p-4 py-sm-7 px-sm-8">
                            <div className="tab-content shadow-none p-0">
                                <div className="tab-content shadow-none p-0">
                                    <p className='fs-16 fa-weight-600'>Share this link via</p>
                                    <div className="d-flex justify-content-between">
                                        <FacebookShareButton url={url}>
                                            <FacebookIcon borderRadius={50} size={50}/>
                                        </FacebookShareButton>
                                        <TwitterShareButton url={url}>
                                            <TwitterIcon borderRadius={50} size={50}/>
                                        </TwitterShareButton>
                                        <WhatsappShareButton url={url}>
                                            <WhatsappIcon borderRadius={50} size={50}/>
                                        </WhatsappShareButton>
                                        <TelegramShareButton url={url}>
                                            <TelegramIcon borderRadius={50} size={50}/>
                                        </TelegramShareButton>
                                        <ViberShareButton url={url}>
                                            <ViberIcon borderRadius={50} size={50}/>
                                        </ViberShareButton>
                                    </div>
                                    <p className='fs-16 fa-weight-600 mt-3'>Or Copy link</p>
                                    <div className="input-group input-group-lg mb-6 d-flex align-items-center">
                                        <FiLink size={30} className="pr-1"/>
                                        <input type="email" name="email" value={url} disabled={true}
                                               className="form-control bg-white shadow-none border-1 z-index-1"/>
                                        <div className="input-group-append">
                                            <button onClick={copyToClipboard} className="btn btn-primary" type="submit">Copy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
};

export default ShareModal;