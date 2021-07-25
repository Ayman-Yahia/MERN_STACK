import React from 'react'
import Select from "react-select";

const Search = () => {
    return (
        <div>
            <div>
            <form onSubmit ={OnSubmit}>
                <label>Search for: </label> 
                <Select options={options} onChange={onChange} />
                            
                <label>Id: </label> 
                <input type="text" onChange={ (e) => setId(e.target.value) }/>
            
            <button>Search</button>
            </form>
        </div>
        </div>
    )
}

export default Search
