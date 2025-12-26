import React from 'react';

function Pickup() {
    return ( 
        <section id='HomeChoose'>
            <div className='container-fluid' >
            <div className='row text-center mt-5'>
                <h6 className='mt-2 mb-3'>Ready to Experience Fresh, Clean Laundry?</h6>
                <h4 className='mt-2 mb-4'>Schedule your first pickup today and discover why thousands trust FreshFold with their <br/>laundry.</h4>
                <button type="button" class="btn btn-light mt-2 mb-5" style = {{width:"17%",marginLeft:"40%", borderRadius:"20px"}}>Book Your Pickup Now</button>
            </div>
        </div>
        </section>
        
     );
}

export default Pickup;