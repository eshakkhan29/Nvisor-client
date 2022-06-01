import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
        </main>
    );
};

export default Home;