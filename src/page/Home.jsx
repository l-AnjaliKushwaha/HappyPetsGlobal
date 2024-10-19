import React from 'react'
import backgroundimg from "../assets/Images/BackgroundImg.png"
import Page1

function Home() {
  return (
    <>
      <div className="home">
        <div
          className="hero-page1 h-[70vh] bg-[#f5eacd9a] "
          style={{ backgroundImage: `url(${backgroundimg})` }}
        >
          <div className='dog'>
            <img src={} alt="" />
          </div>
          <div className='center-content'></div>
          <div className='girl'>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home
