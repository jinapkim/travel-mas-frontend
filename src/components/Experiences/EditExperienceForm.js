import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const EditExperienceForm = ({ experienceToEdit }) => {

  const navigate = useNavigate();

  const [title, setTitle] = useState(experienceToEdit.title);
  const [description, setDescription] = useState(experienceToEdit.description);
  const [location, setLocation] = useState(experienceToEdit.location);
  const [rating, setRating] = useState(experienceToEdit.rating);

  const editExperience = (event) => {
    event.preventDefault();
    const jsonPayload = {
      'title': title,
      'description': description,
      'location': location,
      'rating': rating
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/experiences/${experienceToEdit.id}`, jsonPayload, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        if(response.status === 200){
          alert("Successfully edited the experience");
        } else {
          alert(`Failed to edited the experience, status code = ${response.status}`);
        }});
     
        navigate('/');
  };

  const cancelEditExperience = (event) => {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <div>
    <form>
      <div className="edit-experience__controls">
        <div className="edit-experience__control">
          <label>Title</label>
          <input
            type="text"
            defaultValue={experienceToEdit.title}
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="edit-experience__control">
          <label>Description</label>
          <input
            type="text"
            defaultValue={experienceToEdit.description}
            name="description"
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="edit-experience__control">
          <label>Location</label>
          <input
            type="text"
            defaultValue={experienceToEdit.location}
            name="location"
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className="edit-experience__control">
            <label>Rating</label>
            <input
            type="number"
            defaultValue={experienceToEdit.rating}
            name="rating"
            min='0'
            max='5'
            onChange={e => setRating(e.target.value)}
            />
        </div>
        
      </div>
      <div className="edit-expense__actions">
        <button onClick={editExperience}>Save</button>
        <button onClick={cancelEditExperience}>Cancel</button>
      </div>
    </form>
    </div>
  );
};

export default EditExperienceForm;
