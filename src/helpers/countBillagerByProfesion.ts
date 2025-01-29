import { epicFortress } from "../types/megaEpicFortress";

export function countVillagersByProfession(fortress: epicFortress): Record<string, number> {
    const villagers = fortress.inhabitants.roles.find(role => role.role === "Villager");

    if (!villagers || !("professions" in villagers)) {
        return {};
    }

    return villagers.professions.reduce((acc, profession) => {
        acc[profession.type] = profession.count;
        return acc;
    }, {} as Record<string, number>);
}
