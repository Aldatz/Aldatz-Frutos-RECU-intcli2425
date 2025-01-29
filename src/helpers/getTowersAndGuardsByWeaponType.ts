import { epicFortress } from "../types/megaEpicFortress";

export function getTowersAndGuardsByWeaponType(fortress: epicFortress, weaponName: string): [string, ...string[]][] {
    return fortress.defenses.towers
        .filter(tower => tower.armament.weaponType === weaponName)
        .map(tower => [tower.name, ...tower.guards.map(guard => guard.name)]);
}
