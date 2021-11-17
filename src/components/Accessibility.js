import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { Dialog, Transition } from "@headlessui/react";
// import EditPlant from './EditPlant';
// import plantList from './PlantsList';
import plantlist from '../plantlist'


import AccessStyles from "../Theme/AccessStyles";
import AccessPlants from "../Theme/AccessPlants";

function Accessibility(props) {
  // const { plantList } = props;
  const [open, setOpen] = useState(false);
  

  // passed down as props so both the profile page and this page use the same slice of state
  const { profile, setProfile } = props;

  // Form and event handler that you will be able to use for multiple components
  const [form, setForm] = useState(profile);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const click = () => {
    open === false ? setOpen(true) : setOpen(false);
  };

  const update = (e) => {
    e.preventDefault();
    setProfile(form);
    click();
  };

  

  return (
    <div className="accessAll">
      <AccessStyles className="profile">
        <img src={profile.imageUrl} alt="" />
        <div className="info">
          <h3>
            {" "}
            <b>Name:</b> {profile.name}
          </h3>
          <input
            id="editInput"
            className={!open ? "none" : null}
            type="text"
            name="name"
            placeholder="Type name"
            value={form.name}
            onChange={handleChange}
          />
          <h3>
            {" "}
            <b>Phone:</b> {profile.phoneNumber}
          </h3>
          <input
            id="editInput"
            className={!open ? "none" : null}
            type="text"
            name="phoneNumber"
            placeholder="Type phone number"
            value={form.phoneNumber}
            onChange={handleChange}
          />{" "}
          <br />
          <button className={open ? "none" : "edit "} onClick={click}>
            Edit Profile
          </button>
          <button
            className={!open ? "none edit submit" : "edit submit"}
            onClick={update}
          >
            Submit
          </button>
          <button
            className={!open ? "edit cancel none" : "edit cancel"}
            onClick={click}
          >
            Cancel
          </button>
        </div>
      </AccessStyles>
      <AccessPlants> 
        <h3> Your plants </h3> <br/>  
        <div className= 'myPlants'>
          {plantlist.map((ea, idx) => ( 
            <div className='each' key={idx}>
              <h4> {ea.nickname} </h4>
              <Link to={'plants/'+ ea.plant_id}>
              <img src={ea.image} alt='Your plant' />
              </Link>
              <h5> Water <b>{ea.h2oFrequency === 1 ? '1 time' : ea.h2oFrequency + ' times'}</b> <br/> per day.</h5>
            </div>
          ))}
        </div>
        <h4 className='addPlant'> Add a Plant </h4>
      </AccessPlants>
    </div>
  );
}

export default Accessibility;
