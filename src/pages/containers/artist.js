import React, { Component } from "react";

class Artist extends Component {
    state = {

    }

    render() {
        return(
            <div><h1>Artist View:</h1> {JSON.stringify(this.props)}</div>
        )
    }

}

export default Artist;