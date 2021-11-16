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

    const click = () => {
        open === false ? setOpen(true): setOpen(false);
    }



    return (
        <div className="accessAll">
         <AccessStyles className="profile">
          <img src={profile.imageUrl} alt=""/>
            <div className="">
              <h3> <b>Name:</b> {profile.name}</h3>
              <input 
               id='editInput' 
               className= { !open ? 'none' : null }
               type='text' 
               name= 'name'
               placeholder='Type name'
               />
              <h3> <b>Phone:</b> {profile.phoneNumber}</h3>
              <input 
               id='editInput' 
               className={ !open ? 'none' : null }
               type='text' 
               name='phone'
               placeholder='Type phone number'
               /> <br/>
              <button 
               className={ open ? 'none' : 'edit ' }
               onClick={click}
              >
                Edit Profile
              </button>
              <button 
               className = { !open ? 'none edit submit' : 'edit submit' }>
                Submit
              </button>
              <button 
              className={ !open ? 'edit cancel none' : 'edit cancel'}
              onClick={click}>
                  Cancel</button>
            </div>  
         </AccessStyles> 
        </div>
    );
    
};

export default Accessibility;