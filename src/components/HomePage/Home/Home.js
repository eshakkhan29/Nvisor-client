import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import FaqSection from '../FaqSection/FaqSection';
import Service from '../Service/Service';
import ServiceProvider from '../ServiseProvider/ServiceProvider';
import TeamMembers from '../TeamMembers/TeamMembers';
// import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <FaqSection></FaqSection>
            <TeamMembers></TeamMembers>
            <ServiceProvider></ServiceProvider>
            {/* <Testimonials></Testimonials> */}
            <Blogs></Blogs>
        </main>
    );
};

export default Home;