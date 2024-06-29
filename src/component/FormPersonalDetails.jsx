/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField } from "@mui/material";

const FormPersonalDetails = ({ increase, decrease, details, update }) => {
  const [occupation, setOccupation] = useState(details.occupation);
  const [city, setCity] = useState(details.city);
  const [bio, setBio] = useState(details.bio);
  function handleClick(t) {
    t == "Continue" ? increase() : decrease();
    let userDetails = {
      occupation,
      city,
      bio,
    };
    update(userDetails);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClick("Continue");
  }
  return (
    <form onSubmit={handleSubmit} className="w-64 py-3 px-5 m-auto">
      <TextField
        autoFocus
        required
        label="Occupation"
        defaultValue={occupation}
        placeholder="Enter your occupation"
        spellCheck="false"
        multiline
        variant="standard"
        style={{ width: "100%", margin: "10px 0" }}
        onChange={(e) => setOccupation(e.target.value)}
      />
      <TextField
        required
        label="City"
        defaultValue={city}
        placeholder="Enter your city"
        spellCheck="false"
        multiline
        variant="standard"
        style={{ width: "100%", margin: "10px 0" }}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        required
        label="Bio"
        defaultValue={bio}
        placeholder="Enter your bio"
        spellCheck="false"
        multiline
        variant="standard"
        style={{ width: "100%", margin: "10px 0" }}
        onChange={(e) => setBio(e.target.value)}
      />
      <div className="flex justify-around">
        <button className="my-5 bg-cyan-500 hover:bg-cyan-600 py-1 px-3 text-white">
          Continue
        </button>
        <button
          onClick={handleClick}
          className="my-5 bg-gray-500 hover:bg-gray-600 py-1 px-3 text-white"
        >
          Back
        </button>
      </div>
    </form>
  );
};
export default FormPersonalDetails;
