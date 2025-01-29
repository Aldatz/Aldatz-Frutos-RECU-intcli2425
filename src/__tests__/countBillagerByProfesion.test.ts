import { countBillagerByProfesion } from "../helpers/countBillagerByProfesion";
import { megaEpicFortress } from "../data/data";

describe('Get the towers and their guards', () => {
	it('should get correcty all the tower if they have Arcane Cannon in their armament', () => {

		const result = countBillagerByProfesion(megaEpicFortress)

        expect(result[0][0] + ", " + result[0][1] ).toBe("467, Farmer");
        expect(result[4][0] + ", " + result[4][1] ).toBe("97, Beggar");
	})
})