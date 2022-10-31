import React from 'react';
import '../css/experiences.css'
import { useState, useEffect } from 'react';
import ExperiencesTable from '../components/Experiences/ExperiencesTable';


function Experiences() {
    
    //const data = require('../components/Experiences/experiences-sample-data.json');
    //const searchResults = data.experiences;

    const [searchResults, setSearchResults] = useState([]);

    const loadExperiences = async () => {
        const response = await fetch('http://127.0.0.1:5000/experiences');
        const data = await response.json();
        setSearchResults(data.experiences);
    }

    useEffect(() => {
        loadExperiences();
    }, []);

    return (
        <div class="exp-page">
            <h1>Experiences</h1>
            <ExperiencesTable results={ searchResults }></ExperiencesTable>
        </div>
    );  
}

export default Experiences;
