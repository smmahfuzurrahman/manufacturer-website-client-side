import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductInfo = () => {
    const { productsId } = useParams();
    const [productsInfo, setProductsInfo] = useState({});
    const [inputQuantity, setInputQuantity] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productsId}`)
            .then(res => res.json())
            .then(data => setProductsInfo(data))
    }, [productsId])
    const handleInputQuantity = event => {
        setInputQuantity(event.target.value);
    }
    console.log(inputQuantity);
    return (

        <div class="card lg:w-4/6 mx-auto shadow-xl lg:flex lg:flex-row">
            <img className='w-60 h-60 p-5' src={productsInfo.img} alt="Shoes" />
            <div class="card-body">
                <h2 class=" text-xl font-bold text-left">{productsInfo.name}</h2>
                <p className='text-left'>{productsInfo.description}</p>
                <p className='text-left font-bold'>Available Quantity: {productsInfo.quantity}</p>
                <p className='text-left font-bold'>Price: ${productsInfo.price}</p>
                <span className='text-left font-bold'> Order:
                    <input onChange={handleInputQuantity} type="number" placeholder="Quantity" class="mx-5 input input-sm input-info w-30 max-w-xs" />
                </span>
                <button className='btn btn-sm btn-primary w-28'>Order</button>
            </div>
        </div>
    );
};

export default ProductInfo;


// if(inputQuantity.target.value >= 100){

// }
// else{
//     return alert("Order less then 100");
// }
