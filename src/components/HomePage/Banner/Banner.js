import React from 'react';
import './Banner.css';
import Header from '../Header/Header';

const Banner = () => {
    return (
        <section className='banner-section'>
            <Header></Header>
            <div className='container p-0'>
                <div className='row g-0'>
                    <div className='col-lg-6'>
                        <div className='p-lg-0 ps-5'>
                            <h1 className='banner-title mb-3 text-white '>Be wise & take  our advice</h1>
                            <p className='heading-p'>Serenity has taken possession of my entire soul</p>
                        </div>
                        <div className='ms-lg-0 text-end me-5'>
                            <button className='btn-main'>Get In Touch</button>
                        </div>
                    </div>
                    <div className='col-lg-6'>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;