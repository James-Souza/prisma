import { ISessionRepository } from "../../repositories/ISessionrepository";
import { ICreateSessionRequestDTO } from "./createSessionRequestDTO";


export class CreateSessionUseCases {
    constructor(
        private iSessionrepository: ISessionRepository
    ) { }

    async execute(data: ICreateSessionRequestDTO) {
        const session = await this.iSessionrepository.findByNameAndData(data.name, data.area, data.serverDate)


        await this.iSessionrepository.save(data)
        
    }
}