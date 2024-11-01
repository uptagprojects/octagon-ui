import { FC } from "react";
import "./Spinner.css";

const Spinner: FC = () => (
    <div className="oct-spinner" aria-busy="true" aria-live="polite" />
)

export default Spinner;