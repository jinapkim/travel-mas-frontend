import { AiFillLike, AiOutlineLike, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function ExperiencesRow({ result }) {
    
    return (
        <div className="box">
            <div className="shadow-box">
                <img className="card-img" src={result.image_url} alt={result.title+' image'} ></img>
                <div className="container">
                    <h3>{result.title}</h3>
                    <li>Description: {result.description}</li>
                    <li>Location: {result.location}</li>
                    <li>Coordinates: {result.geo_location}</li>
                    <li>Rating: {result.rating}</li>
                    <br></br>
                    <a href="/"><AiOutlineDelete className='icon'/></a>
                    <a href="/"><AiOutlineEdit className='icon'/></a>
                    <a href="/"><AiOutlineLike className='icon'/></a>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default ExperiencesRow;
