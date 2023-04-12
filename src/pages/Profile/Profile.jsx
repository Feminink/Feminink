import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import {getSingleUser} from '../../store/auth/actions'
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";

const Profile = () => {

  // const dispatch = useDispatch()
  // const params = useParams();
  // useEffect(()=>{ 
  //  dispatch(ge(params.id))
  // },[])
  return ( 
    <div> 
   <ProfileComponent/>
   </div>)
};

export default Profile;
