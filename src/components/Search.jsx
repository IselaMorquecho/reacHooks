import React from "react";
import './Container.css'
const Search = ({search, searchInput, handleSearch}) => {
    return(
        <div className={"Search"}>
            <input type={'text'}
                   value={search}
                   ref={searchInput}
                   onChange={handleSearch}
                   placeholder={'...buscar'}
            />
        </div>
    )
}

export default Search;