import { LucideX } from "lucide-react";
import "./Alert.css";

export type AlertProps = {
    title: string;
    message: string;
    type?: "info" | "success" | "warning" | "error";
    onClose?: () => void;
}

/**
 * An alert component that can be used to display messages to the user.
 * The button to close the alert uses aria-label for screen readers.
 * https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html
 **/

const Alert: React.FC<AlertProps> = ({ title, message, type="info", onClose }) => {
    return (
        <details className={`oct-alert oct-alert--${type}`}>
            <summary className="oct-alert__summary">
                {title}
                <button aria-label="close this alert" className="oct-alert__close_button" onClick={onClose}><LucideX size={16} aria-hidden={true} /></button>
            </summary>
            {message.split("\n").map((line, index) => (
                <p key={index} className="oct-alert__message">{line}</p>
            ))}
        </details>
    );
}

export default Alert;