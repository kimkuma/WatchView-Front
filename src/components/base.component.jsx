/* import */
import Config from '../assets/config.json';

/**
 * setUrl
 */
export function setUrl() {
    return Config.watchViewApi.protocol + '//' + Config.watchViewApi.host + ':' + Config.watchViewApi.port;
}

/**
 * setTestUrl
 */
export function setTestUrl() {
    return Config.watchViewApi.protocol + '//' + Config.watchViewApi.testHost + ':' + Config.watchViewApi.port;
}
