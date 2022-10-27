import React from 'react';
import '../css/experiences.css'
import ExperiencesTable from '../components/Experiences/ExperiencesTable';
import { searchResults } from '../services/experiences';


const Experiences = () => {


    return (
        <div class="exp-page">
            <h1>Experiences</h1>
            <ExperiencesTable results={searchResults}></ExperiencesTable>
        </div>
    );  
}

export default Experiences;
