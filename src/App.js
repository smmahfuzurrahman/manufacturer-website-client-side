import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import ProductInfo from './Components/Home/ProductInfo';
import MyOrder from './Components/MyOrder/MyOrder';
import Payment from './Components/MyOrder/Payment';
import Navbar from './Components/Shared/Navbar';
import Login from './Components/User/Login';
import RequireAuth from './Components/User/RequireAuth';
import SignUp from './Components/User/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products/:productsId' element={<RequireAuth><ProductInfo/></RequireAuth>}></Route>
        <Route path='/myorder' element={<RequireAuth><MyOrder /></RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path="payment/:id" element={<Payment></Payment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
