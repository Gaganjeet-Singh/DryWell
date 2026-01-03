import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
  <div className="container py-2">

    <Link className="navbar-brand fw-bold" to="/" id="NavLogo">
      DryWELL
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">

      {/* CENTER LINKS */}
      <ul className="navbar-nav mx-auto text-center mb-3 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
      </ul>

      {/* BUTTONS */}
      <div className="d-flex justify-content-center gap-2 ms-lg-auto">
        <button className="btn login-btn" onClick={() => navigate('/login')}>
          Log in
        </button>
        <button className="btn signup-btn" onClick={() => navigate('/signup')}>
          Sign up
        </button>
      </div>

    </div>
  </div>
</nav>

  );
}

export default Navbar;
