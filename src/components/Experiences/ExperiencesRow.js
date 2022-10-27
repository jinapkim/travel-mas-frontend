import { AiFillLike, AiOutlineLike, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

function ExperiencesRow({ result }) {
    
    return (
        
        <div class="box">
            <div class="shadow-box">
                <img class="card-img" src={result.image_url} alt={result.title+' image'} ></img>
                <div class="container">
                    <h3>{result.title}</h3>
                    <li>Description: {result.description}</li>
                    <li>Location: {result.location}</li>
                    <li>Coordinates: {result.geo_location}</li>
                    <li>Rating: {result.rating}</li>
                    <br></br>
                    <a href="/"><AiOutlineDelete class='icon'/></a>
                    <a href="/"><AiOutlineEdit class='icon'/></a>
                    <a href="/"><AiOutlineLike class='icon'/></a>
                    <br></br>
                </div>
            </div> 
        </div>
    )
}

export default ExperiencesRow;
