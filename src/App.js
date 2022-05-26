import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import AddReview from './Components/AddReview/AddReview';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import Payment from './Components/Dashboard/Payment';
import Users from './Components/Dashboard/Users';
import Home from './Components/Home/Home';
import ProductInfo from './Components/Home/ProductInfo';
import Navbar from './Components/Shared/Navbar';
import Login from './Components/User/Login';
import RequireAuth from './Components/User/RequireAuth';
import SignUp from './Components/User/SignUp';
import UserProfile from './Components/UserProfile/UserProfile';
import 'react-toastify/dist/ReactToastify.css';
import ManageProduct from './Components/Dashboard/ManageProduct';
import AddProduct from './Components/Dashboard/AddProduct';
import ManageAllOrder from './Components/Dashboard/ManageAllOrder';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/Shared/NotFound';
import Blogs from './Components/Home/Blog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/products/:productsId' element={<RequireAuth><ProductInfo /></RequireAuth>}></Route>
        <Route path='/myorder' element={<RequireAuth><MyOrder /></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="myprofile" element={<UserProfile />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="manageproduct" element={<ManageProduct />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="allorder" element={<ManageAllOrder />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="payment/:id" element={<Payment></Payment>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
