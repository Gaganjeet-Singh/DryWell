import React from 'react';

function Choose() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5'>
                <h4>Why Choose DryWELL?</h4>
                <p>Experience the best laundry service with our commitment to quality, convenience, and sustainability.</p>
            </div>
            <div className='row text-center mt-5 mb-5'>
                <div className='col-4 p-3  '>
                    <i class="fa fa-truck fa-3x" aria-hidden="true" ></i>
                    <h5 className='mt-3'>Free Pickup & Delivery</h5>
                    <p>We come to you! Schedule a convenient time and we'll handle the rest. No minimum order required.</p>
                </div>
                <div className='col-4 p-3  '>
                    <i class="fa fa-leaf fa-3x" aria-hidden="true"></i>
                    <h5 className='mt-3'>Eco-Friendly Cleaning</h5>
                    <p>We use environmentally safe detergents and energy-efficient processes to protect your clothes and our planet.</p>
                </div>
                <div className='col-4 p-3 '>
                    <i class="fa fa-clock-o fa-3x" aria-hidden="true"></i>
                    <h5 className='mt-3'>Fast Service</h5>
                    <p >Need it fast? Get your clothes back cleaned, pressed, and ready to wear in just 24 hours.</p>
                </div>
            </div>
        </div>
     );
}

export default Choose;