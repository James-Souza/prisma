import { Character } from "../../entities/Character";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";
import { IFindCharacterRequestDTO } from "./findCharacterRequestDTO";

export class FindCharacterUseCases {
    constructor(
        private characterRepository: ICharacterRepository
    ) {}

    async execute(data: IFindCharacterRequestDTO):Promise<Character> {
        const character = await this.characterRepository.findByName(data.name)
        if(character) {
            return character
        } 
        throw new Error('Character cannot be found.')
    }
}