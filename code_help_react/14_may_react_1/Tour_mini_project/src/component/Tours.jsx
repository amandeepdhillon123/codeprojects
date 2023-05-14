import Card from "./Card";
let Tours = ({ tours, removeTour }) => {
  // console.log(props)
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with Us</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;
