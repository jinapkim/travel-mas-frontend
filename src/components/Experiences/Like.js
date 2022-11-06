import React, { useState } from 'react';
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import axios from "axios";

function Like({ result }) {
    const [isLiked, setLiked] = useState(false);

    function onLike(){
        setLiked(!isLiked);

        if (isLiked) {
            alert(`You don't like experience ${result.id}`);
            axios
                .delete(`http://127.0.0.1:5000/ratings/${result.id}`)
                .then((response) => console.log(response))
                .catch((err) => console.log(err));
            }
            
        else {
            alert(`You like experience ${result.id}`);
            axios
                .put(`http://127.0.0.1:5000/ratings/${result.id}`)
                .then((response) => console.log(response))
                .catch((err) => console.log(err));
            }
        }
    
    return (
        <>
        {isLiked
	        ? <AiFillLike onClick={onLike} />
	        : <AiOutlineLike onClick={onLike} />
        }
        </>
    );
}

export default Like;
