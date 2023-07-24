import "./App.css";
import Home from "./components/Home";
import Help from "./components/Help";
import About from "./components/About";
import Main from "./components/Main";
import { Route,NavLink,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <ul>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/help">help</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
    </ul>
      <Routes>
        
        <Route path="/" element={<Main/>}>
          <Route index element={<Home/>}  />
        <Route path="/help" element={<Help/>} />
        <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
