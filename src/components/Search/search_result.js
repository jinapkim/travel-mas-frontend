import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ExperiencesTable from "../../components/Experiences/ExperiencesTable";

function SearchResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const [experienceToView, setExperienceToView] = useState([]);
  const [experienceToEdit, setExperienceToEdit] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [userTrips, setUserTrips] = useState([
    {
      name: "No Trips Found",
      id: -1,
    },
  ]);
  const [userLikes, setUserLikes] = useState([]);

  const onEdit = async (exp_id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${exp_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
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
    if (!data.trips.length) {
      setUserTrips([
        {
          name: "No Trips Found",
          id: -1,
        },
      ]);
    } else {
      setUserTrips(data.trips);
    }
  };

  useEffect(() => {
    loadUserTrips();
  }, userTrips);

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

  return (
    <>
      <h1>Results for "{location.state.query}"</h1>
      <ExperiencesTable
        results={location.state.experiences}
        onDelete={onDelete}
        onEdit={onEdit}
        onView={onView}
        likes={userLikes}
        trips={userTrips}
      ></ExperiencesTable>
    </>
  );
}

export default SearchResult;
