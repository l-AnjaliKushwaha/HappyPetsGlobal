import React from 'react'
import image1 from '../../assets/Images/image 1.png'
import image2 from "../../assets/Images/image 2.png";
import image3 from "../../assets/Images/image3.png";
import './Join.css'

export default function Join() {
  return (
    <>
      <div className="j-wrapper">
        <div className="j-img">
          <img
            width={500}
            height={384}
            src={image1}
            alt=""
          />
          <img
            width={374}
            height={487}
            src={image2}
            alt=""
          />
          <img src="" alt="" />
        </div>
        <div className="j-content">
          <p>
            Join our team of expert pet trainers and doctors to help us care for
            our furry friends
          </p>
          <button className="btn">Join Us</button>
        </div>
      </div>
      <div className="j-middle">
        <div className="m-img">
          <img
            src={image3}
            alt=""
          />
        </div>
      </div>
      <div className="j-last">
        <div className="last-div1">
          <h1>About Us</h1>
          <p>
            At Happy Pets, we provide all-inclusive services for your furry
            friends, from grooming and training to medical care and quality
            products. Our mission is to ensure your pets live healthy, happy,
            and well-cared-for lives.
          </p>
          <img
            width={222}
            height={63}
            src="https://s3-alpha-sig.figma.com/img/b44b/4c64/4da6109541e3e95d65a7005cb5a96c91?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUZTu5AiHk9V0B~UdGIfiCiaET7P8QBak0h9HRKHaziILyU7lonERB6d9zNWwM2i5qcvHJBw3ta31bs5ZndK0EYyQdbOFlwkEZOdAkK99jE3K~m0jVSGI2UtWOBjWG9FaQY5la~EZO2LTPPGLtJdWwGQ88t0NkdVVG5vNzyNIQuvFN6t8l8Stb7YQz1z5Y11uXbjfhChXCDQSSf760UZsjNREHUIM4aTpm3FcYD5XNsuCl27u2T2rERTwjWq867h5XYFTSV5-5IIckFVrP4AaAzvePfU8SwRo20LdgRAObzBFLY7rvnSZyv35BaVMPFkPbUaIRLh1rajMPDU3-LsEw__"
            alt=""
          />
        </div>
        <div className="last-div2">
          <h1>Our Services</h1>
          <div className="our-s">
            <p>Pet Taining</p>
            <p>Pet Shelter</p>
            <p>Pet Health</p>
            <p>Pet Essentials</p>
            <p>Pet Grooming</p>
          </div>
        </div>
        <div className="last-div3">
          <button className="l-btn btn1">Join Us</button>
          <br />
          <button className="l-btn">Contact Us</button>
        </div>
      </div>
    </>
  );
}
