/* eslint-disable react/prop-types */
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { useState } from "react";

const UseForm = ({ progress, updateProgress }) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });
  function updateData(data) {
    setDetails((prev) => {
      return { ...prev, ...data };
    });
  }
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {progress == 1 && (
        <FormUserDetails
          details={details}
          update={updateData}
          increase={() => updateProgress(2)}
        />
      )}
      {progress == 2 && (
        <FormPersonalDetails
          details={details}
          update={updateData}
          increase={() => updateProgress(3)}
          decrease={() => updateProgress(1)}
        />
      )}
      {progress == 3 && (
        <Confirm
          details={details}
          increase={() => updateProgress(4)}
          decrease={() => updateProgress(2)}
        />
      )}
      {progress == 4 && <Success />}
    </div>
  );
};
export default UseForm;
