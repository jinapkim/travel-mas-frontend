import "./TripExperiences.css";
import TripExperience from "./TripExperience";

const TripExperiences = (props) => {
  if (!props.experiences.length) {
    return (
      <div>
        <h1>No Experiences Found For Selected Trip</h1>
      </div>
    );
  }
  return (
    <div className="experiences-container">
      {props.experiences.map((exp) => (
        <TripExperience
          key={exp.id}
          experience={exp}
          trip={props.trip}
          refreshExperiences={props.refreshExperiences}
        />
      ))}
    </div>
  );
};

export default TripExperiences;
