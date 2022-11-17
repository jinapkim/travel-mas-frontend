import React from "react";
import ExperiencesRow from "./ExperiencesRow";

function ExperiencesTable({ results, likes, trips, onDelete, onEdit, onView }) {
  const user_id = parseInt(localStorage.getItem("user_id"));
  const filterLikes = likes.filter((results) => results.user_id === user_id);

  return (
    <div>
      {results.map((result, i) => (
        <ExperiencesRow
          result={result}
          likes={filterLikes}
          trips={trips}
          key={i}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default ExperiencesTable;
