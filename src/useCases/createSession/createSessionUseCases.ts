import { ISessionRepository } from "../../repositories/ISessionrepository";
import { ICreateSessionRequestDTO } from "./createSessionRequestDTO";

export class CreateSessionUseCases {
    constructor(
        private iSessionrepository: ISessionRepository
    ) { }

    async execute(data: ICreateSessionRequestDTO) {
        const session = await this.iSessionrepository.findByNameAndData(data.character, data.area, data.serverDate)

        if (session) {
            throw new Error('Session already exists.')
        }

        await this.iSessionrepository.save(data)
    }
}