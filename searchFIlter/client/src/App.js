
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers"
import Home from './pages/Home/Home';
import Edit from "./pages/Edit/Edit"
import Profile from "./pages/Profile/Profile"
import Register from "./pages/Register/Register"
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Header/>
     <Routes>
       <Route path='/' Component={Home}/>
        <Route path='/register' Component={Register}/>
        <Route path='/edit/:id' Component={Edit}/>
        <Route path='/userprofile/:id'  Component={Profile}/>

     </Routes>
    </>
  );
}

export default App;
