import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';
const ProductInfo = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const { productsId } = useParams();
    const [productsInfo, setProductsInfo] = useState({});
    const [inputQuantity, setInputQuantity] = useState('');
    console.log(productsInfo);

    // const order = inputQuantity;
    useEffect(() => {
        fetch(`https://shrouded-plains-58641.herokuapp.com/products/${productsId}`)
            .then(res => res.json())
            .then(data => setProductsInfo(data))
    }, [productsId])
    const handleInputQuantity = event => {
        setInputQuantity(event.target.value);

    }
    const Order = () => {

        const quantity = parseInt(inputQuantity);
        const newPrice = Math.floor(quantity * productsInfo.price);
        if (parseInt(inputQuantity) <= parseInt(productsInfo.MinimumOrder)) {
           return alert("Please order more than 100");

        }
        else if (parseInt(inputQuantity) > parseInt(productsInfo.availavleQuantity)) {
            return alert("Stock Over");
        }
        const order = {
            price: newPrice,
            name: productsInfo.name,
            quantity: inputQuantity,
            userName: user.displayName,
            email: user.email,
        }
        const url = `https://shrouded-plains-58641.herokuapp.com/myorder`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast.success('Order Stored')
        if (typeof document !== 'undefined') {
            document.getElementById('quantity').value = ''
        }



    };
    return (
        <div>
            <div className='border bg-slate-100  w-4/6 mx-auto'>
                <span className=' text-lg font-bold text-sky-400 mx-10 '>User Name: {user.displayName}</span>
                <span className=' text-lg font-bold text-sky-400 mx-10'>User Email: {user.email}</span>
            </div>
            <div class="card lg:w-4/6 mx-auto shadow-xl lg:flex lg:flex-row">
                <img className='w-60 h-60 p-5' src={productsInfo.img} alt="" />
                <div class="card-body">
                    <h2 class=" text-xl font-bold text-left">{productsInfo.name}</h2>
                    <p className='text-left'>{productsInfo.description}</p>
                    <p className='text-left font-bold'>Available Quantity: {productsInfo.availavleQuantity}</p>
                    <p className='text-left font-bold text-red-500'>Minium Order: {productsInfo.MinimumOrder}</p>
                    <p className='text-left font-bold'>Price: ${productsInfo.price}</p>
                    <span className='text-left font-bold'> Order:
                        <input id='quantity' onChange={handleInputQuantity} type="number" placeholder="Quantity" class="mx-5 input input-sm input-info w-30 max-w-xs" />
                    </span>

                    {
                        admin ? <button onClick={() => Order(Order)} className='btn btn-sm btn-primary w-28' disabled>Order</button> : <button onClick={() => Order(Order)} className='btn btn-sm btn-primary w-28' >Order</button>
                    }


                </div>
            </div>
        </div>
    );
};

export default ProductInfo;

