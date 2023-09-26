import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { Navigate, useNavigate } from "react-router-dom";
import "./header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { LoginContext } from "./ContextProvider/Context";
const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  // console.log(logindata)
  
   const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    // log out functionlaity

    const logoutuser =async()=>{

      let token = localStorage.getItem("usersdatatoken");

      const res = await fetch("/logout", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": token,
              Accept: "application/json"
          },
          credentials: "include"
      });

      const data = await res.json();
      console.log(data);

      if (data.status == 201) {
          console.log("use logout");
          localStorage.removeItem("usersdatatoken");
          setLoginData(false)
          navigate("/");
      } else {
          console.log("error");
      }

    }

  //  
  const goDash = () => {
    navigate("/dash")
}

const goError = () => {
    Navigate("*")
}
  return (
    <>
      <header>
        <nav>
          <h1>Authentication</h1>
          <div className="avtar">
            {logindata.ValidUser ? (
              <Avatar
                style={{
                  background: "salmon",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
                onClick={handleClick}
              >
                {logindata.ValidUser.fname[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar style={{ background: "blue" }} onClick={handleClick} />
            )}
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {logindata.ValidUser ? (
              <>
                <MenuItem onClick={ () =>{
                    goDash()
                  handleClose()
                }
                  }>Profile</MenuItem>

                <MenuItem onClick={()=>{
                    logoutuser()
                     handleClose()
                }
                  
                  }>Logout</MenuItem>
              </>
            ) : (
              <MenuItem onClick={
                 ()=> {
                  goError()
                  handleClose()
                 }
                }>Profile</MenuItem>
            )}
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;
