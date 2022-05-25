import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import CheckOutForm from './CheekOutForm';

const stripePromise = loadStripe('pk_test_51L17wJB5gQDzsDTV794q6qLFlXPE2P4Tnyb2QFzj6HNxxtsEVDs8ycmo3F0ZNkf88FvUjQU2AC6x9YVLaGHw5jVi00xhXP16On');

const Payment = () => {
    const [payment, setPayment] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/myorder/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPayment(data));
    }, [])
    return (
        <div>
            {/* <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, { }</p>
                    <h2 class="card-title">Please Pay for{ }</h2>
                    <p>Please Pay : ${ }</p>
                </div>
            </div> */}
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            payment={payment}
                        ></CheckOutForm>

                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;