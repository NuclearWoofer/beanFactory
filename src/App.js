import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import About from './comps/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li className='navItem-home'> 
              <Link to="/">home</Link>
            </li>
            <li className='navItem-about'>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* UploadForm can commented out to present in 'showcase' mode. 
          Perhaps we can include a toggle between showcase mode and upload mode? 
          sign in functionality???.*/}
          <Route path="/" element={<div><Title/><UploadForm /><ImageGrid setSelectedImg={setSelectedImg} /></div>} />
          <Route path="/about" element={<About />} />
        </Routes>
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </BrowserRouter>
 
    </div>
  );
}

export default App;
