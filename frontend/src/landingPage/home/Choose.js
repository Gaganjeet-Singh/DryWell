import React from "react";

function Choose() {
  return (
    <section className="py-5" style={{ backgroundColor: "#F4F7FA" }}>
      <div className="container">

        {/* Heading */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-10 col-lg-8">
            <h4 style={{ color: "#2E8BC0" }}>Why Choose DryWELL?</h4>
            <p className="text-muted">
              Experience the best laundry service with our commitment to quality,
              convenience, and sustainability.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="row text-center g-4">

          {/* Item 1 */}
          <div className="col-12 col-md-4">
            <div className="px-4">
              <div className="icon-circle mb-3">
                <i className="fa fa-truck fa-2x" />
              </div>
              <h5>Free Pickup & Delivery</h5>
              <p className="text-muted">
                We come to you! Schedule a convenient time and we’ll handle the rest.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-12 col-md-4">
            <div className="px-4">
              <div className="icon-circle mb-3">
                <i className="fa fa-leaf fa-2x" />
              </div>
              <h5>Eco-Friendly Cleaning</h5>
              <p className="text-muted">
                Safe detergents and energy-efficient processes that protect clothes
                and the planet.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-12 col-md-4">
            <div className="px-4">
              <div className="icon-circle mb-3">
                <i className="fa fa-clock-o fa-2x" />
              </div>
              <h5>Fast Turnaround</h5>
              <p className="text-muted">
                Get your clothes cleaned, pressed, and ready in as little as 24 hours.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Choose;
