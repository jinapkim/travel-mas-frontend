import ExperiencesRow from './ExperiencesRow';


function ExperiencesTable({ results }) {

    return (
        <div>
            {results.map((result, i) => <ExperiencesRow result={result} key={i}/>)}
        </div>
    );
}

export default ExperiencesTable;
