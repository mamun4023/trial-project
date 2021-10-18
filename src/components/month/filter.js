import React from 'react';
import "./index.css"

function GlobalFilter({filter, setFilter}){
    return(
        <>
            <span>
                <input 
                    className = "form-control m-2 search-box " 
                    placeholder = "Search ..."
                    value = {filter || ""} 
                    onChange = {(e)=> 
                    setFilter(e.target.value)} 
                />
            </span>
        </>
    )
}
 
export default GlobalFilter;