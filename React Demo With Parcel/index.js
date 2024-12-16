import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = function () {
    return React.createElement('h1', null, "Welcome Yogi");
}

const App = function () {
    return React.createElement(
        'table',
        { border: 1 },
        React.createElement('thead', null,
            React.createElement('tr', null,
                React.createElement('th', null, "Name"),
                React.createElement('th', null, "Age")
            )
        ),
        React.createElement('tbody', null,
            React.createElement('tr', null,
                React.createElement('td', null, "Yogi"),
                React.createElement('td', null, 22)
            ),
            React.createElement('tr', null,
                React.createElement('td', null, "Prasad"),
                React.createElement('td', null, 21)
            ),
            React.createElement('tr', null,
                React.createElement('td', null, "Naveen"),
                React.createElement('td', null, 21)
            )
        )
    );
}

const Main = function () {
    return React.createElement('div', null,
        React.createElement(Header),
        React.createElement(App),
    );
}

root.render(React.createElement(Main));