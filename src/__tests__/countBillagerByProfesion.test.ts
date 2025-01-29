
import { megaEpicFortress } from "../data/data";
import { countVillagersByProfession } from "../helpers/countBillagerByProfesion";

describe('get all the villagers', () => {
    it('should return correct profession counts for villagers', () => {
        const result = countVillagersByProfession(megaEpicFortress);

        expect(result["Farmer"]).toBe(467);
        expect(result["Beggar"]).toBe(97);
    });
});
