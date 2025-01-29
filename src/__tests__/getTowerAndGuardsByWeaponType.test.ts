import { getTowersAndGuardsByWeaponType } from "../helpers/getTowersAndGuardsByWeaponType";
import { megaEpicFortress } from "../data/data";

describe('Get the towers and their guards', () => {
	it('should get correcty all the tower if they have Arcane Cannon in their armament', () => {

		const result = getTowersAndGuardsByWeaponType(megaEpicFortress, "Arcane Cannon")

        expect(result[0][0] + ", " + result[0][1]  + ", " + result[0][2] ).toBe("Tower of Silence, Eryndor the Silent, Kael the Shadow");
        expect(result[1][0] + ", " + result[1][1]  + ", " + result[1][2] ).toBe("Tower of Realm, Jacob the Arcane, Molio the Dog");
        expect(result[2]).toBe(undefined);
	})
})
