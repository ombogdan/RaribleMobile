import {keyValueActions} from '@up-storage/realm';
import _ from "lodash";

export default function ajax(url, data, callback, options) {
    let headers = {};
    //let timeout = 60000;

    // const controller = new AbortController();
    // const {signal} = controller.signal

    if (typeof data === 'function') {
        callback = data;
        data = {};
    }

    if (typeof callback === 'object') {
        headers = callback;
        callback = null;
    }
    let timeout = keyValueActions.getValue('timeout') ? parseInt(keyValueActions.getValue('timeout'), 10) : TIMEOUT;
    setTimeout(() => {
        try {
            !_.isEmpty(data.controller) ? data.controller.abort() : null
        } catch (err) {
console.log(err)
console.log('err in ajax')
        }

    }, timeout);

    let p = fetch(HOST + '/api/ping', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(data || {}),
        signal: data.controller.signal,
    }).then((response) => {
        return response.json().then(function (json) {
            if (json.error === 'wrong session id') {
                return tryUpdateSession()
                    .then(function () {
                        return keyValueActions.getSid()
                    })
                    .then(function (sid) {
                        data.sid = sid;
                    })
            }
        });
    }).then(() => {
        return fetch(HOST + url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(data || {}),
            signal: data.controller.signal,
        }).then(function (response) {
            if (response.ok) {
                return response.json().catch(function () {
                    return response.text();
                });
            } else {
                return response.json().then(function (json) {
                    if (json.error === 'wrong session id') {
                        return tryUpdateSession();
                    }
                    throw json;
                }, async function () {
                    let errorServer = await response.text()
                    console.log(errorServer)
                    console.log('errorServer')
                    throw response;
                });
            }
        }, function (err) {
console.log(err);
            if (options.callbackError === true) {
                throw err;
            }

        })
    })

    if (callback) {
        p.then(callback);
    }

    return p;
}

// function isJson(response) {
//     var contentType = response.headers.get("content-type");
//     return !!contentType && contentType.indexOf("application/json") !== -1;
// }

function tryUpdateSession() {
console.log('!!!!!!!!!!!tryUpdateSession!!!!!!!!');
    let method = '/api/auth/login';

    return Promise.all([
        keyValueActions.getToken(),
    ]).then(([token]) => {

        //if (!token){return;}

        let data = {token: token};
console.log(data);

        return fetch(HOST + method, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data || {})
        }).then(function (response) {
            if (response.ok) {
                return response.json().then(function (json) {
console.log(json);
                    let permission = JSON.stringify(json.permission);
                    keyValueActions.setValue('menuPermission', permission)
                    keyValueActions.setSid(json.sid).then(() => {
                        clearPermission(permission)
                    });
                });
            } else {
                // Navigation.forceUpdate()
                keyValueActions.setSid("").then(() => {
                })
            }
        }).catch(function (e) {
console.log(e);
        });
    })
}
