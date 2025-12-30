import React from "react";

function Team() {
  return (
    <>
      <section className="team-section">
        <div className="container">
          
          {/* Heading */}
          <div className="row text-center mb-5">
            <h5 className="team-title">Meet Our Team</h5>
            <p className="team-subtitle">
              The friendly faces behind FreshFold, dedicated to making your
              laundry experience exceptional.
            </p>
          </div>

          {/* Team Members */}
          <div className="row justify-content-center g-5">

            {/* Member 1 */}
            <div className="col-lg-5 col-md-6 col-sm-12 text-center">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/images/drycleaning.jpg"
                    alt="Team Member"
                    className="team-image"
                  />
                </div>
                <p className="team-name" style = {{color : "#2E8BC0"}}>Manav Father</p>
                <p style = {{color : "#555"}}>Owner</p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="col-lg-5 col-md-6 col-sm-12 text-center">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    src="/images/drycleaning.jpg"
                    alt="Team Member"
                    className="team-image"
                  />
                </div>
                <p className="team-name" style = {{color : "#2E8BC0"}}>Manav</p>
                <p style = {{color : "#555"}}>Co-Owner</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="cta-section">
  <div className="container">
    <div className="cta-content text-center">

      {/* Icon */}
      <div className="cta-icon mb-3">
        <i className="fa fa-magic"></i>
      </div>

      <h6 className="cta-subtitle">Join the DryWELL Family</h6>

      <p className="cta-text">
        Experience the convenience of professional laundry service with a personal touch.
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="cta-btn-primary">Schedule Pickup</button>
        <button className="cta-btn-outline">Contact Us</button>
      </div>

    </div>
  </div>
</section>

    </>
  );
}

export default Team;
