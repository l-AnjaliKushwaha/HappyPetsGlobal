import React from 'react'
import backgroundimg from "../assets/Images/BackgroundImg.png"
import dog from "../assets/Images/Page1Dog.png"
import girl from "../assets/Images/Page1Girl.png"

function Home() {
  return (
    <>
      <div className="home">
        <div
          className="hero-page1 h-[60vh] bg-[#f5eacd9a] flex justify-between relative"
          style={{ backgroundImage: `url(${backgroundimg})` }}
        >
          <div className="dog">
            <img src={dog} alt="" />
          </div>
          <div className="center-content text-center pt-32 ">
            <p className='text-5xl font-medium'>Give Your Pets</p>
            <h1 className='text-7xl uppercase font-semibold '>An Everyday <br />Wagging Tail <br/> Experience </h1>
          </div>
          <div className="girl w-[35vw] bg-[#D0A8A8] rounded-3xl flex justify-center align-center">
            <img src={girl} alt="Girl" className="object-contain" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home


