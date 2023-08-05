import React from "react";
import Link from "next/link";
const Dynmaic = () => {
  const students = ["amandeep", "shyam", "ram", "geetu"];
  return (
    <>
      {/* <ul> */}
      {/* <li> */}
      {/* <Link href="/dynamic/anil">Anil</Link>
            </li>
            <li>
                <Link href="/dynamic/peter">peter</Link>
            </li>
            <li>
                <Link href="/dynamic/ram">ram</Link>
            </li>
            <li>
                <Link href="/dynamic/shyam">shyam</Link> */}
      {/* </li> */}

      {/* </ul> */}

      {/* dynamic  useing map duntion  */}

      <ul>
        {students.map((ele) => {
          return (
            <li>
              <Link href={`/dynamic/${ele}`}>{ele}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dynmaic;
