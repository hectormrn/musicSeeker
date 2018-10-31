
import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from './utilities';
import HttpExceptionHanlder from "./httpExceptionHandler";
import { logger } from "./logger";

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
    searchTracks(trackName, options) { 
        return spotifyApi.searchTracks(trackName, options)
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

    searchArtists (artistName, options) {
        return spotifyApi.searchArtists(artistName, options)
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
    
    searchAlbums (albumName, options) {
        return spotifyApi.searchAlbums(albumName, options)
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

    searchPlaylists (playlistName, options) {
        return spotifyApi.searchPlaylists(playlistName, options)
        .then( (data) => {
            return data.playlists.items;
        }, (error) => {})
    }

    searchMixed (keyword, type = null, options) {
        let proms = []
        let promiseMap = {
            tracks: this.searchTracks,
            artists: this.searchArtists,
            albums: this.searchAlbums,
            playlists: this.searchPlaylists,
        };

        type ?
            promiseMap.hasOwnProperty(type) && proms.push( promiseMap[type].call(this, keyword, options) )
        :
            Object.keys(promiseMap).forEach(k => {
                proms.push(promiseMap[k].call(this, keyword, options))
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

    search(keyword, type, options) {
        return this.searchMixed(keyword, type, options)
    }

 }

 export default ApiClient;