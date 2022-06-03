import React from 'react';
import './ServiceProvider.css';
import { AiOutlineCheck } from 'react-icons/ai';

const ServiceProvider = () => {
    return (
        <section className='service-provider my-5 py-4'>
            <div className="container my-5 py-5">
                <div className='provided-context mt-5 py-5'>
                    <h1 className='service-provider-heading'>We Are Providing Innovative Corporate Services</h1>
                    <p className='paragraph text-white-50'>Entences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic</p>
                    <div className='my-5'>
                        <h3 className='sub-heading'>Advance Consultancy Services</h3>
                        <p className=' text-white'><AiOutlineCheck className=' text-success fs-3' /> Nnorthographic life One day however</p>
                        <p className=' text-white'><AiOutlineCheck className=' text-success fs-3' /> Meridian sun strikes the surface</p>
                        <p className=' text-white'><AiOutlineCheck className=' text-success fs-3' /> Few stray gleams steal into the inner</p>
                        <div className='my-5 text-lg-start text-center'>
                            <button className='btn-find me-0 me-lg-3 mb-lg-0 mb-3'>Find More Services</button>
                            <button className='btn-get'>Get A Service Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceProvider;