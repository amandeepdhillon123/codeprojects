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
       
       </Routes>
       
     </Layout>
    </>
  );
}

export default App;
