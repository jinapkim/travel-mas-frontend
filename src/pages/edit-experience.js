import EditExperienceForm from "../components/Experiences/EditExperienceForm";
import '../css/edit-experience.css';

export const EditExperiencePage = ({ experienceToEdit }) => {

    return (
        <div className="edit-experience">
            <h1>Edit Experience</h1>
            <EditExperienceForm experienceToEdit={experienceToEdit} />
        </div>
    );
};

export default EditExperiencePage;
