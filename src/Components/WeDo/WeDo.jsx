import React from "react";
import "./WeDo.css";

function WeDo() {
  return (
    <>
      <div className="w-wrapper">
        <div className="box-1">
          <p>This Is What We Do</p>
        </div>
        <div className="box-2">
          <div className="cat"></div>
          <p>
            All pet services in one place, <br /> including grooming, shelter,
            and more
          </p>
          <button className="btn">Pet's Services</button>
        </div>
        <div className="box-3">
          <div className="inner-box1">
            <div className="cat-2"></div>
            <div className="cat-3">
              <p>
                No need to worry about your pet’s health; we provide
                comprehensive care with veterinary and medication services.
              </p>
              <button className="btn">Pet's Health</button>
            </div>
          </div>
          <div className="inner-box2">
            <div className="cat-2 cat-4"></div>
            <div className="cat-3">
              <p>
                All the essential pet foods in one place - no <br /> need to search
                elsewhere for quality <br /> products.
              </p>
              <button className="btn">Pet's essential</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeDo;
