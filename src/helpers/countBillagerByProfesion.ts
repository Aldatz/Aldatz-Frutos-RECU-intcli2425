import { epicFortress } from "../types/megaEpicFortress";

export function countBillagerByProfesion(fortress: epicFortress) {
    let response = []
    for (let i = 0; i < fortress.inhabitants.roles[0].professions.length; i++) {
        let towerInfo = [fortress.inhabitants.roles[0].professions[i].count, fortress.inhabitants.roles[0].professions[i].type]
        response[i] = towerInfo;

    }
    return response
}


