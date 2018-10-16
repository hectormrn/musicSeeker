import React from "react";

const Search = (props) => (
        <form>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    onChange={props.onTyping}
                    onKeyPress={props.handlekp}
                    className="form-control"
                    autoFocus
                />
                <div className="input-group-append">
                    <button 
                        onClick={props.onSearch} 
                        className="btn"
                        style={{backgroundColor:'#1db954',color:'#FEFEFE'}} 
                        type="button">
                        Search
                    </button>
                </div>
            </div>
        </form>
)

export default Search;