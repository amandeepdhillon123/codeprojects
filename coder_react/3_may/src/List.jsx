
function List({img,id,title,views,time,channel,verified}){

    return(
        <>
        {/* <img src ={`http://picsum.photos/id/${id}/160/90`}></img> */}
         
         <img src ={img}></img>
          <h1>{id}</h1>
         <h2>{title}</h2>
         <h3>{views}</h3>
         <h4>t{time}</h4>
         <h5>{channel}</h5>
      
       
        </>
    )
}

export default List;