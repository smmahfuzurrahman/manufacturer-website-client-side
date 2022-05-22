import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Product = ({ product }) => {
    const { name, img, description, quantity, price, _id } = product;
    const navigate = useNavigate();
    const navigateInventory = id => {
        navigate(`/products/${id}`);
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card card-compact w-full bg-base-100 shadow-xl d-flex grid grid-cols-1">
                <figure>
                    <img className='w-60' src={img} alt="Shoes" />
                </figure>
                <div class="card-body text-left">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigateInventory(_id)} class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;