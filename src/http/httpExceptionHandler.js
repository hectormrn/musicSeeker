import { logger } from "./logger";

class HttpExceptionHanlder {
    
    constructor(){
        this.msg = "An error has occurred"
    }

    redirectToHome() {
        location.href = "http://localhost:9000";
    }

    httpCode(_error, callback = undefined) {
        let err = JSON.parse(_error.response);
        logger(this.msg, _error)('e');
        alert(`SpotifyErr - ${err.error.message || this.msg}`);
        switch (err.error.status) {
            case 401:
            typeof callback == "function" ? callback(): this.redirectToHome();
            break;
        }
    }

    noContent(err, callback) {
        alert(`SpotifyErr - ${err.error.message || this.msg}`);
        logger('Error ', err)('e');
        typeof callback == "function" ? callback(): this.redirectToHome();
    }
 }

 export default HttpExceptionHanlder;