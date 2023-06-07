

import React from 'react'


import PC from './PC';
export class Pp extends React.Component {
     
    constructor(){
        super();
        this.state={
            count:1
        }
    }

  render() {
  
    return (
      <div>
        <h1>pure component in react </h1>
        <button onClick={()=> this.setState({count : this.state.count + 1})}>increase</button>
      </div>
    )
  }
}

export default Pp