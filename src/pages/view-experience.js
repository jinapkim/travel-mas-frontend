import ViewExperience from "../components/Experiences/ViewExperience";
import '../css/view-experience.css';

export const ViewExperiencePage = ({ experienceToView }) => {

    return (
        <div className="view-experience">
            <ViewExperience experienceToView={experienceToView} />
        </div>
    );
};

export default ViewExperiencePage;
