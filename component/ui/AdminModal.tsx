import React, {FC, ReactNode, useEffect} from 'react';

export type AdminModalProps = {
    open?: boolean;
    handleClose?: () => void;
    size?: "lg" | "sm" | "xl";
    children: ReactNode;
}

const AdminModal: FC<AdminModalProps> = ({size, children, open, handleClose}) => {

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open])

    return (
        <>
            {open ? (
                <>
                    <div onClick={handleClose} className={`modal-backdrop fade ${open ? "show" : ""}`}></div>

                    <div style={{display: "block"}} className={`modal fade ${open ? "show" : ""}`}>
                        <div className={`modal-dialog modal-dialog-scrollable ${size ? "modal-" + size : ""}`}>
                            <div className="modal-content">
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>

    );
};

export default AdminModal;