import React from "react";

function BookingForm() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">

          {/* LEFT COLUMN – BOOKING FORM */}
          <div className="col-12 col-lg-6">
            <div className="booking-form p-4 p-md-5 h-100">
              <h6 style={{ color: "#2E8BC0" }}>Booking Details</h6>
              <p className="text-muted">
                Fill in your information and we'll be there!
              </p>

              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name *</label>
                <input className="form-control" id="fullname" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input className="form-control" id="phone" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input className="form-control" type="email" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="pickupdate" className="form-label">Pickup Date *</label>
                <input className="form-control" type="date" id="pickupdate" />
              </div>

              <div className="mb-3">
                <label htmlFor="serviceType" className="form-label">Service Type *</label>
                <select className="form-select" id="serviceType" defaultValue="">
                  <option value="" disabled>Select service</option>
                  <option>Wash & Fold</option>
                  <option>Dry Cleaning</option>
                  <option>Ironing Service</option>
                  <option>Shoe Cleaning</option>
                  <option>Sofa & Carpet Cleaning</option>
                  <option>Curtain & Blanket Cleaning</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="pickupAddress" className="form-label">Pickup Address *</label>
                <textarea className="form-control" rows="4" id="pickupAddress" />
              </div>

              <button className="btn btn-primary w-100 mt-3" style={{ backgroundColor: "#2E8BC0" }}>
                Book Pickup
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN – INFO CARDS */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3 h-100">

              {/* Business Hours */}
              <div className="business-card p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="icon-wrapper-purple">
                    <i className="fa fa-clock-o" />
                  </div>
                  <h5 className="mb-0">Business Hours</h5>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Mon – Fri</span>
                  <span>7:00 AM – 9:00 PM</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Saturday</span>
                  <span>8:00 AM – 8:00 PM</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Sunday</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>
              </div>

              {/* Contact Card */}
              <div className="contact-card p-4">
                <div className="icon-wrapper mb-2">
                  <i className="fa fa-phone" />
                </div>
                <h5>Need help?</h5>
                <p>Call us anytime during business hours</p>
                <button className="btn btn-outline-primary w-100">
                  Contact Us
                </button>
              </div>

              {/* What to Expect */}
              <div className="expect-box p-4">
                <h5 className="expect-title mb-3">What to Expect</h5>

                <div className="expect-item">
                  <span className="expect-number">1</span>
                  <p>Our driver will arrive on your selected date.</p>
                </div>

                <div className="expect-item">
                  <span className="expect-number">2</span>
                  <p>We’ll count items in front of you.</p>
                </div>

                <div className="expect-item">
                  <span className="expect-number">3</span>
                  <p>Track order via email or SMS.</p>
                </div>

                <div className="expect-item">
                  <span className="expect-number">4</span>
                  <p>Receive clean laundry in 24–48 hours.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BookingForm;
