import React from "react";
import MovieCard from "./MovieCard";

const Body = function ({ m }) {
    if (!Array.isArray(m) || m.length === 0) {
        return <div>No movies to display</div>;
    }

    return (
        <div className="body-div">
            <div className="mov-container">
                {m.map((mov) => (
                    <MovieCard mov={mov} />
                ))}
            </div>
        </div>
    );
};

export default Body;
