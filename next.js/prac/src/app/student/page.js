

import Link from "next/link"

const Student = () => {

  return (
    <div>
        <h1>student detail</h1>
        <ul>
            <li>
                <Link href={'/student/anil'}> Anil</Link>
            </li>
            <li>
                <Link href={'/student/aman'}> Aman</Link>
            </li>
            <li>
                <Link href={'/student/ram'}> ram</Link>
            </li>
        </ul>
    </div>
  )
}

export default Student