import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = `https://stormy-dusk-99238.herokuapp.com/review`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        e.target.reset();
        toast('Thanks Your FeedBack');
    };
    return (
        <div className='additems mx-auto'>
            <h1 className='text-white mb-5'>Add review</h1>
            <div className='store-book'>
                <form className='addbookfrom' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Your Name' className='input input-bordered w-full max-w-xs mb-5' {...register("name")} required /> <br />
                    <input placeholder='Image Link' className='input input-bordered w-full max-w-xs mb-5' {...register("img")} required /> <br />
                    <textarea placeholder='Short Review' className='input input-bordered w-full max-w-xs' {...register("review")} required /> <br />
                    <button className='btn add-book-button' type="submit">Add Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;