import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    //creating an error for a null image
    const[error, setError] = useState(null);

    //setting the file data
    const [file,setFile] = useState(null);

    //setting our array for allowed image types
    const types=['image/png','image/jpeg']

    //onChange (or when a file is staged for posting) we gather the image data and check that is an allowed image type
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        //checking for image and taking the selected image data
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please select an image file. (png or jpeg.)')

        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {error && <div className="error"> {error}</div> }
                {file && <div>{file.name}</div> }
                {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;