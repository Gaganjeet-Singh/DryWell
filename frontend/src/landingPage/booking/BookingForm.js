import React from 'react';

function BookingForm() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-6  mb-5 p-5 booking-form'>
                    <h6 style = {{color : "#2E8BC0"}}>Booking Details</h6>
                    <p className = 'text-muted'>Fill in your information and we'll be there!</p>
                    <div className="mb-3">
                        <label htmlfor = "fullname" className="form-label">Full Name *</label>
                        <input className="form-control" type ="text"  name="fullname"/>
                    </div>
                    <div className="mb-3">
                        <label htmlfor = "phone" className="form-label">Phone Number *</label>
                        <input className="form-control"   name="phone"/>
                    </div>
                    <div className="mb-3">
                        <label htmlfor = "email" className="form-label">Email Address *</label>
                        <input className="form-control" type ="text"  name="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlfor = "pickupdate" className="form-label">Pickup Date *</label>
                        <input className="form-control"  type ="date"  name="pickupdate"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="serviceType" className="form-label">
                            Service Type *
                        </label>
                        <select
                            className="form-control"
                            name="serviceType"
                            id="serviceType"
                            defaultValue=""
                        >
                            <option value="" disabled>
                            Select service
                            </option>
                            <option value="wash_fold">Wash & Fold</option>
                            <option value="dry_cleaning">Dry Cleaning</option>
                            <option value="ironing">Ironing Service</option>
                            <option value="shoe_cleaning">Shoe Cleaning</option>
                            <option value="sofa_&_carpet_cleaning">Sofa & Carpet Cleaning</option>
                            <option value="curtain_&_blanket_cleaning">Curtain & Blanket Cleaning</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlfor = "pickupAddress" className="form-label">Pickup Address *</label>
                        <textarea className="form-control" type ="text"  name="pickupAddress" rows ="5"/>
                    </div>

                    <button className="btn btn-primary w-100 mt-3" style={{backgroundColor:"#2E8BC0"}}>
                        Send Message
                    </button>

                </div>
                <div className='col-6 mt-5 mb-5'>
                    <div class="business-card mt-3 ">
        
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

                <div class="contact-card mt-3">
                    <div class="icon-wrapper">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="content">
                        <h5 class="title">Need help ?</h5>
                        <p class="subtitle">Call us anytime during business hours</p>
                        <button className="booking-contact" >Contact Us</button>
                    </div>
                </div>

                <div class="expect-box mt-3">
                    <h4 class="expect-title">What to Expect</h4>

                    <div class="expect-item">
                        <span class="expect-number">1</span>
                        <p>Our driver will arrive during your selected date.</p>
                    </div>

                    <div class="expect-item">
                        <span class="expect-number">2</span>
                        <p>We'll provide a bag for your items and count them in front of you</p>
                    </div>

                    <div class="expect-item">
                        <span class="expect-number">3</span>
                        <p>Track your order status via email or SMS notifications</p>
                    </div>

                    <div class="expect-item">
                        <span class="expect-number">4</span>
                        <p>Receive your fresh, clean laundry within 24–48 hours</p>
                    </div>
                    </div>


                </div>
            </div>
        </div>
     );
}

export default BookingForm;