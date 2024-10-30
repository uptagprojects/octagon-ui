import React, { ReactEventHandler, useEffect, useRef } from "react";
import "./Dialog.css";
import Button from "../button/Button";

interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
    children: React.ReactNode;
    open: boolean;
    actionLabel?: string;
    closeLabel?: string;
    onAction: () => void;
    onClose: () => void;
}

const fn = () => {}
const Dialog:React.FC<DialogProps> = ({ className, children, open, actionLabel, closeLabel="Close", onAction=fn, onClose=fn, ...props }) => {

    return (
        <dialog {...props} open={open} className={`oct-dialog ${className ?? ''}`}>
            <div className="oct-dialog__container">
                <div className="oct-dialog__content">
                    {children}
                </div>
                <div className="oct-dialog__button-group">
                    <Button variant={actionLabel ? "tertiary" : "secondary"} label={closeLabel} onClick={() => onClose()} />
                    {actionLabel && (<Button variant="secondary" label={actionLabel} onClick={() => onAction()} />) }
                </div>
            </div>
        </dialog>
    );
}

export default Dialog;