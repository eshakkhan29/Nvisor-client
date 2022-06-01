import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import FaqSection from '../FaqSection/FaqSection';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <FaqSection></FaqSection>
        </main>
    );
};

export default Home;