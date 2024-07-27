import React from "react";
import HaircutingImg from '../../assets/Images/Page4-haircuting.png'
import DogHouse from '../../assets/Images/Page4-dogs-their-houses.png'
import ManLookingDog from '../../assets/Images/Page4-man-looking-dog.png'
import Cat1 from '../../assets/Images/Page5Cat1.png'
import Cat2 from "../../assets/Images/Page5Cat2.png";
import "./Service.css";

function Service() {
  return (
    <>
      <div className="s-wrapper">
        <h1>Services to help your pet feel more loved</h1>
        <div className="main-div">
          <div className="s-left">
            <div className="s-overlay">
              <div className="cutting-img">
                <img width={374} height={386} src={HaircutingImg} alt="" />
                <div className="overlay-content">
                  <p>Pamper your pet with our top-notch grooming services</p>
                  <button className="btn">Pet's Grooming</button>
                </div>
              </div>
            </div>
          </div>
          <div className="s-right">
            <div className="div-1 right-box">
              <div className="r-div1-overlay">
                <div className="div1-left">
                  <p>A home away from home for your furry friends</p>
                  <button className="btn"> Pet's Shelter</button>
                </div>
                <div className="div1-right">
                  <img width={240} height={152} src={DogHouse} alt="" />
                </div>
              </div>
            </div>
            <div className="div-2 right-box">
              <div className="r-div2-overlay">
                <div className="div2-left">
                  <p>Transform your pet with our expert training programs</p>
                  <button className="btn">Pet's Training</button>
                </div>
                <div className="div2-right">
                  <img width={280} height={172} src={ManLookingDog} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>We Care About Your Pet’s Wellbeing</h1>
        <div className="below-page">
          <div className="b-left">
            <div className="b-left-overlay">
              <div className="b-left-img">
                <img width={470} height={313} src={Cat1} alt="" />
              </div>
              <div className="b-left-content">
                <p>Expert veterinary care for your beloved pets</p>
                <button className="btn">Pet's Health</button>
              </div>
            </div>
          </div>
          <div className="b-right">
            <div className="b-right-overlay">
              <div className="b-right-img">
                <img
                  width={470}
                  height={313}
                  src={Cat2}
                  alt=""
                />
              </div>
              <div className="b-right-content">
                <p>Reliable medication to keep your pets healthy and happy</p>
                <button className="btn">Pet's Health</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
