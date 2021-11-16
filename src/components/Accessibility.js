import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Dialog, Transition } from "@headlessui/react";
// import accessStyles from '../Theme/AccessStyles'
// import EditPlant from "./EditPlant";
// import EditProfile from "./EditProfile";
import AccessStyles from "../Theme/AccessStyles";

function Accessibility(props) {
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
        <div className="">
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
    </div>
  );
}

export default Accessibility;
