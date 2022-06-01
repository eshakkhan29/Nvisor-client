import React from 'react';
import './FaqSection.css';
import image from '../../../image/faq-image.png';
import { Accordion } from 'react-bootstrap';
import icon1 from '../../../image/bs-icon/boost.png'

const FaqSection = () => {
    return (
        <section className=' overflow-hidden'>
            <div className='row g-0 flex-column-reverse flex-lg-row align-items-center'>
                <div className='col-lg-6'>
                    <img className='parsons-image pe-lg-5' src={image} alt="" />
                </div>
                <div className='col-lg-6 right-half'>
                    <div className='service-heading m-auto m-lg-0'>
                        <h1 className='section-title'>FAQ</h1>
                        <h2 className='about-heading'>Provide Best Services For You</h2>
                    </div>
                    <p className='paragraph'>Sense of mere tranquil existence, that I neglect my talents be incapable of drawing a single</p>
                    <div className='mt-5'>
                        <Accordion>
                            <Accordion.Item className='border-bottom border-0' eventKey="0">
                                <Accordion.Header>Possession of my entire soul, like these sweet mornings</Accordion.Header>
                                <Accordion.Body>
                                    Enjoy with my whole heart. I am alone, and feel the charm existence in this
                                    spot, which was created for the bliss of souls like mine. I am so happy, my
                                    friend, so absorbed in the exquisite sense of mere tranquil
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='border-bottom border-0' eventKey="1">
                                <Accordion.Header>Sense of mere tranquil existence, that I neglect my talents</Accordion.Header>
                                <Accordion.Body>
                                    Enjoy with my whole heart. I am alone, and feel the charm existence in this
                                    spot, which was created for the bliss of souls like mine. I am so happy, my
                                    friend, so absorbed in the exquisite sense of mere tranquil
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className='border-bottom border-0' eventKey="2">
                                <Accordion.Header>Entire soul, like these sweet mornings of spring</Accordion.Header>
                                <Accordion.Body>
                                    Enjoy with my whole heart. I am alone, and feel the charm existence in this
                                    spot, which was created for the bliss of souls like mine. I am so happy, my
                                    friend, so absorbed in the exquisite sense of mere tranquil
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className='Business-summary d-flex align-items-center justify-content-around'>
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className='d-flex align-items-center'>
                            <img className='me-3 icon' src={icon1} alt="" />
                            <div>
                                <h2 className='text-white summary-title'>4541</h2>
                                <p className='summary-text'>Project Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className='d-flex align-items-center'>
                            <img className='me-3 icon' src={icon1} alt="" />
                            <div>
                                <h2 className='text-white summary-title'>4541</h2>
                                <p className='summary-text'>Project Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className='d-flex align-items-center'>
                            <img className='me-3 icon' src={icon1} alt="" />
                            <div>
                                <h2 className='text-white summary-title'>4541</h2>
                                <p className='summary-text'>Project Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className='d-flex align-items-center'>
                            <img className='me-3 icon' src={icon1} alt="" />
                            <div>
                                <h2 className='text-white summary-title'>4541</h2>
                                <p className='summary-text'>Project Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;