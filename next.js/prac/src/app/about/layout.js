
"use client"
import Link from 'next/link'
import {usePathname} from 'next/navigation'
const Log = ({children}) => {

    const pathname = usePathname();
  return (
   
    <div>
         {
        pathname !== "/about/aboutStudent" ?
        <ul>
        <li>
            <Link href="/about">about</Link>
        </li>
        <li>
            <Link href="/about/aboutCollege">abotCollege</Link>
        </li>
        <li>
            <Link href="/about/aboutStudent">aboutStudent</Link>
        </li>
    </ul> :
      <h1> hello ji condtitinla lgi hoi hai</h1>
    }
       

           {children}
    </div>
  )
}

export default Log