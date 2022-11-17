import React from "react";
import "../css/experiences.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExperiencesTable from "../components/Experiences/ExperiencesTable";

function Experiences({ setExperienceToEdit, setExperienceToView }) {
  const [searchResults, setSearchResults] = useState([]);
  const [userTrips, setUserTrips] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  const navigate = useNavigate();

  const onEdit = async (exp_id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/experiences/${exp_id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    const data = await response.json();
    setExperienceToEdit(data);
    navigate("/edit-experience");
  };

  const onDelete = async (exp_id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/experiences/${exp_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    if (response.status === 200) {
      const newResults = searchResults.filter((e) => e.exp_id !== exp_id);
      setSearchResults(newResults);
      alert("Experiences sucessfully deleted");
      loadAllExperiences();
    } else {
      alert(`Failed to delete experience ${exp_id}, ${response.statusText}`);
    }
  };

  const onView = async (exp_id) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/experiences/${exp_id}`
    );
    const data = await response.json();
    setExperienceToView(data);
    navigate("/view-experience");
  };

  const loadAllExperiences = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/experiences`
    );
    const data = await response.json();
    setSearchResults(data.experiences);
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

  useEffect(() => {
    loadUserTrips();
  }, []);

  useEffect(() => {
    loadAllExperiences();
  }, []);

  const loadUserLikes = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/ratings`);
    const data = await response.json();
    setUserLikes(data.ratings);
  };

  useEffect(() => {
    loadUserLikes();
  }, []);

  useEffect(() => {
    loadAllExperiences();
  }, []);

  return (
    <div className="exp-page">
      <h1>Experiences</h1>
      <ExperiencesTable
        results={searchResults}
        likes={userLikes}
        trips={userTrips}
        onDelete={onDelete}
        onEdit={onEdit}
        onView={onView}
      ></ExperiencesTable>
    </div>
  );
}

export default Experiences;
