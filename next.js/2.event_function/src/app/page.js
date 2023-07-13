'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const User =(tilt)=>{
    return(
      <div>
        <h1>hello jji {tilt}</h1>
      </div>
    )
  }
  return (

   
    <main className={styles.main}>
      <p>home</p>

      {/* <User/> */}

      {User("ram")}
    <button onClick={()=>alert("hello ji")}>click me</button>
    
    
    
    </main>
  )
}


