import { useState } from "react";
import axios from "axios";
import ExperienceForm from "./ExperienceForm";
import "./NewExperience.css";

const postExperience = (jsonPayload) => {
  axios
    .post("http://localhost:50000/experiences", jsonPayload, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`
      },
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

const NewExperience = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExperienceHandler = (experience) => {
    console.log(experience);

    const jsonPayload = {
      title: experience.title,
      description: experience.description,
      location: experience.location,
      rating: +experience.rating,
    };
    // upload image to GCS via POST request
    const formData = new FormData();
    formData.append("imageFile", experience.imageFile);

    if (experience.imageFile) {
      axios
        .post("http://localhost:50000/images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => {
          // Create POST request to create experience
          const jsonPayloadImage = {
            image_id: response.data.id,
            ...jsonPayload,
          };
          postExperience(jsonPayloadImage);
        })
        .catch((err) => console.log(err));
    } else {
      // create experience without image
      postExperience(jsonPayload);
    }
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-experience">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add Experience</button>
      )}
      {isEditing && (
        <ExperienceForm
          onAddExperience={saveExperienceHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExperience;
