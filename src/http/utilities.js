const path = require('path');

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

export const getToken = () => {
    let token = localStorage.getItem('sptoken');
    const params = token ? token: getHashParams();
    return params.access_token;
}