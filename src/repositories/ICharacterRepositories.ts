import { Character } from "../entities/Character";

export interface ICreateCharacterUseCases {
    save(character: Character): Promise<void>
    findByName(name: string): Promise<Character>
    delete(name: string): Promise<void>
    update(character: Character): Promise<Character>
}