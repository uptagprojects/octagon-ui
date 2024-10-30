import React, { ReactEventHandler, useEffect, useRef } from "react";
import "./Modal.css";
import Button from "../button/Button";

interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
    children: React.ReactNode;
    open: boolean;
    actionLabel?: string;
    closeLabel?: string;
    onAction: () => void;
    onClose: () => void;
}

const fn = () => {}
const Modal:React.FC<ModalProps> = ({ className, children, open, actionLabel, closeLabel="Close", onAction=fn, onClose=fn, ...props }) => {
    let ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (open) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [open]);

    return (
        <dialog {...props} ref={ref} className={`oct-modal ${className ?? ''}`} onCancel={onClose}>
            <div className="oct-modal__container">
                <div className="oct-modal__content">
                    {children}
                </div>
                <div className="oct-modal__button-group">
                    <Button size="small" variant={actionLabel ? "tertiary" : "secondary"} label={closeLabel} onClick={() => onClose()} />
                    {actionLabel && (<Button size="small" variant="secondary" label={actionLabel} onClick={() => onAction()} />) }
                </div>
            </div>
        </dialog>
    );
}

export default Modal;