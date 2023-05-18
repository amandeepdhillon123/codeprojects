import './PlayButton.css'

// function PlayButton({message,children,onSmash}){


//     function handleClick(){

//    console.log(message)

//    onSmash()
//     }


// for object 
    function PlayButton({message,children,onPlay,onPause}){

      let play=false;
        function handleClick(e){
            e.stopPropagation();
    
         {
            play? onPlay(): onPause();

            play=!play;
         }
    
        }


//  multiple function in one button
// function PlayButton({message,children,onPlay,onPause}){

//      let playing = false
//     function handleClick(){

//    console.log(message)

// if(playing)
// {
//     onPlay();
// }
// else{
//   onPause()
// }  
// playing=!playing

// {
//     playing ? onPlay() : onPause()

//     playing=!playing
// }

 
    // }





    return(
        <>
         {/* // <button className='btn' onClick={console.log("hello")}>Play</button> */}

<button  onClick={handleClick}>{children}</button></>
       
    ) 
}

export default PlayButton;