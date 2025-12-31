import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg border-bottom">
            <div class="container p-2">
                <a class="navbar-brand" href="#" id = "NavLogo">DryWELL</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <form>
                    <ul class="navbar-nav  mb-lg-0 ">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to = '/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to = '/service'>Service</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to ='/about'>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to = "/contact">Contact</Link>
                        </li>
                        <button type="button" class="btn btn-primary customer-btn-color">Book Pickup</button>
                    </ul>
                    
                </form>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;