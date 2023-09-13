import Image from 'next/image'
import styles from './page.module.css'
import road from './custom.module.css'
import outside from '@/style/outside.module.css'
export default function Home() {
  return (
    <>
    <h1 className='main'>hello jii</h1>
     <h1 className='main'>hello jii</h1>
      <p className={ outside.main}>some text</p>
      <h1 className={road.main}>css module </h1>
     </>
  )
}
