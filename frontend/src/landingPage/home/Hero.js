import React from 'react';

function Hero() {
    return ( 
        <section style={{backgroundColor:"#2E8BC0",height:"60vh", alignItems:"center", justifyContent:"center",color:"whilte"}}>
            <div className='container p-3' >
                <div className='row mt-5'>
                    <div className='col-7 col-sm-12' >
                        <h6 className='mt-5 hero-section-text'>Clean Clothes, Fresh Start</h6>
                        <p className='mt-3 hero-section-text'>Professional laundry and dry-cleaning service with free pickup and delivery. Experience the convenience of pristine clothes delivered to your door.</p>
                        <button type="button" class="btn btn-light mt-2">Book Pickup Now</button>
                    </div>
                    <div className='col-5'></div>
                </div>
            </div>
        </section>
     );
}

export default Hero;