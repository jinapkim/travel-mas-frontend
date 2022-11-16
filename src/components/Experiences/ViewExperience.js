import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Like from './Like'


function ViewExperience({ experienceToView, likes, onDelete, onEdit }) {
    const result=experienceToView;
    const user_id = parseInt(localStorage.getItem("user_id"));
    const filterLikesByUser = likes.filter(ratings => ratings.user_id === user_id);
    const filterLikesByExp = filterLikesByUser.filter(rating => rating.experience_id === result.id);
    let liked = false;
    
    if (filterLikesByExp.length > 0) {
        liked = filterLikesByExp[0].thumbs_up
    }

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
                <Like className='icon' result={result} liked={liked} />
                <u><AiOutlineDelete className='icon' title='Delete' onClick={() => onDelete(result.id)}/></u>
                <u><AiOutlineEdit className='icon' title='Edit' onClick={() => onEdit(result.id)}/></u>
                <br></br>
            </div>
        </div>
        </div>
    )
}

export default ViewExperience;
