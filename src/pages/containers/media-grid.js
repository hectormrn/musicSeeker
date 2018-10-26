import React, { Component, Fragment } from "react";
import ApiClient from "../../http/apiClient";
import Media from '../../shared/components/media';
import Loading from "../../shared/container/loading";
import LoadingIcon from '../../shared/components/loading-icon';
import BackButton from "../../shared/components/back-button";

class MediaGrid extends Component {
    constructor () {
        super()
        this.api = new ApiClient();
        this.state = {
            gridItems: {}
        }
    }

    componentDidMount () {
        let { keyword, type } = this.props.match.params;
        this.api.searchMixed(keyword, 15, type).then( resp => {
            this.setState({gridItems: resp[0]})
        })
    }

    render() {
        return(
            <div className="container">
                {
                    this.state.gridItems && this.state.gridItems.length > 0 ?
                    <Fragment>
                    <BackButton />
                    <div className="row" style={{justifyContent: 'center'}}>
                    {
                        this.state.gridItems.map( item => {
                            return <Media data={item} key={item.id} insideGrid={true}/>    
                        })
                    }
                    </div>
                    </Fragment>
                    :
                    <Loading><LoadingIcon /></Loading>
                }
            </div>
        )
    }

}

export default MediaGrid;