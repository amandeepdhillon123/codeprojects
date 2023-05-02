import Prop from "./Props";
import './Props.css'
function Fun(){

    let obj={
        title:"react js tutorial" ,
        views :'10k',
          time :'1 year ago',
            channel:"ram"
    }

    return(
        <div className="App">
        
        {/* 1 st way  */}
       {/* <Prop  title="react js tutorial" views ='10k'  time = '1 year ago'  channel="ram">Ram</Prop>
       <Prop  title="node js tutorial"  views ='100k' time = '1 month ago' channel="ram" ></Prop >
       <Prop  title="Mongodb  tutorial"  views ='100k' time = '1 month ago' channel="ram" ></Prop > */}
       

       {/* by obj  */}

      <Prop{...obj}>i am oject</Prop>
        </div>
    )
}

export default Fun;