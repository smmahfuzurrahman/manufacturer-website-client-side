import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/products`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        e.target.reset();
    };
    return (
        <div className='additems mx-auto'>
            <h1 className='text-white mb-5'>Add review</h1>
            <div className='store-book'>
                {/* <div className='addbook'>
                    <img src={addbook} alt="" />
                </div> */}
                <form className='addbookfrom' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Product Name' className='input input-bordered w-full max-w-xs mb-5' {...register("name")} required /> <br />
                    <input placeholder='Product Available Quantity' className='input input-bordered w-full max-w-xs mb-5' {...register("availavleQuantity")} required /> <br />
                    <input placeholder='Product Minimum Order' className='input input-bordered w-full max-w-xs mb-5' {...register("MinimumOrder")} required /> <br />
                    <input placeholder='Product Price' className='input input-bordered w-full max-w-xs mb-5' {...register("price")} required /> <br />
                    <input placeholder='Product Img Link' className='input input-bordered w-full max-w-xs mb-5' {...register("img")} required /> <br />
                    <textarea placeholder='Prodduct Short description' className='input input-bordered w-full max-w-xs' {...register("description")} required /> <br />
                    <button className='btn add-book-button' type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;