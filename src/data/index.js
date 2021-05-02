import { getInitiatorById } from './initiators';
import { basicData } from "./table";
import { basicLine, basicPie, circular, linear } from "./charts";
import { basicBar } from "./charts/bar";

export default function fetchData(endpoint, body) {
    return new Promise((resolve, reject) => {
        switch (endpoint) {
            case '/initiator':
                const res = getInitiatorById(body.id);
                if (res) {
                    resolve(res);
                } else {
                    reject({status: 404, message: 'Initiator not found'});
                }
                break;
            case '/table-data':
                resolve(basicData);
                break;
            case '/linear-progress':
                resolve(linear);
                break;
            case '/circular-progress':
                resolve(circular);
                break;
            case '/line-chart':
                resolve(basicLine);
                break;
            case '/pie-chart':
                resolve(basicPie);
                break;
            case '/bar-chart':
                resolve(basicBar);
                break;
            default:
                reject({status: 404, message: 'Url not found'});
        }
    })
}
