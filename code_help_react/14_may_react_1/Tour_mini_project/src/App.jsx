

import React from "react";
import { useState } from "react";
import Tours from "./component/Tours";
import data from "./data";
const App = () => {
  const [tours, setTours] = useState(data);
  // console.log(tours)

  // remove tour

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);

    setTours(newTour);
  }

  // last button  refresh

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
