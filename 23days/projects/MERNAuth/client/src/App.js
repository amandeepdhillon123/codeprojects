
import Header from "./components/Header";
import Login from "./components/Login"
import {Routes,Route} from "react-router-dom"
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { useNavigate } from "react-router-dom";
import Error from "./components/Error";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useContext, useState ,useEffect} from "react";
import { LoginContext } from "./components/ContextProvider/Context";
function App() {

  const[data,setData] =useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);

  const navigate =useNavigate()

  const DashboardValid = async()=>{
    let token = localStorage.getItem("usersdatatoken")
    console.log(token)
    const res =await fetch("/validuser",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":token
        }
    })

    const data =await res.json();
    console.log(data)

    if(data.status == 401 || !data)
    {
        // console.log("error page redirected")
        // navigate("*")

        console.log("user not valid")
    }
    else{
        // console.log("user verify")
         setLoginData(data)
        navigate("/dash")
    }
}

useEffect(()=>{
 
    setTimeout(()=>{
      DashboardValid()
        setData(true)
    },2000)

    
   
},[])
  return (

    <>
    {
      data ?  <>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
  
        <Route path="*" element={<Error/>}/>
      </Routes>
    
     </> :  <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
    }

{/* <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
  
        <Route path="*" element={<Error/>}/>
      </Routes> */}
    </>
   
    
  )
}

export default App;
