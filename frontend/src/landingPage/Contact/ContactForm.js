import React from "react";

function ContactForm() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">

          {/* LEFT COLUMN – FORM */}
          <div className="col-12 col-lg-6">
            <div className="contactForm p-4 p-md-5 h-100">
              <h5 className="mb-3">Send Us a Message</h5>

              <div className="mb-3">
                <label className="form-label" htmlFor="username">Your Name *</label>
                <input className="form-control" placeholder="John Doe" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input className="form-control" placeholder="john@example.com" type="email" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input className="form-control" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="subject">Subject *</label>
                <input className="form-control" placeholder="How can we help you?" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button className="btn btn-primary w-100 mt-3" style={{ backgroundColor: "#2E8BC0" }}>
                Send Message
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN – CONTACT INFO */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3 h-100">

              {/* Phone Card */}
              <div className="contact-card p-4">
                <div className="icon-wrapper mb-2">
                  <i className="fa fa-phone" />
                </div>
                <h5>Phone</h5>
                <p>Call us anytime during business hours</p>
                <a href="tel:+15551234567" style={{ color: "#2E8BC0" }}>
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Email Card */}
              <div className="contact-card p-4">
                <div className="icon-wrapper mb-2">
                  <i className="fa fa-envelope" />
                </div>
                <h5>Email</h5>
                <p>Send us an email anytime</p>
                <a href="mailto:hello@drywell.com" style={{ color: "#2E8BC0" }}>
                  hello@drywell.com
                </a>
              </div>

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

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactForm;
