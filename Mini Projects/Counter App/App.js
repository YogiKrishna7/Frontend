import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

const htmlEle = document.getElementById("root");
const root = ReactDOM.createRoot(htmlEle);

function App() {
    return (
        <>
            < Counter />
        </>
    );
}

root.render(<App />);