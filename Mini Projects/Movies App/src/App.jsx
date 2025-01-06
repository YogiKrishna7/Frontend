import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import { AllMovies } from "./components/api";

(async function renderApp() {
  const movies = await AllMovies();

  const App = function () {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    function search() {
      const term = document.getElementById("search-bar").value.toLowerCase();

      const gotMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(term);
      });

      setFilteredMovies(gotMovies);
    }

    return (
      <div className="main-container">
        <Header s={search} />
        <Body obj={filteredMovies} />
      </div>
    );
  };

  const htmlElement = document.getElementById("root");
  const root = ReactDOM.createRoot(htmlElement);
  root.render(<App />);
})();
