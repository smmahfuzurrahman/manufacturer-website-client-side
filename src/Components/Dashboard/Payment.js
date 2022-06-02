import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheekOutForm';


const stripePromise = loadStripe('pk_test_51L17wJB5gQDzsDTV794q6qLFlXPE2P4Tnyb2QFzj6HNxxtsEVDs8ycmo3F0ZNkf88FvUjQU2AC6x9YVLaGHw5jVi00xhXP16On');

const Payment = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const url = `https://stormy-dusk-99238.herokuapp.com/myorder/${id}`;

    const { data, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(data);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container'>
            <div class="card w-96 bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <h2 class="card-title">Hello, {user.displayName}</h2>
                    <p className='text-left font-bold'>Product Name : {data.name}</p>
                    <p className='text-left font-bold text-red-500'>Total Price: ${data.price}.00</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>

            <div class="card w-auto max-w-md shadow-2xl bg-base-100 mx-auto text-black">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;