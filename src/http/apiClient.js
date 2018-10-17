/**
 *
 */
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from './utilities';
import HttpExceptionHanlder from "./httpExceptionHandler";

const spotifyApi = new SpotifyWebApi();
let instance = null;
const httpErrorHandler = new HttpExceptionHanlder();

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

    getSPToken = () => spotifyApi.getAccessToken()

    static exit = () => {
        spotifyApi.setAccessToken(null);
        localStorage.removeItem('sptoken')
        location.href = "http://localhost:9000";
    }

    /**
     *  Get all tracks by track name match
     * @param {String} trackName keyword track name 
     * @param {Integer} l limit of records 
     */
    searchTracks(trackName, l = 10) { 
        return spotifyApi.searchTracks(trackName, {limit: l})
        .then( (data) => {
            console.log(`Tracks => ${trackName}`);
            console.log(data.tracks.items);
            return data.tracks.items;
        }, (error) => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    getArtistTopTracks (id) {
        return spotifyApi.getArtistTopTracks(id, 'MX')
        .then( (resp) => {
            console.log("Top tracks: ", resp)
            return resp.tracks;
        }, error => {
            console.log("Search top tracks Failed...", error)
        })
    }

    searchArtists (artistName, l = 10) {
        return spotifyApi.searchArtists(artistName, {limit: l})
        .then( (data) => {
            console.log(`Artist => ${artistName}`);
            console.log(data.artists.items);
            return data.artists.items;
        }, (error) => {
            console.log("Request failed artistas, ", error)
            //httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    getArtistById (id) {
        return spotifyApi.getArtist(id)
        .then( (resp) => {
            console.log(resp)
            return resp;
        }, error => {
            console.log("Search artist by id Failed...", error)
        })
    }
    
    searchAlbums (albumName, l = 10) {
        return spotifyApi.searchAlbums(albumName, {limit: l})
        .then( (data) => {
            console.log(`Albums => ${albumName}`);
            console.log(data.albums.items);
            return data.albums.items;
        }, (error) => {
            console.log("Request failed albums, ", error)
            //httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    getAlbumById (id) {
        return spotifyApi.getAlbum(id)
        .then( (resp) => {
            console.log(resp)
            return resp;
        }, error => {
            console.log("Search album by id Failed...", error)
        })
    }

    searchPlaylists (playlistName, l = 10) {
        return spotifyApi.searchPlaylists(playlistName, {limit: l})
        .then( (data) => {
            console.log(`Playlist => ${playlistName}`);
            console.log(data.playlists.items);
            return data.playlists.items;
        }, (error) => {
            console.log("Request failed playlists, ", error)
            //httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    searchMixed (keyword, l = 10) {
        let proms = [
            this.searchTracks(keyword, l),
            this.searchArtists(keyword, l),
            this.searchAlbums(keyword, l),
            this.searchPlaylists(keyword, l)
        ]
        return Promise.all(proms).then( resp => {
            return resp;
        }, failed => {
            console.log("Request Mixed failed :( ")
        })
    }
    
    getMe () {
        return spotifyApi.getMe().then(resp => {
            console.log("ME: ", resp)
            return resp;
        }, failed => {
            console.log("Fallo request getMe :( ")
        })
    }

 }

 export default ApiClient;