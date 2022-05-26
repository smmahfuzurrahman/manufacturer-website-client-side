import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    console.log(manageProduct);
    const handleItemDelete = id => {
        const alert = window.confirm("Confirm Delete");
        if (alert) {
            const url = `https://shrouded-plains-58641.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainItem = manageProduct.filter(book => book._id !== id);
                    setManageProduct(remainItem);
                })

            return <Loading></Loading>
        }
    }
    useEffect(() => {
        fetch('https://shrouded-plains-58641.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
            {
                manageProduct.map(product =>
                    <div>
                        <div class="card card-compact w-full h-full bg-base-100 shadow-md">
                            <figure>
                                <img className='w-60 h-60 p-5' src={product.img} alt="Shoes" />
                            </figure>
                            <div class="card-body text-left">
                                <h2 class="card-title">{product.name}</h2>
                                <p>{product.description}</p>
                                <p className='text-lg font-bold'>Quantity: {product.availavleQuantity}</p>
                                <p className='text-lg font-bold'>Minium Order: {product.MinimumOrder}</p>
                                <p className='text-lg font-bold'>Price: ${product.price}</p>
                                <div class="card-actions justify-center">
                                    <button className='btn btn-success' onClick={() => handleItemDelete(product._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ManageProduct;