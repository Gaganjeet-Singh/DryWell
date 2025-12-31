import React from "react";

function ContactForm() {
  return (
    <section>
      <div className="container">
        <div className="row mt-4 mb-5 align-items-stretch">

          {/* LEFT COLUMN */}
          <div className="col-6 contactForm p-5">
            <h5 className="mb-3">Send Us a Message</h5>

            <div className="mb-3">
              <label className="form-label">Your Name *</label>
              <input className="form-control" placeholder="John Doe" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address *</label>
              <input className="form-control" placeholder="john@example.com" />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input className="form-control" placeholder="+1 (555) 123-4567" />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject *</label>
              <input className="form-control" placeholder="How can we help you?" />
            </div>

            <div className="mb-2">
              <label className="form-label">Message *</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button className="btn btn-primary w-100 mt-3">
              Send Message
            </button>
          </div>

            
            <div class="col-6">
                <div class="contact-card">
                    <div class="icon-wrapper">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="content">
                        <h5 class="title">Phone</h5>
                        <p class="subtitle">Call us anytime during business hours</p>
                        <a href="tel:+15551234567" class="phone-number">+1 (555) 123-4567</a>
                    </div>
                </div>
                <div class="contact-card mt-3">
                    <div class="icon-wrapper">
                        <i className="fa fa-envelope" />
                    </div>
                    <div class="content">
                        <h5 class="title">Email</h5>
                        <p class="subtitle">Send us an email anytime</p>
                        <a href="tel:+15551234567" class="phone-number">hello@drywel.com</a>
                    </div>
                </div>
                <div class="business-card mt-3">
        
        <div class="card-header-custom">
          <div class="icon-wrapper-purple">
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </div>
          <h5 class="title">Business Hours</h5>
        </div>

        <div class="hours-container">
          <div class="hour-row">
            <span>Monday - Friday:</span>
            <span class="time">7:00 AM - 9:00 PM</span>
          </div>
          <div class="hour-row">
            <span>Saturday:</span>
            <span class="time">8:00 AM - 8:00 PM</span>
          </div>
          <div class="hour-row">
            <span>Sunday:</span>
            <span class="time">9:00 AM - 6:00 PM</span>
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
