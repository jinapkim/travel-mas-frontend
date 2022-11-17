import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Like from "./Like";
import AddTrip from "../Trips/AddTrip";

function ExperiencesRow({ result, likes, trips, onDelete, onEdit, onView }) {
  let liked = false;
  const filterLikes = likes.filter((like) => like.experience_id === result.id);

  if (filterLikes.length > 0) {
    liked = filterLikes[0].thumbs_up;
  }

  return (
    <div className="box">
      <div className="shadow-box">
        <img
          className="card-img"
          src={result.image_url}
          alt={result.title + " image"}
        ></img>
        <div className="container">
          <h3
            className="view-exp"
            title="View"
            onClick={() => onView(result.id)}
          >
            {result.title}
          </h3>
          <li>Description: {result.description}</li>
          <li>Location: {result.location}</li>
          <li>Coordinates: {result.geo_location}</li>
          <li>Rating: {result.rating}</li>
          <br></br>
          <Like className="icon" result={result} liked={liked} />
          <u>
            <AiOutlineDelete
              className="icon"
              title="Delete"
              onClick={() => onDelete(result.id)}
            />
          </u>
          <u>
            <AiOutlineEdit
              className="icon"
              title="Edit"
              onClick={() => onEdit(result.id)}
            />
          </u>
          <br></br>
        </div>
        <AddTrip userTrips={trips} experienceId={result.id} />
      </div>
    </div>
  );
}

export default ExperiencesRow;
