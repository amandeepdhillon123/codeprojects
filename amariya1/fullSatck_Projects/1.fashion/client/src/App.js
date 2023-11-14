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
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminProductspage from './pages/Admin/AdminProductspage';
import CommonLayoutAdmin from './pages/Admin/CommonLayoutAdmin';
import AddProducts from './pages/Admin/AddProducts';
import AddCategory from './pages/Admin/AddCategory';
import Orders from './pages/Admin/Order';
function App() {
  return (
    <>
   
      <Routes>
                {/* admin routes */}
                <Route path='/admin/dashboard'element={ <CommonLayoutAdmin><AdminDashboard/></CommonLayoutAdmin>}/>
                <Route path='/admin/addcategory'element={ <Layout><AddCategory/></Layout>}/>
                <Route path='/admin/addproducts'element={ <Layout><AddProducts/></Layout>}/>
                <Route path='/admin/products'element={ <CommonLayoutAdmin><AdminProductspage/></CommonLayoutAdmin>}/>
                <Route path='/admin/orders'element={ <CommonLayoutAdmin><Orders/></CommonLayoutAdmin>}/>
                <Route path='/admin/login'element={ <Layout><AdminLogin/></Layout>}/>
              
         {/*  user routes */}
        <Route path='/'element={ <Layout><Home/></Layout>}/>
        <Route path='/products' element= {<Layout><ProductPage/></Layout>}/>
        <Route path='/productdetails/:id' element={<Layout><ProductDetailsPage/></Layout>}/>
        <Route path='/carts' element={<Layout><Carts/></Layout>}/>
        <Route path='/userprofile' element={<Layout><UserProfile/></Layout>}/>
        <Route path='/login' element={<Layout><Login/></Layout>}/>
        <Route path='/register' element={<Layout><Register/></Layout>}/>
        <Route path='/forgotpassword' element={<Layout><ForgotPassword/></Layout>}/>
        <Route path='/resetpassword/:id/:token' element={<Layout><ResetPassword/></Layout>}/>
        <Route path='/shipping' element={<Layout><Shipping/></Layout>}/>
        <Route path='/checkout' element={<Layout><Checkout/></Layout>}/>
      </Routes>
       
     
    </>
  );
}

export default App;
