import React from "react";
import NewExperience from "../components/NewExperience/NewExperience";
import NewTrip from "../components/NewTrip/NewTrip";
import "../css/home.css";

const Home = () => {
  return (
    <>
    <div className="home-image">
      <img
        className="banner"
        src={process.env.PUBLIC_URL + "/mountain_lake.jpeg"}
        alt="lake"
      />
    </div>
    <div className="prompt">
      <h1>Share your experiences and plan your next trip</h1>
    </div>
      <NewExperience />
      <NewTrip />
    </>
  );
};

export default Home;
