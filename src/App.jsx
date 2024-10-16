import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './page/Home.jsx'
import './index.css';
import PetsServices from './page/PetsServices.jsx';


function App() {
  return (
    <div className='h-screen'>
      <Navbar />
      <Home/>
      {/* <PetsServices/> */}
    </div>
  );
}

export default App
