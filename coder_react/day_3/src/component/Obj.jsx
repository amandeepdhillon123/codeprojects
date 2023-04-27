

import Data from "./Data";
import Video  from "./Video";


function Obj(){

    let Ram=[{
        id: 1,
        name:"amandeep",
        sur:"dhillon"
    },

    {
        id: 2,
        name:"aman",
        sur:"dhill"
    }]

    return(
        <div>

        {
            Ram.map( ele => <Data

                 id={ele.id}
                 name={ele.name}
                sur={ele.sur}
            



            >
    <Video
      onPlay={() => console.log("amandeep")}
      onPause={() => console.log("deep")}
    >
        {ele.name}
    </Video>

            </Data>)
             

        }

       
        

        
     

       {/* <Data {...Ram}/> */}

       </div>

        
        
       
    )
}

export default  Obj;