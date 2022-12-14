const CONNECTION_EVENT_PATH = 'event/connect'
const CUSTOM_EVENT_PATH = 'event/custom'
const API_URL = 'http://arena-dashboard-production.s3-website-us-west-2.amazonaws.com/'
//const API_URL = 'https://arena-api-stage.herokuapp.com/'

async function logAccountConnectedEvent(token, walletAddress) {
    if (!token || !walletAddress) return false;
    const reqBody = {
        'token': token,
        'address': walletAddress
    };
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(reqBody),
    };
    fetch(API_URL + CONNECTION_EVENT_PATH, reqOptions)
        .then(res => {
            return true
        }).catch(error => {
            console.error(error);
            return false
        });
}

async function logCustomEvent(token, walletAddress, event) {
    if (!token || !event) return false;
    const reqBody = {
        'token': token,
        'event': event,
        'address': walletAddress
    };
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(reqBody),
    };
    fetch(API_URL + CUSTOM_EVENT_PATH, reqOptions)
        .then(res => {
            return true
        }).catch(error => {
            console.error(error);
            return false
        });
}

export { logAccountConnectedEvent, logCustomEvent }
