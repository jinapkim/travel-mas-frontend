import ViewExperience from "../components/Experiences/ViewExperience";
import '../css/view-experience.css';
import { useNavigate } from 'react-router-dom';

export const ViewExperiencePage = ({ experienceToView, setExperienceToEdit }) => {
    const navigate = useNavigate();

    const onEdit = async exp_id => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/experiences/${exp_id}`, { 
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
            alert('Experiences sucessfully deleted')
            navigate('/');
        } else {
            alert(`Failed to delete experience ${exp_id}, ${response.statusText}`);
        }
    };

    return (
        <div className="view-experience">
            <ViewExperience experienceToView={experienceToView} onDelete={onDelete} onEdit={onEdit} />
        </div>
    );
};

export default ViewExperiencePage;
