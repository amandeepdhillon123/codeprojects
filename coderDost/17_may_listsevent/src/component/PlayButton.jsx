import './PlayButton.css'

function PlayButton({message,children}){
    function handleClick(){

   console.log(message)
    }

    return(
        <>
         {/* // <button className='btn' onClick={console.log("hello")}>Play</button> */}

<button className='btn' onClick={handleClick}>{children}</button></>
       
    ) 
}

export default PlayButton;