import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductInfo = () => {
    const { productsId } = useParams();
    console.log(productsId);
    const [productInfo, setProductInfo] = useState({});
    useEffect(() => {
        fetch()
            .then(res => res.json())
            .then(data => setProductInfo(data))
    }, [productsId])
    console.log(productInfo);

    return (
        <div>
            <h1>Name:{productsId}</h1>
        </div>
    );
};

export default ProductInfo;