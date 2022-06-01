import React from 'react';
import './AboutUs.css';
import image from '../../../image/about.png';
import { BiCheckCircle } from 'react-icons/bi';

const AboutUs = () => {
    return (
        <section className='mt-5 pt-5'>
            <div className='row g-0 align-items-center'>
                <div className='col-lg-6 left-half'>
                    <div className='w-75 m-auto m-lg-0'>
                        <h1 className='section-title'>ABOUT US</h1>
                        <h2 className='about-heading'>We are Business Consulting Agency.</h2>
                        <p className='paragraph'>Sense of mere tranquil existence, that I neglect my talents should be incapable of drawing a single</p>
                        <div className='my-5'>
                            <p className='mb-3 paragraph'><BiCheckCircle className='me-3  check-icon' />Neglect should be Incapable of drawing</p>
                            <p className='mb-3 paragraph'><BiCheckCircle className='me-3  check-icon' />Present moment yet feel that</p>
                            <p className='mb-3 paragraph'><BiCheckCircle className='me-3  check-icon' />Grearer artist than now while the lovely valley</p>
                        </div>
                        <div className='my-5'>
                            <div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h5>Consulting</h5>
                                    <p>86%</p>
                                </div>
                                <div className=' position-relative'>
                                    <div className='line mt-0'></div>
                                    <div className='down-line'></div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <h5>Marketing</h5>
                                    <p>75%</p>
                                </div>
                                <div className=' position-relative'>
                                    <div className='line-75 mt-0'></div>
                                    <div className='down-line'></div>
                                </div>
                            </div>
                        </div>
                        <div className='my-5 pt-5'>
                            <button className='btn-about'>More About Us</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 p-2 p-lg-0 mt-3 mt-lg-0'>
                    <img className='parsons-image' src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;