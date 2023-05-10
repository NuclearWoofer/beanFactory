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
        <nav style={{ borderBottom: '1px solid #ccc' }}>
          <ul>
            <li className='navItem-home'> 
              <Link to="/">gallery</Link>
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

      {/* Here are my socials, I think I want to keep them in the About Page */}
      {/* <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center'}}>
        <li style={{ margin: '0 10px' }}>
          <a href='https://www.linkedin.com/in/michael-lopez-a7436b157/' style={{padding: '50px', textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a href='mailto: miketatooine@gmail.com' style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
            Email Me
          </a>
        </li>
      </ul> */}
    </div>
  );
}

export default App;
