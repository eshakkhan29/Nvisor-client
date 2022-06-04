import React from 'react';
import './Blogs.css';
import blogs1 from '../../../image/blogs-images/Blog1.png'
import blogs2 from '../../../image/blogs-images/Blog2.png'
import blogs3 from '../../../image/blogs-images/Blog3.png'
import { BsArrowRightCircleFill } from 'react-icons/bs';


const Blogs = () => {
    return (
        <section>
            <div className='text-center my-4'>
                <h1 className='section-title'>BLOG</h1>
                <h2 className='about-heading'>Check Our Latest Insides.</h2>
            </div>
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-4 position-relative">
                        <img className=' img-fluid' src={blogs1} alt="" />
                        <div className='blogs-info text-white'>
                            <p className='blogs-date'>AUG 8, 2021</p>
                            <p className='blogs-text'>Strikes the upper surface of the impenetrable readab</p>
                            <span className='fs-2 text-white'><BsArrowRightCircleFill /> </span>
                        </div>
                    </div>
                    <div className="col-lg-4 position-relative">
                        <img className=' img-fluid' src={blogs2} alt="" />
                        <div className='blogs-info text-white'>
                            <p className='blogs-date'>AUG 8, 2021</p>
                            <p className='blogs-text'>Foliage of my trees, and but a few stray around water</p>
                            <span className='fs-2 text-white'><BsArrowRightCircleFill /> </span>
                        </div>
                    </div>
                    <div className="col-lg-4 position-relative">
                        <img className=' img-fluid' src={blogs3} alt="" />
                        <div className='blogs-info text-white'>
                            <p className='blogs-date'>AUG 8, 2021</p>
                            <p className='blogs-text'>Gleams steal into the inner sub wooter sanctuary</p>
                            <span className='fs-2 text-white'><BsArrowRightCircleFill /> </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;