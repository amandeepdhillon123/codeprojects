import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";
import "./style.css";
const Home = () => {
  const [cardData, setCardData] = useState(Cardsdata);
  return (
    <>
      <section className="item_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 200 }}>
          Restaurants in Ahmedabad Open Now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cardData.map((ele, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img variant="top" src={ele.imgdata} />
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-2">{ele.dish}</h4>
                    <span>{ele.rating}&nbsp; ★</span>
                  </div>
                  <div className="lower_data d-flex justify-content-between align-items-center">
                    <h5 className="mt-2">{ele.address}</h5>
                    <span>₹ {ele.price}</span>
                  </div>
                  <div className="extra"></div>
                  <div className="last_data d-flex justify-content-between align-items-center">
                    <img src={ele.arrimg} alt="arrimg" className="limg" />
                    <Button
                      style={{
                        width: "150px",
                        background: "#ff3054db",
                        border: "none",
                      }}
                      variant="outline-light"
                      className="mt-2 mb-2"
                    >
                      Add To Cart
                    </Button>
                    <img src={ele.delimg} alt="laimg" className="laimg" />
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
