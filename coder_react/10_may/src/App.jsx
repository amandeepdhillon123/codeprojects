import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Video from "./component/Video";


// import{Video, Samay} from './component/Video'
function App() {


  let obj={
     title:"React -js Tutorials",
        views:"10k",
        time:"1 year ago ",
        channel:"jai hind"
    
  }
 
  return (
    <div className="App">
      <h2>Videos</h2>
      <Video {...obj}
  
        // title="React -js Tutorials"
        // views="10k"
        // time="1 year ago "
        // channel="jai hind"
      ></Video>
      <Video
      
        title="Node -js Tutorials"
        views="100k"
        time="1 month ago "
        channel="jai hind"
      ></Video>

<Video
      
        title="MongoDb -Tutorials"
        views="100k"
        time="1 month ago "
        channel="jai hind"
      ></Video>

    
    </div>
  );


}

export default App;
