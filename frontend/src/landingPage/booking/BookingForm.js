import React from "react";

function BookingForm() {
  return (
    <section className="booking-section">
      <div className="container">
        <div className="row g-4">

          {/* LEFT – FORM */}
          <div className="col-12 col-lg-6">
            <div className="booking-form-card">
              <h6 className="section-title">Booking Details</h6>
              <p className="text-muted">
                Fill in your information and we'll be there!
              </p>

              <div className="form-group">
                <label>Full Name *</label>
                <input className="form-control" />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input className="form-control" />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input className="form-control" type="email" />
              </div>

              <div className="form-group">
                <label>Pickup Date *</label>
                <input className="form-control" type="date" />
              </div>

              <div className="form-group">
                <label>Service Type *</label>
                <select className="form-select">
                  <option>Select service</option>
                  <option>Wash & Fold</option>
                  <option>Dry Cleaning</option>
                  <option>Ironing</option>
                </select>
              </div>

              <div className="form-group">
                <label>Pickup Address *</label>
                <textarea className="form-control" rows="4" />
              </div>

              <button className="btn-primary-full">
                Send Message
              </button>
            </div>
          </div>

          {/* RIGHT – INFO */}
          <div className="col-12 col-lg-6">
            <div className="info-column">

              <div className="info-card">
                <h5>Business Hours</h5>
                <div className="info-row">
                  <span>Mon – Fri</span>
                  <span>7:00 AM – 9:00 PM</span>
                </div>
                <div className="info-row">
                  <span>Saturday</span>
                  <span>8:00 AM – 8:00 PM</span>
                </div>
                <div className="info-row">
                  <span>Sunday</span>
                  <span>9:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div className="info-card">
                <h5>Need help?</h5>
                <p>Call us anytime during business hours</p>
                <button className="btn-outline-full">
                  Contact Us
                </button>
              </div>

              <div className="expect-card">
                <h5>What to Expect</h5>

                <div className="expect-item">
                  <span>1</span>
                  <p>Driver arrives on selected date</p>
                </div>
                <div className="expect-item">
                  <span>2</span>
                  <p>Items counted in front of you</p>
                </div>
                <div className="expect-item">
                  <span>3</span>
                  <p>Track via email or SMS</p>
                </div>
                <div className="expect-item">
                  <span>4</span>
                  <p>Clean laundry in 24–48 hours</p>
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
