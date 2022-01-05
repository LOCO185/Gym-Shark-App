// import React from "react";
import "./search.css";

// const Search = ({ search, setSearch }) => {
//   const handleUserSearchInput = (e) => {
//     e.preventDefault();
//     setSearch(e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//     <div className="feature-container">
//       <form>
//         <input
//           type="text"
//           placeholder="Search.."
//           name="search"
//           value={search}
//           onChange={handleUserSearchInput}
//         />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
    // console.log(data);

  useEffect(() => {
    const getExercise = async () => {
      const { data } = await axios.get(
        "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
      );
      setData(data);
    };
    getExercise();
  }, []);

  const filterExercises = (value, array) => {
    return array.filter((item) => {
      return item.name.toLowerCase().includes(value);
    });
  };

  const exercises = (item) => {
    if (data.length > 0) {
      return filterExercises(term, data).map((exercise) => {
        return <li key={item.id}>{item.name}</li>;
      });
    }
  };
  return (
    <div className="feature-container">
        <div className="field">
          {/* <label>Search</label> */}
          <input
            className="search"
            type="text"
            placeholder="Search.."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
      {/* <button type="submit">Search</button> */}
      </div>
      <ul>{exercises()}</ul>
    </div>
  );
};

export default Search;