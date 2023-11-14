import React from "react";
import AdminuserTable from "./AdminuserTable";
const AdminDashboard = () => {
  return (
    <>
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">5</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt"></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart-alt cart"></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Products</div>
            <div className="number">56</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt"></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bxs-cart-add cart two"></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Users</div>
            <div className="number">56</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt"></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart cart three"></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Return</div>
            <div className="number">11,086</div>
            <div className="indicator">
              <i className="bx bx-down-arrow-alt down"></i>
              <span className="text">Down From Today</span>
            </div>
          </div>
          <i className="bx bxs-cart-download cart four"></i>
        </div>
      </div>

      {/* recent sales  */}
      <div className="sales-boxes">
        <div className="recent-sales box">
          <div className="title">Recent Sales</div>
          <div className="sales-details">
            <AdminuserTable
              // getAlluserdata={getAlluserdata}
              // handlePrevious={handlePrevious}
              // handleNext={handleNext}
              // page={page}
              // setPage={setPage}
              // pageCount={pageCount}
            />
          </div>
        </div>
        <div className="top-sales box">
          <div className="title">Top Selling Product</div>
          <ul className="top-sales-details">
            <>
              <li>
                <a href="#">
                  <img src="logo192.png" alt="" />
                  <span className="product">shoes</span>
                </a>
                <span className="price">₹5652</span>
              </li>
            </>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
