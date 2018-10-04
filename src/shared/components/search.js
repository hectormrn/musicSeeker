import React from "react";

const Search = (props) => (
        <form>
            <div className="form-group">
            <input 
                type="text" 
                onChange={ (evt) => props.onType(evt.target.value) }
                className="form-control"
                />
            </div>
            <div className="form-group text-center">
                <button 
                    type="button"
                    onClick={ e => props.onSearch(e)}
                    className="btn btn-primary"  
                    >
                Search
                </button>
            </div>
        </form>

)

export default Search;