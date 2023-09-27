import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Dashboard = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const [data, setData] = useState(false);

  console.log(logindata);

  const navigate = useNavigate();
  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    console.log(token);
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();
    console.log(data);

    if (data.status == 401 || !data) {
      // console.log("error page redirected")
      navigate("*");
    } else {
      // console.log("user verify")
      setLoginData(data);
      navigate("/dash");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);
  return (
    <>
      {data ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior-thumbnail.jpg"
            style={{ width: "200px", marginTop: 20 }}
            alt=""
          />

          <h1> User:{logindata ? logindata.ValidUser.email : ""}</h1>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Dashboard;
