// import '../index.css'

import './Video.css'


// const Video = (props)=>{
    const Video = ({title,channel,views,time})=>{

    return(
        <div className="container">
        
            <img className="pic" src="https://picsum.photos/640/360" alt ="image"/>.
            {/* <div> {props.title}</div> */}
            <div  className="title"> {title}</div>
            <div className="channel">{channel}</div>
            <div className="views">{views} <span>.</span> {time}</div>
        </div>
    )
}

export default Video;

// export {Video, Samay};