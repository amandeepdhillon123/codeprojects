import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Prop from "./component/Props";
import Resume from "./component/Res2";
// import Resume from "./component/Resume";
function App() {
  // let obj = {
  //   name: "amandeep",
  //   age: "88388",
  // };

  // function Demo() {
  //   return <h1> i am demo</h1>;
  // }


  let resume={
    experience:[{
      year:2012,comapny:'xyz',role:'frontend'}],
      education:[{ btec: 2016, sen: 2011}],
      skills:["react.js" ,"node.js"]
  }
  return (
    // <>
    //   {/* <Prop  color="red"  name="amandeep" age={42}  child= {Demo()} /> */}

    //   <Prop {...obj} />
    // </>
    <>
       
         <h1 >Resume</h1>
         <Resume {...resume} />
     



    </>
  
  )
}

export default App;
