import { useState } from "react";
import "./AddTripForm.css";

const AddTripForm = (props) => {
  const [selectedTrip, setSelectedTrip] = useState(props.trips[0].name);
  const [tripId, setTripId] = useState(props.trips[0].id);

  const selectedTripHandler = (event) => {
    let index = event.target.selectedIndex;
    setSelectedTrip(event.target.value);
    setTripId(event.target.childNodes[index].id);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: tripId,
      name: selectedTrip,
    };
    props.addTrip(data);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="add-trip__controls">
        <div className="add-trip__control">
          <label>Trips</label>
          <select onChange={selectedTripHandler}>
            {props.trips.map((trip) => (
              <option key={trip.id} id={trip.id}>
                {trip.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button>Add To Trip</button>
        </div>
      </div>
    </form>
  );
};

export default AddTripForm;
