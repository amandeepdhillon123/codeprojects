import React from "react";
import { BrowserRouter as Aman, Routes, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
  return (
    <>
      <Aman>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </Aman>
    </>
  );
};

export default App;
