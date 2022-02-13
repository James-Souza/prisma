import { Character } from "../../entities/Character";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";

export class FindAllCharacterUseCases {
    constructor(
        private characterRepository: ICharacterRepository
    ) { }

    async execute(): Promise<Array<Character>> {
        const characters: Array<Character> = await this.characterRepository.findAll()
        if(characters) {
            return characters
        }
        throw new Error('Character cannot be found.')
    }
}