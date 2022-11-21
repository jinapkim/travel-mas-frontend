import DeleteTripExperience from "./DeleteTripExperience";
import "./TripExperience.css";

const TripExperience = (props) => {
  return (
    <div className="experience">
      <img src={props.experience.image_url} alt={props.title + " image"}></img>
      <h3>{props.experience.title}</h3>
      <div>{props.experience.location}</div>
      <div>Rating: {props.experience.rating}</div>
      <DeleteTripExperience
        experienceId={props.experience.id}
        tripId={props.trip.id}
        refreshExperiences={props.refreshExperiences}
      />
    </div>
  );
};

export default TripExperience;
