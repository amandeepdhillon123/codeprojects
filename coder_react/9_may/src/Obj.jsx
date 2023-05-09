  import Dat from './Dta'
  import Fun from './Fun';
function Obj(){


    return(
        <>
           <h1>hello dosto</h1>
              {
                Dat.map(ele =><Fun 
                name={ele.name}
              

                ></Fun>)
              }
       
           
       

        </>
    )
}

export default Obj;