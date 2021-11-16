import React, { useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import accessStyles from '../Theme/AccessStyles'

import userinfo from "../userinfo";
import EditPlant from "./EditPlant";
import EditProfile from "./EditProfile";
import AccessStyles from "../Theme/AccessStyles";




function Accessibility (props) {
    const [profile, setProfile] = useState(userinfo);
    const [open, setOpen] = useState(false);
    
    const handleEdit = (profile) => {
      setOpen(false);
      // axiosWithAuth()
      // .put(`website.com/api/login/${ID}`, profile)
      // .then((res) => {
      //   setProfile(res.data);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    };
  
    const handleEditSelect = () => {
      setOpen(true);
    };

    return (
        <div className="accessAll">
         <AccessStyles className="profile">
          <img src={profile.imageUrl} alt=""/>
            <div className="">
              <h3> <b>Name:</b> {profile.name}</h3>
              <h3> <b>Phone:</b> {profile.phoneNumber}</h3>
              <button id="edit"> Edit Profile </button>
            </div>  
         </AccessStyles> 
        </div>
    );
    
};

export default Accessibility;