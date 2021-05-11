import fetchData from './data';

export default function httpClient(endpoint, body) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetchData(endpoint, body)
                .then(res => {
                    resolve({ data: res });
                }).catch(err => {
                    reject(err);
                })
        }, 2000);
    })
}

// Math.floor(Math.random() * 101) + 400