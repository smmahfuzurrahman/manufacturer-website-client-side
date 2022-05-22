import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    console.log(product);
    const {name, img, description, quantity, price, _id} = product;
    const navigate = useNavigate();
    const navigateInventory = id =>{
        navigate(`/product/${id}`);
    }

    return (
        <div>
            <div class="card card-compact w-full bg-base-100 shadow-xl d-flex grid grid-cols-1">
                <figure>
                    <img className='w-60' src={img} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{product.description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={()=> navigateInventory(_id)} class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;