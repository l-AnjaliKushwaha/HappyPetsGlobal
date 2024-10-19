import React from 'react'
import backgroundimg from "../assets/Images/BackgroundImg.png"
import dog from "../assets/Images/Page1Dog.png"
import girl from "../assets/Images/Page1Girl.png"

function Home() {
  return (
    <>
      <div className="home">
        <div
          className="hero-page1 h-[70vh] bg-[#f5eacd9a] flex justify-between"
          style={{ backgroundImage: `url(${backgroundimg})` }}
        >
          <div className="dog">
            <img src={dog} alt="" />
          </div>
          <div className="center-content">
            <p>Give Your Pets</p>
            <h1>An Everyday Wagging Tail Experience </h1>
          </div>
          <div
            className="girl w-[30vw] h-auto bg-[#D0A8A8] rounded-xl"
          >
            <img src={girl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home


