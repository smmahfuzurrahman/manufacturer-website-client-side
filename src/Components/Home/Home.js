import React from 'react';
import Review from '../Review/Review';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;