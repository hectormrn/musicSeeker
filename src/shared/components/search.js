import React from "react";

const Search = (props) => (
        <form>
            <div className="form-group">
            <input 
                type="text" 
                onChange={props.onTyping}
                onKeyPress={props.handlekp}
                className="form-control"
                />
            </div>
            <div className="form-group text-center">
                <button 
                    type="button"
                    onClick={props.onSearch}
                    className="btn btn-primary"  
                    >
                Search
                </button>
            </div>
        </form>

)

export default Search;