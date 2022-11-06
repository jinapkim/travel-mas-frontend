import React from 'react';
import ExperiencesRow from './ExperiencesRow';


function ExperiencesTable({ results, onDelete, onEdit }) {

    return (
        <div>
            {results.map((result, i) => <ExperiencesRow 
                result={result} 
                key={i} 
                onDelete={onDelete}
                onEdit={onEdit}/>)}
        </div>
    );
}

export default ExperiencesTable;
