import React, { useEffect } from "react";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";

// IMPORT STYLES
import "./Profile.scss";

const Profile = () => {

  return ( 
    <>
      <div className="page-title__profile">
          <div className="container">
            <h1>PROFILE PAGE</h1>
          </div>
      </div>
      <ProfileComponent></ProfileComponent>
    </>
  )
};

export default Profile;
