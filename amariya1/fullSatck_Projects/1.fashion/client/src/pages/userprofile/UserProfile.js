import React from 'react'
import './userprofile.scss'
const UserProfile = () => {
  return (
    <>
    <div className="wrapper mt-5 mb-5">
        <div className="left">
          <img src='/logo192.png' alt="user" width="100" />
          <h4>amandeep</h4>
          <p>UI Developer</p>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h4>Email</h4>
                <p>amandeep24397@gmial.com</p>
              </div>

            </div>
          </div>

          <div className="projects">
            <h3>Orders</h3>
            <div className="projects_data">
              <div className="data">
                <h4>Total Orders</h4>
                <p style={{ fontSize: "20px" }}>37</p>
              </div>
              <div className="data">
                <button className='btn btn-primary' >see Orders</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default UserProfile