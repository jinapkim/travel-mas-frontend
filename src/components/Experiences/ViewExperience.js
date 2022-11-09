import React from 'react';


function ViewExperience({ experienceToView }) {
    const result=experienceToView;
    
    return (
        <div className="single-box">
        <div className="shadow-box">
            <img className="card-img" src={result.image_url} alt={result.title+' image'} ></img>
            <div className="container">
                <h3>{result.title}</h3>
                <li>Description: {result.description}</li>
                <li>Location: {result.location}</li>
                <li>Coordinates: {result.geo_location}</li>
                <li>Rating: {result.rating}</li>
                <br></br> 
            </div>
        </div>
        </div>
    )

}

export default ViewExperience;
