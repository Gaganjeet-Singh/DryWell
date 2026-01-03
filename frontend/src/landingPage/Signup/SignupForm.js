import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link, Navigate } from 'react-router-dom';

import api from "../../api/axios";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const navigate = useNavigate();
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const HandleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const HandleError = (err) => 
    toast.error(err,{
        position : "top-center",
        autoClose: 5000,
    });
  

  const HandleSuccess = (msg) => 
    toast.success(msg, {
        position:"top-center",
        autoClose: 5000,
    });
  
    const HandleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post(
      "/signin",
      formData
    );

    const { message, success } = res.data;

    if (success) {
      HandleSuccess(message);
      setTimeout(() => {
        navigate('/login');
      },1000)
    } else {
      HandleError(message);
    }

  } catch (error) {
    if (error.response?.data?.message) {
      HandleError(error.response.data.message);
    } else {
      HandleError("Something went wrong");
    }
  } finally {
    setformData({
      username: "",
      email: "",
      password: ""
    });
  }
};


  return (
    <>
      <Navbar />
    <ToastContainer/>
      <div className="container">
        <div className="row justify-content-center py-4 py-md-5">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">

            <div className="signup-card p-4 p-md-5">
              <h4 className="text-center mb-4">Create Account</h4>

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

                <div className="form-group mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
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
                  Sign up
                </button>

                <p className="text-center mt-3 mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-decoration-none">
                    Login
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

export default SignupForm;
