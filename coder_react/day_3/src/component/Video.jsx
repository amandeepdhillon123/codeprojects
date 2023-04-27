
function Video({onPlay,onPause,children}){

    let playing =false;
      function Apple(){
       {playing ? onPlay() : onPause()}
         
       playing = !playing;
      }
      return(
        <>
            {/* <button  onClick={Apple}>{children}</button> */}
             
             {/* updation  */}

             <button  onClick={Apple}>{children}</button>
        </>
      )
}

export default Video;