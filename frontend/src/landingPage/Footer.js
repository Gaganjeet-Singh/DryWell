import React from 'react';

function Footer() {
    return ( 
        <footer style = {{backgroundColor : "#F4F7FA"}}>
            <div className='container '>
                <div className='row mt-5 mb-4 p-5 border-bottom'>
                    <div className='col-3'>
                        <h4 style = {{color:"#2E2E2E"}}>DryWELL Laundry</h4>
                        <p style = {{color:"#2E2E2E"}}>Professional laundry and dry-cleaning service. Clean clothes, fresh start.</p>
                    </div>
                    <div className='col-3'>
                        <h5 style = {{color:"#2E2E2E"}}>Quick Links</h5>
                        <a style = {{textDecoration:"none", color:"#0077B6"}} href =''>Home</a><br/>
                        <a style = {{textDecoration:"none",color:"#0077B6"}} href =''>Services</a><br/>
                        <a style = {{textDecoration:"none",color:"#0077B6"}} href =''>Pricing</a><br/>
                        <a style = {{textDecoration:"none",color:"#0077B6"}} href =''>About Us</a>
                    </div>
                    <div className='col-3'>
                        <h5 style = {{color:"#2E2E2E"}}>Services</h5>
                        <a style = {{textDecoration:"none",color:"#0077B6"}} href = ''>Wash & Fold</a><br/>
                        <a style = {{textDecoration:"none",color:"#0077B6"}} href = ''>Dry Cleaning</a><br/>
                        <a style = {{textDecoration:"none",color:"#0077B6"}} href = ''>Ironing Service</a><br/>
                        <a style = {{textDecoration:"none",color:"#0077B6"}} href = ''>Stain Removal</a>
                    </div>
                    <div className='col-3'>
                        <h5 style = {{color:"#2E2E2E"}}>Contact Us</h5>
                        <p style = {{color:"#2E2E2E"}}><i class="fa fa-phone" aria-hidden="true"></i> +1 (555) 123-4567</p>
                        <p style = {{color:"#2E2E2E"}}><i class="fa fa-envelope-o" aria-hidden="true"></i>hello@drywell.com</p>
                        <p style = {{color:"#2E2E2E"}}><i class="fa fa-map-marker" aria-hidden="true"></i>123 Clean Street, Fresh City, FC 12345</p>
                    </div>
                </div>
                <div className='row mt-3 mb-5 text-center'>
                    <p style = {{color:"#2E2E2E"}}>© 2025 DryWELL Laundry. All rights reserved.</p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;