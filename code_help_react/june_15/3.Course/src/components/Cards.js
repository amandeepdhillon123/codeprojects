

import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;

  console.log(category)

  const [likedCourses, setLikedCourses] = useState([]);

  // console.log(courses)

  function getCourses() {
    if( category === "All")
    {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((course) => {
          allCourses.push(course);
        });
      });

      return allCourses;
    }
    else{
      return courses[category];
    }
   
     
   

    // console.log(allCourses)
  }

  // getCourses()

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          course={course}
          key={course.id}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        ></Card>
      ))}
    </div>
  );
}

export default Cards;
