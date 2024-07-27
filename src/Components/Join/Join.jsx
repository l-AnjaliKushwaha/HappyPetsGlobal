import React from 'react'
import './Join.css'

export default function Join() {
  return (
    <>
      <div className="j-wrapper">
        <div className="j-img">
          <img
            width={500}
            height={384}
            src="https://s3-alpha-sig.figma.com/img/d63c/a435/32b0fad2bb0ed2f983f5be5555f87f3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AYhJGU6424JKOmLj2tI-cxVou05Tar6-REcj8beMhLKFxtpPTz~54j4K9kcY0Q98bnDNF~2oEZHxICEL49PZT9YNbVAwiVi8qlo9TWNCSu4QfPu5UDdeYdQZ5z14lDphGlZZVhmkRsbuocED128NdSA09DrTciUCUq6UeLeqo993V9fwQfuvic8BKECH~fAmRk68L5IsQ~fvGFdvdXut3VSDIk53~2iOEL3ZrjppemyhMBwUPObqzC3gCW6EIJ4WQdb3WcMef7fkVk~M4CMqLl-fiHnWIgN0KsmmICziF~KFDSKHHkLdoofi0v1TADHChpjR~eN6FhTIDg84SX-eCw__"
            alt=""
          />
          <img
            width={374}
            height={487}
            src="https://s3-alpha-sig.figma.com/img/0b9b/d2f0/0862ebc0929999d3237363c34e6d03e1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DRwJnhacCs28s6nrbQHGgm~sDRV3KqNO27yDh6SllaBNUJsOUwdmQl-17jo~nguMV84rrxxqNjzaziJLyfGWFJbQ5AZV84tWzFabsVGNm2oTgOVqqJRkthko7tPp4MWqQKdfqGnWlS~kmB-EoFPHRZZcY8VRIyB55LIIFqoyqKSp~Rw~s4P7vFjYvinjbCE7h1krzwgBg3UqNNkVciKRvi-KjHSWRMNN4XrkHjH9fhIyC~pnrDvKZhxwHVCNjQLnpfZzD56e6A1I0OGjbQubjOnmYyLaO8UZfOvtld2QvWvyd0P-kEcWKkhJXx8ycMdOGLuvgWpP~PY8wN3jgKUnmQ__"
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
            src="https://s3-alpha-sig.figma.com/img/281b/17bc/38be5f7780db2d3a62fede061bce49f2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EpyD3JGKn1o-bbZEKD8llCEkzDltR~yc23g4Ys0MllEEH06u7s-bEhO0zwvCxlEqbaNDqBxcxts-iGdr~caEx6-T-zuiem9eBDSBWilk9mISzJ3Av7CcYesdD7p54Ex2QVgsctU5GyRaR7rIayqJUaoyxtVKLzLLQR-zhhf6uNJ-MU8mbT0cjSpJApOJ9-3~3OuvrCTzrYGtcpAhBp6fZM0TxFLyK8Fr6u9IDPxRSNs9v0t0sY1D46rPfDfi9nhI~XitfDsbwWi4TNJ4J-pvpYiGmvRe8gY-RNGcbTWh9KQbSsFf3sd3ETsVynDZ7tv7TY6H0h4bIn3qNXhs5AwIgw__"
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
