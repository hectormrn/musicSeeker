
class HttpExceptionHanlder {
    
    constructor(){
        this.msg = "An error has occurred"
    }

    redirectToHome() {
        location.href = "http://localhost:9000";
    }

    httpCode(error, callback = undefined) {
        let err = JSON.parse(error.response);
        console.warn(err);
        alert(`SpotifyErr - ${err.error.message || this.msg}`);
        switch (err.error.status) {
            case 401:
            typeof callback == "function" ? callback(): this.redirectToHome();
            break;
        }
    }

    noContent(err, callback) {
        alert(`SpotifyErr - ${err.error.message || this.msg}`);
        typeof callback == "function" ? callback(): this.redirectToHome();
    }
 }

 export default HttpExceptionHanlder;