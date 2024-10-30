import { LucideUploadCloud } from "lucide-react"

const FileUploader = () => {
    return (
        <label className="oct-file-uploader">
            <input type="file" className="oct-file-uploader__input" />
            <div className="oct-file-uploader__label-wrapper">
                <LucideUploadCloud className="oct-file-uploader__icon" />
                <span className="oct-file-uploader__label">Upload a file or drop it here</span>
            </div>
        </label>
    );
}

export default FileUploader;