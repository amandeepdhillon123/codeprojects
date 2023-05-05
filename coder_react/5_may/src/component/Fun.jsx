
import PlayButton from "./PlayButton";

function Ram(){

    console.log("hii ramm")
}

function Fun(){

    return(
        <>
     <PlayButton  name="amandeep" msg ="i am amandeep" fun={Ram}  onRam ={() =>console.log("amandeep Dhillon")}  >deep</PlayButton>
        </>
    )
}

export default Fun;