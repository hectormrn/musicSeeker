import React, { Component } from "react";

class Album extends Component {
    state = {

    }

    render() {
        return(
            <div><h1>Album View:</h1> {JSON.stringify(this.props)}</div>
        )
    }

}

export default Album;