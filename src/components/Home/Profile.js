import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container ">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols">
            <div className="cols-icon">
            
              <a href="https://www.facebook.com/profile.php?id=100009031677827">
                <i className="fa fa-facebook-square" aria-hidden="true" size='8x'></i>
              </a>
              
              <a href="https://https://github.com/konica16">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              <a href="http://www.linkedin.com/in/konica26">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/jahan_konica/">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, this is <span className="highlighted-text"> Konica</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusistic Developer 💪",
                    1000,
                    "Software Engineer  👩‍💻 ",
                    1000,
                    "Learner 👩‍🎓",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building operation with front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            
            <a href="https://konicaresume.000webhostapp.com/">
              <button className="btn highlighted-btn">My Resume Website</button>
            </a>
            {/* <a href="Kamruna Jahan.pdf" download="Kamruna Jahan.pdf">
              <button className="btn highlighted-btn">Get Resume In Pdf</button>
            </a> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}