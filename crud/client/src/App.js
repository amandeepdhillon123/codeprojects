import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import {Route,Routes} from "react-router-dom"
import Edit from './component/Edit';
import Details from './component/Details';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path="/"  Component={Home}/>
        <Route path="/register" Component={Register}/>
        <Route path="/edit/:id" Component={Edit}/>
        <Route path="/view/:id" Component={Details}/>
      </Routes>
 
    
    </>
  );
}

export default App;
