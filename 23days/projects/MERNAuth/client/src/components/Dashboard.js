
import React, { useContext, useEffect  } from 'react'

import { useNavigate } from 'react-router-dom'
import { LoginContext } from './ContextProvider/Context'
const Dashboard = () => {
   
    const { logindata, setLoginData } = useContext(LoginContext);



    const  navigate = useNavigate()
    const DashboardValid = async()=>{
        let token = localStorage.getItem("usersdatatoken")
        // console.log(token)
        const res =await fetch("/validuser",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })

        const data =await res.json();
        // console.log(data)

        if(data.status == 401 || !data)
        {
            // console.log("error page redirected")
            navigate("*")
        }
        else{
            // console.log("user verify")
             setLoginData(data)
            navigate("/dash")
        }
    }

    useEffect(()=>{
        DashboardValid()
    },[])
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

          <img src="https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior-thumbnail.jpg" 
            style={{ width: "200px", marginTop: 20 }}
            alt="" />

            <h1> User:{ logindata ? logindata.ValidUser.email : ""}</h1>
           
    
          </div>
  )
}

export default Dashboard