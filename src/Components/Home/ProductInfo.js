import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
    const {ProductsId} = useParams();
    const [productInfo, setProductInfo]= useState({});

    console.log(productInfo); 
    return (
        <div>
            
        </div>
    );
};

export default ProductInfo;