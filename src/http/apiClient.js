/**
 * 
 */
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from './utilities';

const spotifyApi = new SpotifyWebApi();
let instance = null;

 class ApiClient {
    constructor () {
        if (!instance) {
            instance = this;
            this.setUp();
        }
        return instance;
    }

    setUp () {
        const token = getToken();
        if (token) {
        spotifyApi.setAccessToken(token);
        } else {
            console.error("No se encontro un TOKEN: <httpException>")
        }
    }

    getSPToken = (token) => spotifyApi.getAccessToken()

    resetToken () {

    }

    /**
     *  Get all tracks by track name match
     * @param {String} trackName keyword track name 
     * @param {Integer} l limit of records 
     */
    searchTracks(trackName, l = 10) { 
        return spotifyApi.searchTracks(trackName, {limit: l})
        .then( (data) => {
            console.log(`Result by ${trackName}`);
            console.log(data.tracks.items);
            return data.tracks.items;
        }, (error) => {
            //TODO httpExeptionHandler..
            let err = JSON.parse(error.response);
            console.warn(err);
            alert(`SpotifyErr - ${err.error.message || 'Ocurrio un Error'}`);
            if (err.error.status === 401) location.href = "http://localhost:9000";
        })
    }

 }

 export default ApiClient;