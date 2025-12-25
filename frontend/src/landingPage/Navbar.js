import React from 'react';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg border-bottom">
            <div class="container p-2">
                <a class="navbar-brand" href="#">DryWELL</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <form>
                    <ul class="navbar-nav  mb-lg-0 ml-5">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                        <button type="button" class="btn btn-primary">Book Pickup</button>
                    </ul>
                    
                </form>
                </div>
            </div>
        </nav>
     );
}

export default Navbar;