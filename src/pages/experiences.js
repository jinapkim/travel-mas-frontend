import React from 'react';
import '../css/experiences.css'
import { useState, useEffect } from 'react';
import ExperiencesTable from '../components/Experiences/ExperiencesTable';


function Experiences() {
    
    //const data = require('../components/Experiences/experiences-sample-data.json');
    //const searchResults = data.experiences;

    const [searchResults, setSearchResults] = useState([]);

    const loadAllExperiences = async () => {
        const response = await fetch('http://127.0.0.1:5000/experiences');
        const data = await response.json();
        setSearchResults(data.experiences);
    }

    const loadExperiencesByKeyword = async keyword => {
        const response = await fetch('http://127.0.0.1:5000/experiences?keyword=' + keyword);
        const data = await response.json();
        setSearchResults(data.experiences);
    }

    const loadExperiencesByUser = async user_id => {
        const response = await fetch('http://127.0.0.1:5000/users/' + user_id + '/experiences');
        const data = await response.json();
        setSearchResults(data.experiences);
    }

    useEffect(() => {
        loadAllExperiences();
        //loadExperiencesByKeyword(keyword);
        //loadExperiencesByUser(user_id);
    }, []);

    return (
        <div class="exp-page">
            <h1>Experiences</h1>
            <ExperiencesTable results={ searchResults }></ExperiencesTable>
        </div>
    );  
}


export default Experiences;
