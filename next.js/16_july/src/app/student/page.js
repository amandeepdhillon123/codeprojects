
import Link from 'next/link'
const Student = () => {

  const name =[ "anil","rahul","sugh"]
  return (
    <div>
        <h1>Student List</h1>

        {
          name.map((item)=>
          <ul>
             <li> <Link href={`/student/${item}`}>{item}</Link></li>
          </ul>
          )
        }
        {/* <ul>
            <li>
              <Link href='/student/anil'>Anil</Link>  
            </li>
            <li>
              <Link href='/student/2'>Peter</Link>  
            </li>
            <li>
              <Link href='/student/3'>Sam</Link>  
            </li>
            <li>
              <Link href='/student/4'>Rahul</Link>  
            </li>
            <li>
              <Link href='/studentlist/5'>Ram</Link>  
            </li>
      
        </ul> */}
    </div>
  )
}

export default Student
