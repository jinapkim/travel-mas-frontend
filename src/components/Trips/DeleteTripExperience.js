import axios from "axios";
import "./DeleteTripExperience.css";

const DeleteTripExperience = (props) => {
  const deleteHandler = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/trips/${props.tripId}/experiences/${props.experienceId}`
      )
      .then((response) => {
        console.log(
          `Deleted Experience ${props.experienceId} From Trip ${props.tripId}`
        );
        props.refreshExperiences(props.tripId);
      })
      .catch((err) => {
        alert("Failed to remove experience from trip");
      });
  };

  return (
    <div className="delete-trip">
      <button onClick={deleteHandler}>Remove From Trip</button>
    </div>
  );
};

export default DeleteTripExperience;
