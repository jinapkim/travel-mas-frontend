import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import axios from "axios";

function Like({ result }) {
  const [isLiked, setLiked] = useState(false);

  function onLike() {
    setLiked(!isLiked);

    if (isLiked) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/ratings`,
        {
            "experience_id": result.id,
            "thumbs_up": false
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/ratings`,
          {
            experience_id: result.id,
            thumbs_up: true,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        )
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      {isLiked ? (
        <AiFillLike onClick={onLike} />
      ) : (
        <AiOutlineLike onClick={onLike} />
      )}
    </>
  );
}

export default Like;
