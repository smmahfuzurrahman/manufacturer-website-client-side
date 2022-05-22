import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import ProductInfo from './Components/Home/ProductInfo';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products/:productsId' element={<ProductInfo></ProductInfo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
