import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Like from './Like'


function ViewExperience({ experienceToView, onDelete, onEdit }) {
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
                <Like className='icon' result={result} />
                <u><AiOutlineDelete className='icon' title='Delete' onClick={() => onDelete(result.id)}/></u>
                <u><AiOutlineEdit className='icon' title='Edit' onClick={() => onEdit(result.id)}/></u>
                <br></br>
            </div>
        </div>
        </div>
    )

}

export default ViewExperience;
