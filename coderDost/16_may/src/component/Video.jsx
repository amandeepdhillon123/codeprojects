
import './Video.css'
function Video({title,channel,views,time}){

    return(
        <>
        <div className="container">
       <div>
     <img className="pic" src="http://placeimg.com/160/90/any" alt="" />
       </div>
      <div className="title">{title}</div>
       <div className="channel">{channel}</div>
       <div className="views">{views} <span>.</span> {time}</div>
       
       </div>
       </>
    )
}

export default Video;