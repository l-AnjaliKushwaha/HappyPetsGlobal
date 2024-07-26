import React from "react";
import NavBar from "./Components/Navbar/Navbar.jsx";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import WeDo from "./Components/WeDo/WeDo.jsx";
import Vision from './Components/Vision/Vision.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <WeDo/>
      <Vision/>
    </>
  );
}

export default App;
