import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Page1Dog from '../../assets/Images/Page1Dog.png';
import Page1Girl from '../../assets/Images/Page1Girl.png';
import "./Home.css";

function Home() {
  return (
    <>
      <div className="image">
        <div className="image-overlay">
          <div className="first-div">
            <img width={373} height={522} src={Page1Dog} alt="" />
          </div>
          <div className="second-div">
            <h1>Give Your Pets</h1>
            <h2>An Everyday Wagging Tail Experience </h2>
          </div>
          <div className="third-div">
            <img width={322} height={482} src={Page1Girl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
