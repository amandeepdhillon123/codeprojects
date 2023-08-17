import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardData";
import { useState } from "react";
import toast from "react-hot-toast"
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  // console.log(Cardsdata)
  const [cardData, setCardData] = useState(Cardsdata);
 
  const dispatch = useDispatch();

  // add to cart

  const send = (e) => {
    // console.log("first",e)

    dispatch(addToCart(e));
    toast.success("item added to Cart")
  };
  return (
    <>
      <section className="item_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Ahmedabad Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cardData.map((ele, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img variant="top" className="cd" src={ele.imgdata} />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center ">
                      <h4 className="mt-2">{ele.dish}</h4>
                      <span>{ele.rating}&nbsp;★ </span>
                    </div>
                    <div className="lower_data d-flex justify-content-between ">
                      <h5>delhi</h5>
                      <span>₹ {ele.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={ele.arrimg} className="limg" alt="" />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(ele)}
                      >
                        Add TO Cart
                      </Button>
                      <img src={ele.delimg} className="laimg" alt="" />
                    </div>
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
