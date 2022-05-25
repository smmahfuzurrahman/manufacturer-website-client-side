import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl text-center lg:text-left font-bold text-purple-500'>Welcome To Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {/* {user && <>


                    </>} */}
                    {admin ? <>
                        <li><Link to="/dashboard/myprofile"> My Profile</Link></li>
                        <li><Link to="/dashboard/users">All User</Link></li>
                        <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>
                        <li><Link to="/dashboard/allorder" className='text-left'>Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                    </> :
                        <>
                            <li><Link to="/dashboard/addreview"> Add Review</Link></li>
                        </>}
                </ul>
            </div>

        </div>
    );
};

export default Dashboard;