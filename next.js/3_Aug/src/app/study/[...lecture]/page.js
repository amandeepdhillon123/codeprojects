"use client";
import React from "react";

const Room = ({ params }) => {
  const box = params.lecture;

  console.log(box);
  return (
    <>
      <tr>
        {box.map((ele) => (
          <td>{ele} </td> 
        ))}
      </tr>
    </>
  );
};

export default Room;
