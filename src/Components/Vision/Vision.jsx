import React from 'react'
import GroupAnimalImg from '../../assets/Images/Page3-animals-group.png'
import './Vision.css'

function Vision() {
  return (
    <>
      <div className="v-wrapper">
        <div className="v-overlay">
          <div className="v-left">
            <img width={656} height={321} src={GroupAnimalImg} alt="" />
          </div>
          <div className="v-right">
            <h1>Our Vision</h1>
            <p>
              To be the leading destination for pet owners, offering a wide
              range of pet products, expert guidance, and a supportive network
              that promotes the well-being and happiness of pets in every home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vision
