import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ExperiencesTable from '../../components/Experiences/ExperiencesTable';

function SearchResult() {

    const navigate = useNavigate();
    const location = useLocation();

    const [experienceToEdit, setExperienceToEdit] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const onEdit = async exp_id => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${exp_id}`, { 
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            } 
        });
        const data = await response.json();
        setExperienceToEdit(data);
        navigate('/edit-experience');
    };

    const onDelete = async exp_id => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/experiences/${exp_id}`, { 
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            } 
        });
        if(response.status === 200){
            const newResults = searchResults.filter(e => e.exp_id !== exp_id);
            setSearchResults(newResults);
            alert('Experiences sucessfully deleted')
            loadAllExperiences();
        } else {
            alert(`Failed to delete experience ${exp_id}, ${response.statusText}`);
        }
    };

    const loadAllExperiences = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/experiences`);
        const data = await response.json();
        setSearchResults(data.experiences);
    }
    
    return (
        <>
            <h1>Results for "{location.state.query}"</h1>
            <ExperiencesTable results={location.state.experiences} onDelete={onDelete} onEdit={onEdit}></ExperiencesTable>
        </>
    );
}

export default SearchResult;