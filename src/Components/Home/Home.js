import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import ProductInfo from './ProductInfo';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductInfo></ProductInfo>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;