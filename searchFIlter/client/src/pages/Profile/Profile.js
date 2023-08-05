import React from "react";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import "./profile.css";
const Profile = () => {
  return <>
  <div className="container">
      <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>
          <Row>
            <div className="col">
               <div className="card-profile-stats d-flex justify-content-center">
                <img src="data:image/jpeg;base64,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" alt="" />
               </div>
            </div>
          </Row>
          <div className="text-center">
            <h3>amandeep</h3>
             <h4><i class="fa-solid fa-envelope email"></i>&nbsp;:- <span>amandeep@gmail.com</span></h4>
             <h5><i class="fa-solid fa-mobile"></i>&nbsp;:- <span>984958798</span></h5>
             <h4><i class="fa-solid fa-person"></i>&nbsp;:- <span>Male</span></h4>
             <h4><i class="fa-solid fa-location-pin location"></i>&nbsp;:- <span>Delhi</span></h4>
             <h4> Status&nbsp;:- <span>Active</span></h4>
             <h5><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Created&nbsp;:- <span></span></h5>
             <h5><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Updated&nbsp;:- <span></span></h5>
         
         
         
         
          </div>
        </Card.Body>
      </Card>
  </div>
  </>;
};

export default Profile;
