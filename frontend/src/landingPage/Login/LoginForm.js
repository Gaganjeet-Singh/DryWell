import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [formData, setformData] = useState({
    username: "",
    password: ""
  });

  const HandleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row justify-content-center py-4 py-md-5">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">

            <div className="signup-card p-4 p-md-5">
              <h4 className="text-center mb-4">Login</h4>

              <form onSubmit={HandleSubmit}>
                <div className="form-group mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={HandleChange}
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={HandleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn signup-btn w-100">
                  Log in
                </button>

                <p className="text-center mt-3 mb-0">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-decoration-none">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LoginForm;
