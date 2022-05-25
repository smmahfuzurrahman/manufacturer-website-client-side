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
    const url = `http://localhost:5000/myorder/${id}`;

    const { data, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container'>
            <div class="card">
                <div class="card-body">
                    <h3>Hello {user.displayName}</h3>
                    <h5 class="card-title">Please For: {data.name}</h5>
                    <p class="card-text">Please Pay: ${data.price}</p>

                </div>
            </div>

            <div class="card">
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