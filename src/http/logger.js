
const logger = (msg, data = '') => {
    return (type = '') => {
        let bg = "transparent";
        let emj = "";
        switch (type) {
            case 'i': bg = "#07B7F9"; emj = '🚀';break; //info
            case 'e': bg = "#FC0426"; emj = '💀'; break; //error
            case 's': bg = "#178104"; emj = '🏁'; break; //success
        }
        console.log(
            `%c ${emj} ${msg}`,
            `color: white; border-top-left-radius: 7px; border-bottom-left-radius: 7px;  font-size: 14px; background-color:${bg};`,
            data
            );
    }
}

export { logger };