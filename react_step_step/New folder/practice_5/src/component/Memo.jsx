  import React, { useState } from 'react'
  
  function Memo() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    // function  multiCount(){
    //     console.log("multi count")
    // }

    const multiCount=useMemo(function multiCount(){
        console.log("multiCount")
        return count * 5


    },[count])
    return (
    <>
    <h1>useMeom in react</h1>
    <h2>Count :{count}</h2>
    <h2>item: {item}</h2>
    <h2> {multiCount()}</h2>

    <button onClick={() => setCount (count + 1)}>update count</button>
      
    <button onClick={() => setItem (item * 10)}>update item</button>
    
    
    </>
    )
  }
  
  export default Memo