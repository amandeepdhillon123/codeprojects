import React from 'react'
import Card  from 'react-bootstrap/Card'
import Row from "react-bootstrap/esm/Row"
import "./profile.css"

const Profile = () => {
  return (
        <>
         <div className='container'>
              <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
                 <Card.Body>
                  <Row>
                    {/*  image */}
                      <div className='col'>
                           <div className='card-profile-stats d-flex justify-content-center'>
                               <img src="https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior-thumbnail.jpg" alt="" />
                           </div>
                      </div>
                  </Row>
                  {/* main data */}
                  <div className='text-center'>
                    <h3>Amandeep</h3>
                    <h4><i class="fa-solid fa-envelope email"></i>&nbsp;:- <span>aman@gmail.com</span> </h4>
                     <h5><i class="fa-solid fa-mobile"></i>&nbsp;:- <span>9834589348</span> </h5> 
                     <h4><i class="fa-solid fa-person"></i>&nbsp;:- <span>Male</span> </h4> 
                     <h4><i class="fa-solid fa-location-pin location"></i>&nbsp;:- <span>Ahmedabad</span> </h4> 
                     <h4>Status&nbsp;:- <span>Active</span> </h4>
                     <h5><i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date created&nbsp;:- <span>Active</span> </h5>
                     <h5><i class="fa-solid fa-calendar-days  calendar"></i>&nbsp;Date updated&nbsp;:- <span>Active</span> </h5>    
                  </div>
                 </Card.Body>
              </Card>
         </div>
        </>
  )
}

export default Profile