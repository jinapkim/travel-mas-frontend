import { useState, useEffect } from "react";
import "./TripSelect.css";

const TripSelect = (props) => {
  const [userTrips, setUserTrips] = useState([]);

  const selectedTripHandler = (event) => {
    let index = event.target.selectedIndex;
    props.onSelectTrip({
      name: event.target.value,
      id: event.target.childNodes[index].id,
    });
  };

  const loadUserTrips = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/trips?user_id=${localStorage.getItem(
        "user_id"
      )}`
    );
    const data = await response.json();
    setUserTrips(data.trips);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(event.target.id === "delete");
    if (event.target.id === "delete") {
      loadUserTrips();
      window.location.reload();
    }
  };

  useEffect(() => {
    loadUserTrips();
  }, []);

  return (
      <div className="select-trip">
        <form onSubmit={onSubmitHandler}>
          <div className="select-trip__controls">
            <div className="select-trip__control">
            <label>Trips</label>
            <select onChange={selectedTripHandler}>
              <option id="0"></option>
              {userTrips.map((trip) => (
                <option key={trip.id} id={trip.id}>
                  {trip.name}
                </option>
              ))}
            </select>
            </div>
          </div>
          <div>
            <button onClick={onSubmitHandler} id="view">
              View Experiences
            </button>
            <button onClick={onSubmitHandler} id="delete">
              Delete Trip
            </button>
          </div>
        </form>
      </div>
  );
};

export default TripSelect;
