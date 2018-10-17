import React, { Component } from "react";
import ApiClient from "../../http/apiClient";
import ProfileLayout from "../components/profile/profile-layout";
import HandleError from "../../error/containers/handle-error";
import '../components/profile/profile.scss'
import Loading from '../../shared/container/loading';
import LoadingIcon from '../../shared/components/loading-icon';

class Profile extends Component {
    constructor () {
        super()
        this.api = new ApiClient();
        this.state = {
            profile: {}
        }
    }

    componentDidMount () {
        this.api.getMe().then(resp => {
            this.setState({profile: resp})
        })
    }

    render() {
        return(
            <HandleError>
                {
                Object.keys(this.state.profile).length > 0 ?
                <ProfileLayout className="Profile">
                    <div className="Profile-banner"></div>
                    <img className="Profile-avatar" src={this.state.profile.images[0].url} />
                    <div className="Profile-info container">
                        <div className="jumbotron">
                            <h1 className="display-4">{this.state.profile.display_name}</h1>
                            <hr className="my-4" />
                            <button type="button" className="btn btn-default">
                                Seguidores 
                                <span className="badge badge-light">
                                    {this.state.profile.followers.total}
                                </span>
                            </button>
                        </div>
                    </div>
                </ProfileLayout>
                :
                <Loading><LoadingIcon /></Loading>
                }
            </HandleError>
        )
    }

}

export default Profile;