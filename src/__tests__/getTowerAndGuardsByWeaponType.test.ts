import { getTowersAndGuardsByWeaponType } from "../helpers/getTowersAndGuardsByWeaponType";
import { megaEpicFortress } from "../data/data";

describe("Get the towers and their guards", () => {
    it("should correctly get all towers with 'Arcane Cannon' in their armament", () => {
        const result = getTowersAndGuardsByWeaponType(megaEpicFortress, "Arcane Cannon");

        expect(result).toEqual([
            ["Tower of Silence", "Eryndor the Silent", "Kael the Shadow"],
            ["Tower of Realm", "Jacob the Arcane", "Molio the Dog"]
        ]);
    });

    it("should return an empty array if no towers have the specified weapon", () => {
        const result = getTowersAndGuardsByWeaponType(megaEpicFortress, "Nonexistent Weapon");
        expect(result).toEqual([]);
    });
});
