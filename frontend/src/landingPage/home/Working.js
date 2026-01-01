import React from "react";

function Working() {
  return (
    <section className="working-timeline py-5">
      <div className="container">

        {/* Header */}
        <div className="row text-center mb-5">
          <div className="col-12 col-md-10 mx-auto">
            <h3 className="timeline-title">How It Works</h3>
            <p className="text-muted">
              Simple steps from pickup to delivery — designed for your convenience.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">

          <div className="timeline-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h5>Schedule Pickup</h5>
              <p>Select your pickup date & time. We’ll reach your doorstep.</p>
            </div>
            <i className="fa fa-calendar step-icon" />
          </div>

          <div className="timeline-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h5>We Pickup</h5>
              <p>Our delivery partner collects your clothes safely.</p>
            </div>
            <i className="fa fa-truck step-icon" />
          </div>

          <div className="timeline-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h5>We Clean</h5>
              <p>Premium cleaning using modern machines and care.</p>
            </div>
            <i className="fa fa-tint step-icon" />
          </div>

          <div className="timeline-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h5>We Deliver</h5>
              <p>Fresh, clean clothes delivered neatly to you.</p>
            </div>
            <i className="fa fa-check step-icon" />
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <button className="timeline-btn">
            Schedule Free Pickup
          </button>
        </div>

      </div>
    </section>
  );
}

export default Working;
