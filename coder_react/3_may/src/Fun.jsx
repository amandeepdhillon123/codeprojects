
import List from "./List"

import Obj from './Data/Data'

// let obj =[{
//     id:1,
//      tile:'React js tutorial',
//     views:'999k',
//     time: '1 year ago',
//     channel :'coder dost',
//     verified : true,
//     src :"http://picsum.photos/id/1/160/90"
// },
// {

//     id:2,
//     tile:'Node js tutorial',
//    views:'999k',
//    time: '1 year ago',
//    channel :'coder dost',
//    verified : false,
//    src :`http://picsum.photos/id/2/160/90`
// },
// {
//     id:3,
//     tile:'MongoDb tutorial',
//    views:'999k',
//    time: '1 year ago',
//    channel :'coder dost',
//    verified : true,
//    src :"http://picsum.photos/id/3/160/90"
// }



// ]

function Fun(){

    return(
        <>

        {Obj.map( ele => <List
         title = {ele.tile}
         views={ele.views}
         time= {ele.time}
         channel={ele.channel}
          id={ele.id}
          img={ele.src}
          key ={ele.id}
        ></List> 
       
       
        
        )}
  
        </>
    )
}

export default Fun;