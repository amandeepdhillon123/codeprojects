import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './layouts/Layout';
import ProductPage from './pages/ProductsPage/ProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import { Routes, Route } from 'react-router-dom';
import Carts from './pages/carts/Carts';
import UserProfile from './pages/userprofile/UserProfile';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Shipping from './pages/shipping/Shipping';
import Checkout from './pages/checkoutPage/Checkout';
function App() {
  return (
    <>
     <Layout>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/productdetails/:id' element={<ProductDetailsPage/>}/>
        <Route path='/carts' element={<Carts/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/resetpassword/:id/:token' element={<ResetPassword/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
       
       </Routes>
       
     </Layout>
    </>
  );
}

export default App;
