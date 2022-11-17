import axios from "axios";
import AddTripForm from "./AddTripForm";
import "./AddTrip.css";

const AddTrip = (props) => {
  const addTripHandler = (data) => {
    console.log(`Adding to trip ${data.name}`);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/trips/${data.id}/experiences/${props.experienceId}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AddTripForm addTrip={addTripHandler} trips={props.userTrips} />
    </div>
  );
};

export default AddTrip;
