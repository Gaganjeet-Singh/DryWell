import React  , {useState}from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function SignupForm() {
    const [formData,setformData] = useState({
        username : "",
        email : "",
        password : ""
    });

    const HandleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const HandleSubmit = (e) => {
         e.preventDefault();  
        console.log(formData);
    }
    return ( 
        <>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <div className = 'col-3'>
                        
                    </div>
                    <div className='col-6  mt-5 mb-5 p-5 signupform'>
                        <h5 className='text-center'>Signup Now</h5>
                        <form onSubmit={HandleSubmit}>
                            <div className="form-group mt-4">
                                <label htmlFor="username">Username : </label>
                                <input className="form-control mt-2" name = "username" placeholder='enter username' type = "text" value = {formData.username} onChange={HandleChange}/>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="username">Email : </label>
                                <input className="form-control mt-2" name = "email" placeholder='email' type = "email" value = {formData.email} onChange={HandleChange}/>
                            </div>
                            <div className="form-group mt-4">
                                <label htmlFor="password">Password : </label>
                                <input className="form-control mt-2" name = "password" placeholder='enter password' type = "password" value = {formData.password} onChange={HandleChange}/>
                            </div>
                            <button className="btn-primary-full mt-4">Signup now</button>
                            <div>
                                <p className='mt-3 text-center'>Already have account?<Link to="/login" style = {{textDecoration:"none"}}>Login</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className = 'col-3'>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}

export default SignupForm;