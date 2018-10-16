const path = require('path');
import moment from "moment";

const getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
}

export const durationFormat = ms => {
    var tempTime = moment.duration(ms);
    return `${tempTime.minutes()} : ${tempTime.seconds()<=9?'0'+tempTime.seconds(): tempTime.seconds()}`
}

export const getMediaThumbnail = (data) => {
    let img = "";
    switch (data.type) {
        case 'track':
            img = data.album.images[1].url;
            break;
        case 'artist':
        case 'playlist':
        case 'album':
           img = data.images.length > 0 ? data.images[1] ? data.images[1].url
                    : data.images[0] ? data.images[0].url : "../../images/404.svg": "../../images/404.svg";
    }
    return img;
}

export const getImgMediaClass = (data) => {
    let clssName = "ml-3";
    switch (data.type) {
        case 'artist':
           clssName += " rounded-circle";
           break;
    }
    return clssName;
}

export const getMediaDescription = (data) => {
    switch(data.type){
        case 'album':
            return data.artists[0].name
        case 'playlist':
            return `Total tracks ${data.tracks.total}`
        case 'track':
            return data.artists[0].name
    }
}

export const getToken = () => {
    let token = localStorage.getItem('sptoken'); 
    token = token ? token: getHashParams().access_token ? getHashParams().access_token: undefined;
    token ? localStorage.setItem('sptoken', token): localStorage.removeItem('sptoken'); 
    return token;
}