import React from "react";
import { useNavigate } from "react-router-dom";

function Types() {
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate('/contact');
  }
  return (
    <>
      {/* ================= SERVICES SECTION ================= */}
      <div className="container mt-5 mb-5" id="ServiceTypes">
        <div className="row justify-content-center">

          {/* Dry Cleaning */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card m-4 service-card">
              <img src="/images/drycleaning.jpg" className="card-img-top service-card-img" alt="Dry Cleaning" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Dry Cleaning</h5>
                <p className="card-text">
                  Specialized dry cleaning for delicate and premium garments using fabric-safe solvents.
                </p>
                <button className="btn btn-primary mt-auto service-btn">Book This Service</button>
              </div>
            </div>
          </div>

          {/* Wash & Fold */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card m-4 service-card">
              <img src="/images/wash_and_fold.jpg" className="card-img-top service-card-img" alt="Wash & Fold" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Wash & Fold</h5>
                <p className="card-text">
                  Your everyday laundry washed, dried, and neatly folded.
                </p>
                <button className="btn btn-primary mt-auto service-btn">Book This Service</button>
              </div>
            </div>
          </div>

          {/* Ironing */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card m-4 service-card">
              <img src="/images/ironing.jpg" className="card-img-top service-card-img" alt="Ironing" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Ironing Service</h5>
                <p className="card-text">
                  Crisp, perfectly pressed clothes ready to wear.
                </p>
                <button className="btn btn-primary mt-auto service-btn">Book This Service</button>
              </div>
            </div>
          </div>

          {/* Shoe Cleaning */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card m-4 service-card">
              <img src="/images/shoe_cleaning.jpg" className="card-img-top service-card-img" alt="Shoe Cleaning" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Shoe Cleaning</h5>
                <p className="card-text">
                  Professional shoe cleaning using safe products.
                </p>
                <button className="btn btn-primary mt-auto service-btn">Book This Service</button>
              </div>
            </div>
          </div>

          {/* Sofa & Carpet */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card m-4 service-card">
              <img src="/images/sofa.jpeg" className="card-img-top service-card-img" alt="Sofa Cleaning" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Sofa & Carpet Cleaning</h5>
                <p className="card-text">
                  Deep cleaning for a fresh home.
                </p>
                <button className="btn btn-primary mt-auto service-btn">Book This Service</button>
              </div>
            </div>
          </div>

          {/* Curtain Cleaning */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card m-4 service-card">
              <img src="/images/curtains.webp" className="card-img-top service-card-img" alt="Curtain Cleaning" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Curtain & Blanket Cleaning</h5>
                <p className="card-text">
                  Deep cleaning for curtains and blankets.
                </p>
                <button className="btn btn-primary mt-auto service-btn">Book This Service</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <section className="cta-section">
        <div className="container">
            <div className="cta-content text-center">

            <div className="cta-icon mb-3">
                <i className="fa fa-magic"></i>
            </div>

            <h6 className="cta-subtitle">Join the DryWELL Family</h6>

            <p className="cta-text">
                Experience the convenience of professional laundry service with a personal touch.
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="cta-btn-primary">Schedule Pickup</button>
                <button className="cta-btn-outline" onClick={gotoContact}>Contact Us</button>
            </div>

            </div>
        </div>
        </section>


    </>
  );
}

export default Types;
