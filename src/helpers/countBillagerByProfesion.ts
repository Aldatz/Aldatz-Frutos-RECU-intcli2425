import { epicFortress } from "../types/megaEpicFortress";

export function countBillagerByProfesion(fortress: epicFortress) {
    let workers;
    let response = []
    for (let i = 0; i < fortress.inhabitants.roles[0].professions.length; i++) {
        workers = fortress.inhabitants.roles[0].professions[i]
        let towerInfo = [workers = fortress.inhabitants.roles[0].professions[i].count, workers = fortress.inhabitants.roles[0].professions[i].type]
        response[i] = towerInfo;

    }
    return response
}


