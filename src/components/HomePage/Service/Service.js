import React from 'react';
import './Service.css';
import { BsArrowRight } from 'react-icons/bs';
import icon1 from '../../../image/Icon/Mobile.png';
import icon2 from '../../../image/Icon/Pen.png';
import icon3 from '../../../image/Icon/Mike.png';
import icon4 from '../../../image/Icon/Rate.png';
import icon5 from '../../../image/Icon/Setting.png';

const Service = () => {
    return (
        <section className='service-section height-bg py-5 my-5'>
            <div className='container row-padding'>
                <div className='service-heading m-auto m-lg-0'>
                    <h1 className='section-title'>SERVICES</h1>
                    <h2 className='about-heading'>Get our best services for your business growth</h2>
                </div>
                <div className='row g-4 my-3'>
                    <div className="col-3">
                        <div className='p-4 bg-white'>
                            <h2 className='card-count'>01</h2>
                            <h2 className='card-title'>Mobile <br /> development</h2>
                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='p-4 bg-white service-col active'>
                            <h2 className='card-count'>02</h2>
                            <h2 className='card-title'>UI/Ux <br /> design</h2>
                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details active-p'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='p-4 bg-white'>
                            <h2 className='card-count'>03</h2>
                            <h2 className='card-title'>Digital <br /> Marketing</h2>

                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='p-4 bg-white service-col-2'>
                            <h2 className='card-count'>04</h2>
                            <h2 className='card-title'>Market <br /> analysis</h2>
                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='p-4 bg-white'>
                            <h2 className='card-count'>05</h2>
                            <h2 className='card-title'>Process <br /> development</h2>
                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon5} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='p-4 bg-white service-col'>
                            <h2 className='card-count'>06</h2>
                            <h2 className='card-title'>UI/Ux <br /> design</h2>
                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='p-4 bg-white'>
                            <h2 className='card-count'>07</h2>
                            <h2 className='card-title'>Mobile <br /> development</h2>
                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className='p-4 bg-white service-col-2'>
                            <h2 className='card-count'>08</h2>
                            <h2 className='card-title'>Digital <br /> Marketing</h2>
                            <div className='d-flex justify-content-between align-items-end'>
                                <p className='see-details'>See Details <span><BsArrowRight /></span> </p>
                                <img src={icon3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;