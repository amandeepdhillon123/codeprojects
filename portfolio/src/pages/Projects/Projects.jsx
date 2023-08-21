import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 here are my Top projects with live link and source code
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>

                <img
                  src="https://media.istockphoto.com/id/1375897191/photo/businessman-using-a-computer-to-lms-learning-management-system-web-icon-for-lesson-and-online.jpg?s=612x612&w=is&k=20&c=Xanv95zz38HdzU-Mi5C5DyNR8vJTWF_K1Cv7KYhUrWw="
                  alt=""
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Nodejs</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto ">
                  <h5 className="text-uppercase">shopping website</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>

                <img
                  src="https://media.istockphoto.com/id/1375897191/photo/businessman-using-a-computer-to-lms-learning-management-system-web-icon-for-lesson-and-online.jpg?s=612x612&w=is&k=20&c=Xanv95zz38HdzU-Mi5C5DyNR8vJTWF_K1Cv7KYhUrWw="
                  alt=""
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Nodejs</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto ">
                  <h5 className="text-uppercase">shopping website</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>

                <img
                  src="https://media.istockphoto.com/id/1375897191/photo/businessman-using-a-computer-to-lms-learning-management-system-web-icon-for-lesson-and-online.jpg?s=612x612&w=is&k=20&c=Xanv95zz38HdzU-Mi5C5DyNR8vJTWF_K1Cv7KYhUrWw="
                  alt=""
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Nodejs</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">shopping website</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
