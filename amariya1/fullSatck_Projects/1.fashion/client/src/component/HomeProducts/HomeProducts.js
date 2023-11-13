import React from "react";
import "./Homeproducts.scss";
const HomeProducts = () => {
  return (
    <>

    {/* products */}
      <section id="sellers">
        <div className="seller container">
          <h2>Products</h2>
          <div className="best-seller">
            <div className="best-p1">
              <img src="/logo192.png" alt="" />
              <div className="best-p1-text">
                <div className="name-of-p">
                  <p>Nike shoes</p>
                </div>
                <div className="price">₹ 500</div>
                <div className="buy-now">
                  <button>
                    <a href="#">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* new arrival */}
        <div className="seller container">
          <h2>New Arrivals</h2>
          <div className="best-seller">
            <div className="best-p1">
              <img src="/logo192.png" alt="" />
              <div className="best-p1-text">
                <div className="name-of-p">
                  <p>Nike shoes</p>
                </div>
                <div className="price">₹ 500</div>
                <div className="buy-now">
                  <button>
                    <a href="#">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProducts;
