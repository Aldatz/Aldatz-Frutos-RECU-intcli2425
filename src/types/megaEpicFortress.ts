export interface megaEpicFortress {
    name: string;
    location: Location;
    defenses: Defenses;
    inhabitants: Inhabitants
    resources: Resources
    history: History
}
interface History {
    founded: Founded
    majorEvents: MajorEvents[]
}
interface Founded {
    year: number
    by: string
}
interface MajorEvents{
    year: number
    event: string
    outcome: string
}
interface Resources {
    storage: Storages
    armory: Armory
}
interface Armory {
        weapons: Weapons[]
        shields: Shields[]
}
interface Weapons {
    type: string
    quantity: number
}
interface Shields {
    type: string
    quantity: number 
}
interface Storages {
    food: Food
    water: Water
}
interface Food {
    type: string
    quantity: number
    unit: string

}
interface Water {
    source: string
    capacity: number
    unit: string
}
interface Inhabitants {
    population: number
    roles: Roles[]
}
interface Roles {
    role: string
    count: number
    equipment: WarriorEquitment | MageEquipment
}
interface WarriorEquitment {
    weapon: string
    armor: string
    shield: string
}
interface MageEquipment{
    staff: string
    robe: string
    amulet: string
}
interface Professions {
    type: string
    count: number
}
interface Location {
    continent: string;
    coordinates: {
        latitude: number;
        longitude: number;
    }
    nearbyLandmarks: NearbyLandmarks[]
}
interface NearbyLandmarks {
    name: string
    type: string
    distance: number
}
interface Defenses {
    walls: Walls
    towers: Towers[]
}
interface Towers {
    name: string
    height: number
    armament: Armament
    guards: Guards[]
}
interface Guards {
    name: string
    rank: string
}
interface Armament {
    weaponType: string
    ammunitionType: string
    ammunitionCount: number
}
interface Walls {
    material: string
    height: number
    enchantments: Enchantments[]
}
interface Enchantments {

    name: string
    level: number
}