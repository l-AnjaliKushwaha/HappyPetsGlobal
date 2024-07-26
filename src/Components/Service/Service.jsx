import React from 'react'
import './Service.css'

function Service() {
  return (
    <>
      <div className="s-wrapper">
        <h1>Services to help your pet feel more loved</h1>
        <div className="main-div">
          <div className="s-left">
            <div className="s-overlay">
              <div className="cutting-img">
                <img
                  width={374}
                  height={386}
                  src="https://s3-alpha-sig.figma.com/img/2d47/ae30/c2ece4b8ffb0a865f154462e5e4bc058?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kh9AGDS3-u-Upf9LMdNXlxuh64rm5Y8DnedWqIVscToYxgh9B5VyVZc3PwoIw06b~7MCzhj5ZtP8v0pqyhtawJig2gs8PG3QzTIFus-PJfMTJcvH9hR5bCLKHunXAJryv6OuF~qJRsWY4jhMt17l4GX8dC2w5WnJ6iAizATC~QZ-rhELTXFRBBsxlDjQ45eQ3ury8K559MJvfqYP4R6qElHL~0TdSqBPB5G7Z-6bkytxDwlbzO4kTp09jMRWHMYNVh4G2if36wjkfZ8QxkcAAkt1Gf4103BPnODgFnU7wO08NEnQ2I-8z3efaJcOZNSo~bVbTuRD54HRhYwZ6r~Ocg__"
                  alt=""
                />
                <div className="overlay-content">
                  <p>Pamper your pet with our top-notch grooming services</p>
                  <button className="btn">Pet's Grooming</button>
                </div>
              </div>
            </div>
          </div>
          <div className="s-right">
            <div className="div-1 right-box"></div>
            <div className="div-2 right-box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service
