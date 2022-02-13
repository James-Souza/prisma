import { Character } from "../../entities/Character";
import { ICharacterRepository } from "../../repositories/ICharacterRepository";
import { ICreateCharacterRequestDTO } from "./createCharacterRequestDTO";

export class CreateCharacterUseCases {
    constructor(
        private characterRepository: ICharacterRepository
    ) { }

    async execute(data: ICreateCharacterRequestDTO) {
        const characterAlreadyExists = await this.characterRepository.findByName(data.name)

        if (characterAlreadyExists) {
            throw new Error('User already exists.')
        }

        const character = new Character(data, data.id)
        await this.characterRepository.save(character)
    }
}