import { LucideUploadCloud } from "lucide-react"
import React from "react";
import {useDropzone} from 'react-dropzone';

import "./FileUploader.css";

interface FileUploaderProps {
    label: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onUploadFiles?: (files: File[]) => void;
}

const handleDrop = (cb: (files: File[]) => void) => (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    cb(acceptedFiles);
}

const FileUploader:React.FC<FileUploaderProps> = ({ label, size = "medium", disabled = false, onUploadFiles = () => {} }) => {
    const {getRootProps, getInputProps} = useDropzone({
        disabled,
        onDrop: handleDrop(onUploadFiles)
    });

    return (
        <label {...getRootProps({ className: `oct-file-uploader oct-file-uploader--${size}` })}>
            <input type="file" {...getInputProps({ className: "oct-file-uploader__input" })} />
            <div className="oct-file-uploader__wrapper">
                <LucideUploadCloud className="oct-file-uploader__icon" />
                <span className="oct-file-uploader__label">{label}</span>
            </div>
        </label>
    );
}

export default FileUploader;