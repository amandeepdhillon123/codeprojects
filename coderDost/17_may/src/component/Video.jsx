
import './Video.css'
function Video({title,channel,views,time,verified}){
  // let verified = true;

  let channelJsx;
  // if(verified){
  //   channelJsx =  <div className="channel">{channel} ✅</div>
  // }
  // else{
  //   channelJsx =  <div className="channel">{channel}</div>
  // }  

 
   
    return(
        <>
        <div className="container">
       <div>
     <img className="pic" src="http://picsum.photos/id/2/160/90" alt="" />
       </div>
      <div className="title">{title}</div>

      {/* 1 */}
       {/* <div className="channel">{channel} ✅</div> */}
       
         {/* 2 */}
       {/* {
        channelJsx
       } */}

       {/* 3 */}

{/* {
    verified ?

    channelJsx =  <div className="channel">{channel} ✅</div>:
     
    channelJsx =  <div className="channel">{channel}</div>
  } */}


  {/* 4th case  */}

       {/* <div className="channel">{channel}{ verified ? '✅' : null}</div> */}


{/* 5th case short circuit  */}

  <div className="channel">{channel}{ verified && '✅' }</div>

       
       
       <div className="views">{views} <span>.</span> {time}</div>
       
       </div>
       </>
    )
}

export default Video;