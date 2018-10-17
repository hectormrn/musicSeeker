import React, { PureComponent } from "react";
import ApiClient from "../../http/apiClient";
import Loading from "../../shared/container/loading";
import LoadingIcon from '../../shared/components/loading-icon';
import { getMediaThumbnail } from "../../http/utilities";

const uis = {
    txCenter:  {textAlign: 'center'},
    pdgTop: {paddingTop: '15px'},
    fs: {fontSize: '18px'},
    mrgTop: {marginTop: '0px'}
}

class NowPlaying extends PureComponent {
    constructor(props) {
        super();
        this.api = new ApiClient();
        this.state = {
            playing: {},
            play: false
        }
        this.idcounter = null;
    }

    componentDidMount () {
        this.getNowPlayingData();
        this.updateNowPlaying();
    }

    getNowPlayingData = () => {
        this.api.getNowPlaying().then(resp => {
            this.setState({playing: resp});
        })
    }

    updateNowPlaying = () => {
        this.idcounter = setInterval(()=>{
            this.getNowPlayingData();
        }, 15000)
    }

    componentWillUnmount () {
        clearInterval(this.idcounter);
    }

    render() {
        return(
            <section className="main" style={uis.mrgTop}>
            {
                Object.keys(this.state.playing).length > 0 ?
                <div className="jumbotron" style={uis.txCenter}>
                    <img src={getMediaThumbnail(this.state.playing)} width={350} height={350}/> 
                    <div className="container" style={uis.txCenter}>
                        <h2 style={uis.pdgTop}>{this.state.playing.name}</h2>
                        <p class="badge badge-secondary" style={uis.fs}>
                            Album: {this.state.playing.album.name}
                        </p><br />
                        <p class="badge badge-success" style={uis.fs}>
                            By: {this.state.playing.artists[0].name}
                        </p>
                    </div>      
                </div>
                :
                <Loading><LoadingIcon /></Loading>
            }
            </section>
        )
    }

}

export default NowPlaying;