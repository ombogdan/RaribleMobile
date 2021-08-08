import { Alert } from 'react-native';
import {HOST, TIMEOUT} from '../config';
import {keyValueActions} from '@up-storage/realm';

// Object.keys(body).forEach(key => {
//     data.append(key, body[key]);
// });
//
// fetch("http://localhost:3000/api/upload", {
//     method: "POST",
//     body: createFormData(this.state.photo, { userId: "123" })
// })


export default function ajaxMultipart(url, data, controller) {
    //let timeout = 120000;
    let timeout = keyValueActions.getValue('timeout') ? parseInt(keyValueActions.getValue('timeout'), 10) : TIMEOUT;

    const timeoutId = setTimeout(() => {
        controller ? controller.abort() : null
    }, timeout);
    console.log(HOST + url +{
        method: 'POST',
        body: data,
        signal: controller.signal
})
    let p = fetch(HOST + url, {
        method: 'POST',
        body: data,
        signal: controller.signal
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (!responseJson.message && responseJson.error === 'wrong session id') {
                return tryUpdateSession();
            }

            return responseJson;
        });

    return p;
}

function tryUpdateSession(){
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
                    keyValueActions.setSid(json.sid);
                });
            }
            else {
                keyValueActions.setSid("");
            }
        });
    })
}
