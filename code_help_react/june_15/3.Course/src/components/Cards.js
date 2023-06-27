

// import React, { useState } from "react";
// import Card from "./Card";
// function Cards(props) {
//   let courses = props.courses;
//   let category = props.category;
//   const [likedCourses, setLikedCourses] = useState([]);
//   function getCourses() {
//     if (category === "All") {
//       let allCourses = [];
//       Object.values(courses).forEach((array) => {
//         array.forEach((course) => {
//           allCourses.push(course);
//         });
//       });

//       return allCourses;
//     } else {
//       return courses[category];
//     }
//   }

//   return (
//     <div className="flex flex-wrap justify-center gap-4 mb-4">
//       {getCourses().map((course) => (
//         <Card
//           key={course.id}
//           course={course}
//           likedCourses={likedCourses}
//           setLikedCourses={setLikedCourses}
//         ></Card>
//       ))}
//     </div>
//   );
// }

// export default Cards;

import React from 'react'
import Card from './Card';
function Cards(props) {

  const courses= props.courses;
  // console.log(courses)

  function getCourses(){
    let allCourses=[];
    Object.values(courses).forEach((array) =>{
      array.forEach(coursesData => {
        allCourses.push(coursesData)
      })
    })
 
    return allCourses;
  }
  return (
    <div>
      {
        getCourses().map((course)=>{
           <Card key={course.id} course={course}/>
        })
      }
    </div>
  )
}

export default Cards