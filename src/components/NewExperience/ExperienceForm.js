import { useState } from "react";
import StarRatings from "react-star-ratings";
import "./ExperienceForm.css";

const ExperienceForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredDescritption: "",
    enteredLocation: "",
    enteredRating: 0,
    selectedFile: null
  });

  const changeTitleHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const changeDescriptionHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDescritption: event.target.value };
    });
  };

  const changeLocationHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredLocation: event.target.value };
    });
  };

  const changeRatingHandler = (rating) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredRating: rating };
    });
  };

  const selectFileHandler = (event) => {
    setUserInput((prevState) => {
        return {...prevState, selectedFile: event.target.files[0]};
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const experience = {
      title: userInput.enteredTitle,
      description: userInput.enteredDescritption,
      location: userInput.enteredLocation,
      rating: userInput.enteredRating,
      imageFile: userInput.selectedFile
    };

    // function to post data goes here
    props.onAddExperience(experience);

    setUserInput({
      enteredTitle: "",
      enteredDescritption: "",
      enteredLocation: "",
      enteredRating: 0,
      selectedFile: null
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-experience__controls">
        <div className="new-experience__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-experience__control">
          <label>Description</label>
          <input
            type="text"
            value={userInput.enteredDescritption}
            onChange={changeDescriptionHandler}
          />
        </div>
        <div className="new-experience__control">
          <label>Location</label>
          <input
            placeholder="1500 SW Jefferson Way, Corvallis, OR"
            type="text"
            value={userInput.enteredLocation}
            onChange={changeLocationHandler}
          />
        </div>
        <div className="new-experience__control">
            <label>Rating</label>
            <StarRatings
            rating={userInput.enteredRating}
            starRatedColor="gold"
            starHoverColor="gold"
            changeRating={changeRatingHandler}
            numberOfStars={5}
            name="rating"
            starDimension="25"
            />
        </div>
        <div className="new-experience__control">
            <label>Upload Image</label>
            <input id="file-upload" type="file" name="file" onChange={selectFileHandler} />
        </div>
      </div>
      <div className="new-experience__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button>Add Experience</button>
      </div>
    </form>
  );
};

export default ExperienceForm;
