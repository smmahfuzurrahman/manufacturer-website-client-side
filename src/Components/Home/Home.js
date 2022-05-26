import React from 'react';
import Review from '../Dashboard/Review';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Message from './Message';
import Products from './Products';
import Shipment from './Shipment';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Message></Message>
            <Products></Products>
            <Review></Review>
            <Shipment></Shipment>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;