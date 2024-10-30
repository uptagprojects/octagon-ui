import React, { ReactEventHandler, useEffect, useRef } from "react";
import "./Modal.css";
import Button from "../button/Button";
import Card from "../card/Card";
import CardFooter from "../card/CardFooter";
import CardHeader, { CardHeaderProps } from "../card/CardHeader";

interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
    header: CardHeaderProps,
    children: React.ReactNode;
    open: boolean;
    actionLabel?: string;
    closeLabel?: string;
    onAction: () => void;
    onClose: () => void;
}

const fn = () => {}
const Modal:React.FC<ModalProps> = ({ header, className, children, open, actionLabel, closeLabel="Close", onAction=fn, onClose=fn, ...props }) => {
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
            <Card hover={false} className="oct-modal__container">
                {header && <CardHeader {...header} />}
                {children}
                <CardFooter>
                    <Button size="small" variant={actionLabel ? "tertiary" : "secondary"} label={closeLabel} onClick={() => onClose()} />
                    {actionLabel && (<Button size="small" variant="secondary" label={actionLabel} onClick={() => onAction()} />) }
                </CardFooter>
            </Card>
        </dialog>
    );
}

export default Modal;