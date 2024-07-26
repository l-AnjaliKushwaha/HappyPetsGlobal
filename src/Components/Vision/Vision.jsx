import React from 'react'
import './Vision.css'

function Vision() {
  return (
    <>
      <div className="v-wrapper">
        <div className="v-overlay">
          <div className="v-left">
            <img
              width={656}
              height={321}
              src="https://s3-alpha-sig.figma.com/img/9dca/4aad/f8f94f139881e0c719236eabd7fe2718?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHfYoksWAls6KveP~GqHXRZDQOLOP43giS0L3K2Iw-nBp78WJ~WsdxnynM9y34ehJpV05YHPMm4RcMDQAwgUVNPhHiSd4EetMiEBC-pBNtKzVdaswy2T9RgGXHM6Wl69hNc995icMk1p6Mfv6J9cpdbyrq0lnZBpjRuj69p3QsKCuBCuav8wfYNO9Wm6Rrj8VhSXfMS9lSNdOr8G1X8TVAXpK-5~4oN8FwnwrxqMlS~k6zRAL5Mb2iJtpX7TNUJoLOFLKww1MGdw56R8Fumc~KOmJYU~1FoQHhNxhqeuKLEbLl-8yM2veUc6KaOkoR~omw5s-z75TucwEq02wTG7lg__"
              alt=""
            />
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
