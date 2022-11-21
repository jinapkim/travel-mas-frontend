import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { get_by_keyword } from "../../services/experiences";
import "../../css/search_bar.css";

const Search = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    get_by_keyword(keyword)
      .then((res) => {
        console.log(res.data);
        const experiences = res.data.experiences;
        navigate("/search", {
          state: { query: keyword, experiences: experiences },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="search">
        <form onSubmit={Submit}>
          <div className="search-icon">
            <FaSearch />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={(e) => setKeyword(e.target.value.replace(/\s+$/g, ""))}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
