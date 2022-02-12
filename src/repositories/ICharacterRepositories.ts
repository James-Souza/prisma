import { Character } from "../entities/Character";

export interface ICharacterRepositories {
    save(character: Character): Promise<void>
    findByName(name: string): Promise<Character>
    delete(name: string): Promise<void>
    update(character: Character): Promise<void>
}