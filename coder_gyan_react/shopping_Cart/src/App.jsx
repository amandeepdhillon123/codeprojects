import React from "react";



 import {BrowserRouter as Aman,Routes,Route,Link} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
  return (
    <>

    <Aman>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
    </Routes>
    </Aman>
    </>
    
      
  );
};

export default App;
