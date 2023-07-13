import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>home</p>
      <User name ="ram"/>
      <User name ="shyaam"/>
      <User name ="dfcdhgam"/>
    </main>
  )
}

 const User =(props)=>{

  return(
    <div>
      <p>hello ji {props.name}</p>
    </div>
  )
}
