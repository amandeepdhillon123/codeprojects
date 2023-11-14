import React from 'react'
import AdminSidebar from "../../component/AdminCommonLayout/AdminSidebar"
const CommonLayoutAdmin = ({children}) => {
  return (
    <>
       <AdminSidebar children ={children}/>
     </>
  )
}

export default CommonLayoutAdmin