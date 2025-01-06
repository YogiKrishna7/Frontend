// import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

import { AllMovies } from "./components/api";

(async function renderApp() {
    const movies = await AllMovies();
  const App = function () {
    // const [filteredMovies, setFilteredMovies] = useState(movies);

    return (
      <div className="main-container">
        <Header />
        <Body m={movies} />
      </div>
    );
  };

  const htmlElement = document.getElementById("root");
  const root = ReactDOM.createRoot(htmlElement);
  root.render(<App />);
})();
