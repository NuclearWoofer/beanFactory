import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

//This is where the progress bar is handled. It is calculated and animated.
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;