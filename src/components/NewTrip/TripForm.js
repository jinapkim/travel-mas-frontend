import { useState } from "react";
import "./TripForm.css";

const TripForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
  });

  const changeNameHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const trip = {
      name: userInput.enteredName,
    };
    props.onAddTrip(trip);

    setUserInput({
      enteredName: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-trip__controls">
        <div className="new-trip__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredName}
            onChange={changeNameHandler}
          />
        </div>
      </div>
      <div className="new-trip__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button>Create Trip</button>
      </div>
    </form>
  );
};

export default TripForm;
