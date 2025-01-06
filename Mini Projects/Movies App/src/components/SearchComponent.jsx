const SearchComponent = function ({obj}) {
    return (
        <div className="main-search">
            <input id="search-bar" placeholder="Search Movie" onKeyUp={obj}/>
            {/* <button id="search-btn" onClick={obj}> Search </button> */}
        </div>
    );
};

export default SearchComponent;
