/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField } from "@mui/material";

const FormUserDetails = ({ increase, update, details }) => {
  const [firstName, setFirstName] = useState(details.firstName);
  const [lastName, setLastName] = useState(details.lastName);
  const [email, setEmail] = useState(details.email);
  function handleClick() {
    increase();
    let userDetails = {
      firstName,
      lastName,
      email,
    };
    update(userDetails);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }
  return (
    <form onSubmit={handleSubmit} className="w-64 py-3 px-5 m-auto">
      <TextField
        autoFocus
        required
        label="First Name"
        defaultValue={firstName}
        placeholder="Enter your first name"
        spellCheck="false"
        multiline
        variant="standard"
        style={{ width: "100%", margin: "10px 0" }}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        required
        label="Lat Name"
        defaultValue={lastName}
        placeholder="Enter your last name"
        spellCheck="false"
        multiline
        variant="standard"
        style={{ width: "100%", margin: "10px 0" }}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        required
        label="Email"
        defaultValue={email}
        placeholder="Enter your email"
        spellCheck="false"
        multiline
        variant="standard"
        style={{ width: "100%", margin: "10px 0" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="my-5 mx-auto bg-cyan-500 hover:bg-cyan-600 py-1 px-3 text-white block">
        Continue
      </button>
    </form>
  );
};
export default FormUserDetails;
