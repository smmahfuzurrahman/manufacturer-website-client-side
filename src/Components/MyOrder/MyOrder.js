import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [myOrder, setMyOrder] = useState([]);
    console.log(myOrder);
    const handleItemDelete = id => {
        const alert = window.confirm("Confirm Delete");
        if (alert) {
            const url = `http://localhost:5000/myorder/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainItem = myOrder.filter(book => book._id !== id);
                    setMyOrder(remainItem);
                })
            return <Loading></Loading>
        }
    }

    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/myorder?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th className=''>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((order, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity}</td>
                                    <td><button onClick={() => handleItemDelete(order._id)} class="btn btn-xs btn-error">Delete</button></td>
                                    <td>{(order.price && !order.paid) &&
                                        <Link to={`/payment/${order._id}`}>
                                            <button className='btn btn-xs btn-success'>Pay</button>
                                        </Link>
                                    }
                                        {(order.price && order.paid) &&
                                            <div>
                                                <p className='text-success'>Paid</p>
                                            </div>
                                        }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;