import React from "react";
import MovieCard from "./MovieCard";

const Body = function ({ obj }) {
    return (
        <div className="body-div">
            <div className="mov-container">
                {obj.map((mov) => (
                    <MovieCard mov={mov} />
                ))}
            </div>
        </div>
    );
};

export default Body;
