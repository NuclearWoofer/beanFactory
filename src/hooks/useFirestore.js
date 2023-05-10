import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

//mostly used a tutorial for the firebase stuff but all in all, it is fairly simple to understand and navigate. 
// Here, useFirestore will add the images to a collection to be able to be shown onto the image grid. 
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
   
  }, [collection]);

  return { docs };
}

export default useFirestore;