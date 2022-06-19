import React from 'react';
import Banner from '../../Components/Banner/Banner';
import NavigationBarPc from '../../Components/Shared/NavigationBarPc';
import RecentMoviesSlider from '../../Components/Slider/RecentMoviesSlider';

const Home = () => {
    return (
        <div>
            <NavigationBarPc></NavigationBarPc>
            <Banner></Banner>
            <RecentMoviesSlider></RecentMoviesSlider>
        </div>
    );
};

export default Home;