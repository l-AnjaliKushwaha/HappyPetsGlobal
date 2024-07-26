import React from "react";
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
            <div className="div-1 right-box">
              <div className="r-div1-overlay">
                <div className="div1-left">
                  <p>A home away from home for your furry friends</p>
                  <button className="btn"> Pet's Shelter</button>
                </div>
                <div className="div1-right">
                  <img
                    width={240}
                    height={152}
                    src="https://s3-alpha-sig.figma.com/img/6f18/8e21/b59c40570cb36c7e14ff04d96a97265c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jJvk6IQqrTTI2Va~9lf3dUxOtmEzlCmRgGuFMbM4Uh7ClcEk05gArE5rCj-A9QuX6CcrEVPwtoYwB-fb4E2vDnSnu3H-p5PK7vwiMo~O0PReuELYDn0Bk~hc1WFtkf3mE4PgDsE9XoZHpnWr1UrZm1TR3p26K2nBanTuHlRbAVJYdgx--9cHwh9~CLdf9bXt-WOyXOKBjUMRIjvyFCUDIwhWWyJ2F6az5ljJ3A3P73C4Mne8SvzzcArJUw7zekBPrJsXrDaK2~8LDwt3RXgE9xoBbozeh7UhoVUKZNxU2HAjPt0fRROQuHXr4lLSQpv1QJaaQzKLVrySnDhZcOfSyw__"
                    alt=""
                  />
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
                  <img width={280} height={172}
                    src="https://s3-alpha-sig.figma.com/img/ea25/7a3f/c23588fc159cbddb135c82959392599f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5QZrGa4AgcgCgTv2kP53PwJbLHs7sxEepreiobh5izn1LFkURmoe7y~liCt8zcO2LzCWi~J620FtxFbXEdqONzl7VwxsNpxHkRC9pXBviGbadA-VSa5rAVFaeK3juW5RBUXM9vcl67lPdXPzTpmyXdcsOaHEATF~biq6cfOJw7KioYhPQHUC1ykZBJv-pAsjuzCMGYd0kZvmoA3PbveLQu5ak0LktBe2NrmXnjn3XeQWS9~ImiDlPGO~c3P68hD4p0FTayeyYQt3hmbdQ72N~D4unbKJyPF1lh3HW7sBp~l0EqoUSI9iIWtULCNFpm1yPIbnLeftTB5ZPGeJL6~Bw__"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
