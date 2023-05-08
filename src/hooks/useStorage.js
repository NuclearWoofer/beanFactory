import {useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(()=> {
        //references
        //giving the file within the bucket the name of the file
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed',(snap)=>{
            let percentege = (snap.bytesTransferred / snap.totalBytes) * 100 ;
            setProgress(percentege);

        },(err)=>{
            setError(err);
        },async ()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file])

    return { progress, url, error}
}


export default useStorage;