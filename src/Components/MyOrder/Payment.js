import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckOutForm from './CheekOutForm';


const stripePromise = loadStripe('pk_test_51L17wJB5gQDzsDTV794q6qLFlXPE2P4Tnyb2QFzj6HNxxtsEVDs8ycmo3F0ZNkf88FvUjQU2AC6x9YVLaGHw5jVi00xhXP16On');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/myorder/${id}`
    const { data: myOrder, isLoading } = useQuery([id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            myOrder={myOrder}
                        ></CheckOutForm>

                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;