import React, {Component} from "react";
import { withRouter } from 'react-router';
import './back-button.scss';

class BackButton extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    handleClick = () => this.props.history.goBack();

    render() {
        return(
            <img src="../../images/previous.svg" title="Atras"
            className="BackButton" onClick={this.handleClick} />
        )
    }
}

export default withRouter(BackButton);