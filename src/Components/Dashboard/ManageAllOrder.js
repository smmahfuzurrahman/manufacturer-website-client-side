import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { signOut } from 'firebase/auth';
import useAdmin from '../Hook/useAdmin';


const ManageAllOrder = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [myOrder, setMyOrder] = useState([]);
    const navigate = useNavigate();
    console.log(myOrder);
    const handleItemDelete = id => {
        const alert = window.confirm("Confirm Delete");
        if (alert) {
            const url = `https://stormy-dusk-99238.herokuapp.com/myorder/${id}`;
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
        fetch('https://stormy-dusk-99238.herokuapp.com/allorder', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((order, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <th>{order.userName}</th>
                                    <th>{order.email}</th>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity}</td>
                                    <td>{!order.paid && <div>
                                        <p className='text-error'>Un Paid</p>
                                    </div>
                                    }
                                        {(order.price && order.paid) &&
                                            <div>
                                                <p className='text-success'>Paid</p>
                                            </div>
                                        }</td>
                                    <td>{
                                        order.paid ? <button onClick={() => handleItemDelete(order._id)} class="btn btn-xs btn-error disabled" disabled>Delete</button> : <button onClick={() => handleItemDelete(order._id)} class="btn btn-xs btn-error" >Delete</button>
                                    }
                                    </td>

                                    <td><span> {order.transactionId}</span></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;