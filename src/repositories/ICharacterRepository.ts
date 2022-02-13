import { Character } from "../entities/Character";

export interface ICharacterRepository {
    save(character: Character): Promise<void>
    findByName(name: string): Promise<Character>
    findAll(): Promise<Array<Character>>
    delete(name: string): Promise<void>
    update(character: Character): Promise<void>
}