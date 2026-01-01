import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#F4F7FA" }}>
      <div className="container py-5">

        {/* TOP FOOTER */}
        <div className="row g-4 border-bottom pb-4">

          {/* BRAND */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 style={{ color: "#2E2E2E" }}>DryWELL Laundry</h4>
            <p style={{ color: "#2E2E2E" }}>
              Professional laundry and dry-cleaning service. Clean clothes,
              fresh start.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 style={{ color: "#2E2E2E" }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#">Home</a></li>
              <li><a className="footer-link" href="#">Services</a></li>
              <li><a className="footer-link" href="#">Pricing</a></li>
              <li><a className="footer-link" href="#">About Us</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-6 col-md-3 col-lg-3">
            <h5 style={{ color: "#2E2E2E" }}>Services</h5>
            <ul className="list-unstyled">
              <li><a className="footer-link" href="#">Wash & Fold</a></li>
              <li><a className="footer-link" href="#">Dry Cleaning</a></li>
              <li><a className="footer-link" href="#">Ironing Service</a></li>
              <li><a className="footer-link" href="#">Stain Removal</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 style={{ color: "#2E2E2E" }}>Contact Us</h5>

            <p className="d-flex align-items-start gap-2 mb-2">
              <i className="fa fa-phone mt-1" />
              <span>+1 (555) 123-4567</span>
            </p>

            <p className="d-flex align-items-start gap-2 mb-2">
              <i className="fa fa-envelope mt-1" />
              <span>hello@drywell.com</span>
            </p>

            <p className="d-flex align-items-start gap-2 mb-0">
              <i className="fa fa-map-marker mt-1" />
              <span>
                123 Clean Street, Fresh City,<br />
                FC 12345
              </span>
            </p>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="row pt-4">
          <div className="col-12 text-center">
            <p className="mb-0" style={{ color: "#2E2E2E" }}>
              © 2025 DryWELL Laundry. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
