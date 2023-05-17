import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Video from "./component/Video";
import obj from "./data/data";
import PlayButton from "./component/PlayButton";
function App() {
  
//   let obj=[
//           {
//           id:1,
//           title:"React -js tutorial",
//           views:"10K",
//           time:"1 year ago",
//           channel:"coderDost",
//           verified:true
//         },

//   {

//         id:2,
//         title:"Node -js tutorial",
//         views:"100K",
//         time:" 2 year ago",
//         channel:"coderDost",
//         verified :false
//   },

//   {
//         id:3,
//         title:"MongoDB tutorial",
//         views:"100K",
//         time:" 2 year ago",
//         channel:"coderDost",
//         verified :true
//   }


// ]
  return (
    <div className="App">
 {
  obj.map(video=><Video
    key={video.id}
    id ={video.id}
    title={video.title}
  
    views={video.view}
    time={video.time}
    channel={video.channel}
    verified ={video.verified}
  
>


  </Video>)
 }

 <div style={{clear:'both'}}>
 <PlayButton  message="play-msg">Play</PlayButton>
 <PlayButton  message="pause-msg">Pause</PlayButton>
 </div>


      
    </div>
  );

 
}

export default App;
