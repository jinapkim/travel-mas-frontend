import { useState } from "react";
import axios from "axios";
import TripSelect from "../components/Trips/TripSelect";
import TripExperiences from "../components/Trips/TripExperiences";

const Trips = (props) => {
  const [selectedTrip, setSelectedTrip] = useState({
    id: 0,
    name: "No Trips Found",
  });
  const [experiences, setExperiences] = useState([]);

  const setSelectedTripHandler = (trip) => {
    setSelectedTrip(trip);
  };

  const deleteTrip = (trip_id) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/trips/${trip_id}`,
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(`Trip id ${trip_id} deleted`);
      })
      .catch((err) => {
        alert(`Failed to delete trip id ${trip_id}`);
      });
  };

  const getTripExperiences = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/trips/${selectedTrip.id}/experiences`
      )
      .then((response) => {
        setExperiences(response.data.experiences);
        console.log(response.data.experiences);
      })
      .catch((err) => {
        console.log(`No Experiences Found For Trip ID ${selectedTrip.id}`);
      });
  };

  const onSubmitHandler = (del) => {
    if (del) {
      deleteTrip(selectedTrip.id);
    } else {
      getTripExperiences(selectedTrip.id);
    }
  };

  return (
    <div>
      <TripSelect
        onSelectTrip={setSelectedTripHandler}
        onSubmit={onSubmitHandler}
      />
      <TripExperiences experiences={experiences} trip={selectedTrip} refreshExperiences={getTripExperiences}/>
    </div>
  );
};

export default Trips;
