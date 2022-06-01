import React from 'react';
import './Banner.css';
import { GoSearch } from 'react-icons/go';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='banner-section position-relative mb-5 pb-5'>
            <Header></Header>
            <div className='container p-0'>
                <div className=' d-lg-none text-center my-5 position-relative'>
                    <input className='Search-input' placeholder='Search...' type="text" name="" id="" />
                    <span className='position-absolute fs-1 Search-input-icon'><GoSearch /></span>
                </div>
                <div className='row g-0 mt-5 pt-5'>
                    <div className='col-lg-6'>
                        <div className='p-lg-0 ps-5'>
                            <h1 className='banner-title mb-3 text-white '>Be wise & take  our advice</h1>
                            <p className='heading-p'>Serenity has taken possession of my entire soul</p>
                        </div>
                        <div className='ms-lg-0 text-lg-start text-end me-5'>
                            <button className='btn-main'>Get In Touch</button>
                        </div>
                    </div>
                    <div className='col-lg-6'>

                    </div>

                </div>
            </div>
            <div className='d-none d-lg-block position-absolute'>
                <div className='w-25 social-div d-flex flex-column'>
                    <Link className='social-icon' to='/'><FaFacebookF /></Link>
                    <Link className='social-icon' to='/'><AiOutlineTwitter /></Link>
                    <Link className='social-icon' to='/'><FaLinkedinIn /></Link>
                    <Link className='social-icon' to='/'><FaPinterestP /></Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;