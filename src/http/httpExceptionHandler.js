/**
 * 
 */
 
class HttpExceptionHanlder {
    
    constructor(){}

    httpCode(error, callback = undefined) {
        let err = JSON.parse(error.response);
        console.warn(err);
        alert(`SpotifyErr - ${err.error.message || 'Ocurrio un Error'}`);
        switch (err.error.status) {
            case 401:
            typeof callback == "function" ? callback(): location.href = "http://localhost:9000";
            break;
        }
    }
 }

 export default HttpExceptionHanlder;