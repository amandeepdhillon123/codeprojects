import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Video from "./component/Video";

function App() {
  let obj={
    title:"React -js tutorial",
    views:"10K",
    time:"1 year ago",
    channel:"coderDost"
  }
  return (
    <div className="App">
      <Video
        // title="React -js tutorial"
        // views="10K"
        // time="1 year ago"
        // channel="coderDost"
  
        // spread operator 
        {...obj}
      />
      <Video
        title="Node -js tutorial"
        views="100K"
        time=" 2 year ago"
        channel="coderDost"
      />
       <Video
        title="MongoDb tutorial"
        views="99K"
        time=" 2 year ago"
        channel="coderDost"
      />
    </div>
  );
}

export default App;
