export interface ICreateCharacterRequestDTO {
    id: string
    name: string
    level: number
    characterPower: number
    email: string
    darksteel: number
    hp: number
    mp: number
    physicalATK: number
    physicalDEF: number
    speelDEF: number
    createdAt: Date
    updatedAt: Date
}