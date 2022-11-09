import React from 'react';
import ExperiencesRow from './ExperiencesRow';


function ExperiencesTable({ results, onDelete, onEdit, onView }) {

    return (
        <div>
            {results.map((result, i) => <ExperiencesRow 
                result={result} 
                key={i} 
                onDelete={onDelete}
                onEdit={onEdit}
                onView={onView}/>)}
        </div>
    );
}

export default ExperiencesTable;
