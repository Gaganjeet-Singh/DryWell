import React from "react";

function Value() {
  return (
    <>
      <section className="values-section">
        <div className="container">
          
          {/* Heading */}
          <div className="row text-center mb-5">
            <h5 className="values-title">Our Values</h5>
            <p className="values-subtitle">
              These core principles guide everything we do, from how we treat your
              clothes to how we serve <br />
              our community.
            </p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            
            {/* Customer First */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="value-card text-center">
                <div className="icon-box">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <h6>Customer First</h6>
                <p>
                  Your satisfaction is our priority. We treat every garment with
                  the care it deserves.
                </p>
              </div>
            </div>

            {/* Eco-Conscious */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="value-card text-center">
                <div className="icon-box">
                  <i className="fa fa-leaf" aria-hidden="true"></i>
                </div>
                <h6>Eco-Conscious</h6>
                <p>
                  We use sustainable practices and eco-friendly products to
                  protect our planet.
                </p>
              </div>
            </div>

            {/* Quality Service */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="value-card text-center">
                <div className="icon-box">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                </div>
                <h6>Quality Service</h6>
                <p>
                  Professional cleaning with attention to detail in every step of
                  the process.
                </p>
              </div>
            </div>

            {/* Reliability */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="value-card text-center">
                <div className="icon-box">
                  <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                </div>
                <h6>Reliability</h6>
                <p>
                  On-time pickups and deliveries you can count on, every single
                  time.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Value;
