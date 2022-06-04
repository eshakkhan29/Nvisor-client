import React from 'react';
import './Testimonials.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Testimonials = () => {
    return (
        <section className='py-5'>
            <div className='container'>
                <div className='text-center my-4'>
                    <h1 className='section-title'>TESTIMONIALS</h1>
                    <h2 className='about-heading'>What Our Clients Say</h2>
                </div>
                <div className='my-5'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='text-center info'>
                                <p className='paragraphs'>Deridion dtrikes the upper surface of the impenetrable
                                    foliage of my trees, and but a few story gleams steal into
                                    the inner sanctuary about the contentand but a few stray
                                    gleams steal arrount</p>
                                <div className='my-3'>
                                    <p className='fw-bold text-uppercase'>GORNAL NAGLA | BUSINESS OWNER</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center info'>
                                <p className='paragraphs'>Deridion dtrikes the upper surface of the impenetrable
                                    foliage of my trees, and but a few story gleams steal into
                                    the inner sanctuary about the contentand but a few stray
                                    gleams steal arrount</p>
                                <div className='my-3'>
                                    <p className='fw-bold text-uppercase'>GORNAL NAGLA | BUSINESS OWNER</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;