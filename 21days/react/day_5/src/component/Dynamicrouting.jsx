import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
function Dynamicrouting() {
  let users = [
    { id: 1, name: "anil", email: "anil@gmial.com" },
    { id: 2, name: "aman", email: "aman@gmial.com" },
    { id: 3, name: "rahul", email: "rahul@gmial.com" },
    { id: 4, name: "sunil", email: "sunil@gmial.com" },
    { id: 5, name: "ramna", email: "ramna@gmial.com" },
  ];
  return (
    <Router>
      {users.map((item) => (
        <div>
          <Link to={"/users/" + item.id}>
            <h1>{item.name}</h1>
          </Link>
        </div>
      ))}
 
    </Router>
  );
}

export default Dynamicrouting;
