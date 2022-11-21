import { useState } from "react";
import axios from "axios";
import TripForm from "./TripForm";
import "./NewTrip.css";

const postTrip = (jsonPayload) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/trips`, jsonPayload)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

const NewTrip = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveTripHandler = (trip) => {
    const jsonPayload = {
      user_id: localStorage.getItem("user_id"),
      name: trip.name,
    };

    postTrip(jsonPayload);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-trip">
      {!isEditing && (
        <button onClick={startEditingHandler}>Create Trip</button>
      )}
      {isEditing && (
        <TripForm
          onAddTrip={saveTripHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewTrip;
