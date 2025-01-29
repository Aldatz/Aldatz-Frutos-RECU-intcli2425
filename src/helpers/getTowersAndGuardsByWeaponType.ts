import { epicFortress } from "../types/megaEpicFortress";

export function getTowersAndGuardsByWeaponType(fortress: epicFortress, weaponName: string){
    let towers = fortress.defenses.towers 
    let counter = 0
    let counter2 = 1
    let response = []
    for (let i = 0; i < towers.length; i++) {
        let towerInfo = []
        if (fortress.defenses.towers[i].armament.weaponType === weaponName){
            towerInfo[0] = towers[i].name
            for (let j = 0; j < towers[i].guards.length; j++) {
                towerInfo[counter2] = towers[i].guards[j].name
                counter2 ++
            }
            response[counter] = towerInfo
            counter2 = 1
            counter ++;
        }
    }
    return response
}
