import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    const goToService = () => {
        navigate('/service');
    }
    return (
        <>
        <section id ="HeroService">
            <div className='container-fluid'>
                <div className='row text-center'>
                    <p className='fs-6'>About DryWELL</p>
                    <p className='fs-5'>Making laundry simple and sustainable since 2018. We're passionate about providing <br/>exceptional service while caring for the environment.</p>
                </div>
            </div>
            
        </section>
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src="/images/Story.jpg" className="story-image" alt="Our Story" />
                </div>
                <div className='col-6 mt-3 mb-3'>
                    <h5 className="mt-3 " style = {{color : "#2E8BC0"}}>Our Story</h5>
                    <p className='p-3' style ={{lineHeight:"1.8",color:"#555"}}>FreshFold Laundry was born from a simple idea: laundry shouldn't be a chore that takes away from the things you love. Founded in 2018 by Sarah Mitchell, we started with a single van and a commitment to exceptional service.
                        Today, we're proud to serve thousands of customers across the city, providing professional laundry and dry-cleaning services with free pickup and delivery. But our mission hasn't changed - we're still dedicated to making your life easier while treating your clothes with the utmost care.
                        What sets us apart is our commitment to sustainability. We use eco-friendly detergents, energy-efficient machines, and biodegradable packaging. Because we believe clean clothes shouldn't come at the cost of a clean planet.
                    </p>
                    <button type="button" class="btn btn-primary customer-btn-color " onClick={goToService}>Explore Our Services</button>
                </div>
            </div>
        </div>
        </>
     );
}

export default Hero;