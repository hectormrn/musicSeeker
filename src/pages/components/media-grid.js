import React, { Component } from "react";
import ApiClient from "../../http/apiClient";
import GridItem from "../../shared/components/grid-item";

class MediaGrid extends Component {
    constructor () {
        super()
        this.api = new ApiClient();
        this.state = {
            listShow: {}
        }
    }

    componentDidMount () {
        let typeOperation = this.props.location.pathname.split("/");
        switch(typeOperation[2]){
            case 'tracks':
            this.api.searchTracks(typeOperation[3], "10").then(resp => {
                this.setState({listShow: resp})
            })
            break;
            case 'artists':
            this.api.searchArtists(typeOperation[3], "10").then(resp => {
                this.setState({listShow: resp})
             })
            break;
            case 'albums':
            this.api.searchAlbums(typeOperation[3], "10").then(resp => {
                this.setState({listShow: resp})
             })
            break;
            case 'playlists':
            this.api.searchPlaylists(typeOperation[3], "10").then(resp => {
                this.setState({listShow: resp})
             })
            break;            
        }
        
    }

    render() {
        return(
            <div className="container">
                {
                    this.state.listShow && this.state.listShow.length > 0 ?
                    <div className="row">
                    {
                        this.state.listShow.map( item => {
                            return <GridItem data={item} key={item.id}/>    
                        })
                    }
                    </div>
                    :<div></div>
                }
            </div>
        )
    }

}

export default MediaGrid;