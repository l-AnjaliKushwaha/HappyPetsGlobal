import React from "react";
import NavBar from "./Components/Navbar/Navbar.jsx";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import WeDo from "./Components/WeDo/WeDo.jsx";
import Vision from './Components/Vision/Vision.jsx'
import Service from "./Components/Service/Service.jsx";
import Join from "./Components/Join/Join.jsx";


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <WeDo/>
      <Vision/>
      <Service/>
      <Join/>
    </>
  );
}

export default App;
