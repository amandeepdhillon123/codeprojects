

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
  let courses = props.courses;
  // console.log(courses)
  
  function getCourses(){
      let allCourses=[];

        Object.values(courses).forEach((array)=>{
          array.forEach((course)=>{
             allCourses.push(course);
           
            })
        })

        // return allCourses
        // console.log(allCourses)

        
      
  }

  // getCourses()

  
  return (
    <div>
       {/* {
        getCourses().map((course)=> 
          
        <Card course={course}
        key={course.id}
        
        
        />
        
        )
       } */}
    </div>
  )
}

export default Cards