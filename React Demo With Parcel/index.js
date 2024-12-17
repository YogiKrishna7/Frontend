import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

let name = "Yogi"

const Header = function () {
    return <h1>Welcome {name}</h1>
}

const Form = function () {
    return (
        <form>
            <div>
                <label>Name: </label>
                <input type='text' placeholder={name}></input>
            </div>

            <div>
                <label>Age: </label>
                <input type='text'></input>
            </div>

            <div>
                <label>Gender: </label>
                <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
        </form>
    );
}

const Table = function () {
    const tableStyle = {
        borderCollapse: "collapse",
        width: "50%",
        margin: "0 auto",
        textAlign: "center"
    };

    const cellStyle = {
        border: "1px solid black",
        padding: "8px"
    };

    const headerCellStyle = {
        ...cellStyle,
        backgroundColor: "lightgray",
        fontWeight: "bold"
    };

    return (
        <>
            <Header />

            <Form />

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={headerCellStyle}>Name</th>
                        <th style={headerCellStyle}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={cellStyle}>Yogi</td>
                        <td style={cellStyle}>22</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>Prasad</td>
                        <td style={cellStyle}>21</td>
                    </tr>
                    <tr>
                        <td style={cellStyle}>Eswar</td>
                        <td style={cellStyle}>23</td>
                    </tr>
                </tbody>
            </table></>
    );
}

root.render(<Table />);