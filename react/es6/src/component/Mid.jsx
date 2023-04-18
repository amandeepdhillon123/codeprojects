

import React from "react";
import {name ,age , square} from './Modules'


 export default class Mid extends React.Component {

        //  constructor (name,age) {
        //     super();
        //      this.name=name;
        //      this.age=age;
        //  }

    render(){
              
//   arrow
        // var b= (x,y)  => { return x+ y}
            
        // console.log(b(4,5))
        //   }

        // destructuring 

        // let student ={name:'Rahul' , age :22};

        //   let {name,age} = student;

        //   console.log(name)

         
          console.log(`${name} ${square(10)}`)

        


}

 }