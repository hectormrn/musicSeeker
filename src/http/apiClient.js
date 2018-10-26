
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
        token && spotifyApi.setAccessToken(token);
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
            return data.tracks.items;
        }, (error) => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    getArtistTopTracks (id) {
        return spotifyApi.getArtistTopTracks(id, 'MX')
        .then( (resp) => {
            return resp.tracks;
        }, error => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    searchArtists (artistName, l = 10) {
        return spotifyApi.searchArtists(artistName, {limit: l})
        .then( (data) => {
            return data.artists.items;
        }, (error) => {})
    }

    getArtistById (id) {
        return spotifyApi.getArtist(id)
        .then( (resp) => {
            return resp;
        }, error => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }
    
    searchAlbums (albumName, l = 10) {
        return spotifyApi.searchAlbums(albumName, {limit: l})
        .then( (data) => {
            return data.albums.items;
        }, (error) => {})
    }

    getAlbumById (id) {
        return spotifyApi.getAlbum(id)
        .then( (resp) => {
            return resp;
        }, error => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    searchPlaylists (playlistName, l = 10) {
        return spotifyApi.searchPlaylists(playlistName, {limit: l})
        .then( (data) => {
            return data.playlists.items;
        }, (error) => {})
    }

    searchMixed (keyword, l = 10, type = null) {
        let proms = []
        let promiseMap = {
            tracks: this.searchTracks,
            artists: this.searchArtists,
            albums: this.searchAlbums,
            playlists: this.searchPlaylists,
        };

        type ?
            promiseMap.hasOwnProperty(type) && proms.push( promiseMap[type].call(this, keyword, l) )
        :
            Object.keys(promiseMap).forEach(k => {
                proms.push(promiseMap[k].call(this, keyword, l))
            });
        ;
        
        return Promise.all(proms).then( resp => {
            return resp;
        }, error => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }
    
    getMe () {
        return spotifyApi.getMe().then(resp => {
            return resp;
        }, error => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

    getNowPlaying () {
        return spotifyApi.getMyCurrentPlayingTrack().then(resp => {
            return resp.item ? resp.item :
                httpErrorHandler.noContent({error: {status: 204, message: 'Content not found'}});
        }, error => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }
    
    getPlaylist (id) {
        return spotifyApi.getPlaylist(id).then( resp => {
            return resp
        }, error => {
            httpErrorHandler.httpCode(error, ApiClient.exit);
        })
    }

 }

 export default ApiClient;