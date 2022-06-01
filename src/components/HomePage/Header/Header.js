import React from 'react';
import './Header.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';
import { GoSearch } from 'react-icons/go';
import { BiChat } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
    return (
        <div className='py-0 py-lg-4 container position-relative overflow-hidden'>
            <div className='mobile-logo'>
                <img src={logo} alt="" />
            </div>
            <p className='text-white menu-icon m-0'><GiHamburgerMenu className='me-3 position-absolute d-lg-none mobile-menu-toggler end-0' /></p>
            <div className='d-flex flex-column flex-lg-row navigation-bar'>
                <div className='d-flex align-items-center d-lg-none bg-black menu-sm'>
                    <p className='text-white menu-icon m-0'><GiHamburgerMenu className='me-3' /></p>
                    <p className='text-white menu-icon m-0'>Menu</p>
                </div>
                <div className='nav-items m-auto flex-column flex-lg-row d-flex align-items-lg-center'>
                    <Link to="/home">Home +</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/about">Pages +</Link>
                    <Navbar.Brand className='logo-lg' to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Link to="/services">Services</Link>
                    <Link to="/blog">Blog  +</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='mt-4 mt-lg-0 pt-3 pt-lg-0 d-flex nav-contact align-items-center justify-content-center'>
                    <Link className='fs-4 text-white search-icon mx-3' to="/"><GoSearch /></Link>
                    <div className='d-flex justify-content-between'>
                        <Link className='fs-3 text-white mx-3' to="/"><BiChat /></Link>
                        <div className='text-white'>
                            <p className='m-0 fw-bold'>CALL US</p>
                            <p className='m-0 fw-bold'>+123-987458741</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;