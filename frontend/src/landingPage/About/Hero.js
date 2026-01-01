import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const goToService = () => {
    navigate("/service");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section id="HeroService" className="py-5">
        <div className="container-fluid px-0">
          <div className="row justify-content-center text-center m-0">
            <div className="col-12 col-md-10 col-lg-8 px-3 mt-5 ">
              <p className="fs-6 mb-2">About DryWELL</p>
              <p className="fs-5 mb-0">
                Making laundry simple and sustainable since 2018. We’re
                passionate about providing exceptional service while caring for
                the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-12 col-lg-6">
  <div className="story-image-wrapper">
    <img
      src="/images/Story.jpg"
      alt="Our Story"
      className="story-image"
    />
  </div>
</div>


            {/* CONTENT */}
            <div className="col-12 col-lg-6">
              <h5 className="mb-3" style={{ color: "#2E8BC0" }}>
                Our Story
              </h5>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                FreshFold Laundry was born from a simple idea: laundry shouldn’t
                be a chore that takes away from the things you love. Founded in
                2018 by Sarah Mitchell, we started with a single van and a
                commitment to exceptional service.
              </p>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                Today, we’re proud to serve thousands of customers across the
                city, providing professional laundry and dry-cleaning services
                with free pickup and delivery.
              </p>

              <p style={{ lineHeight: "1.8", color: "#555" }}>
                We’re committed to sustainability—using eco-friendly detergents,
                energy-efficient machines, and biodegradable packaging—because
                clean clothes shouldn’t come at the cost of a clean planet.
              </p>

              <button
                type="button"
                className="btn btn-primary mt-3"
                style={{ backgroundColor: "#2E8BC0", border: "none" }}
                onClick={goToService}
              >
                Explore Our Services
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
