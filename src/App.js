import './App.css';
import Navbar from './COMPONENTS/SECTION1/Navbar/Navbar';
import Section2 from './COMPONENTS/SECTION2/Section2';
import Section3 from './COMPONENTS/Section3/Section3';

import Contactus from './COMPONENTS/Contactus/Contactus';
import { Route, Routes } from 'react-router-dom';
import BeatLoader from 'react-spinners/ClipLoader';


import { useEffect, useState } from 'react';
import Projects from './COMPONENTS/PROJECTS/Projects';
import Welcome from './COMPONENTS/SECTION1/Welcome/Welcome';

const App = () => {
  const [loading, setLoading] = useState(true);
  const color = 'black';
  const override = {

  };

  

  return (
    <>
    
          
            <Navbar />


            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/works" element={<Section2 />} />
              <Route path="/services" element={<Section3 />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/contact" element={<Contactus />} />
            </Routes>

          </>
        
    
   
  )
}








export default App;
