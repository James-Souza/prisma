import { Session } from "../../entities/Session";
import { ISessionRepository } from "../../repositories/ISessionrepository";
import { IUpdateSessionRequestDTO } from "./UpdateSessionRequestDTO";

export class UpdateSessionUseCases {
    constructor(
        private sessionRepository: ISessionRepository
    ) { }

    async execute(data: IUpdateSessionRequestDTO) {
        let session: Session
        try {
            session = await this.sessionRepository.findByNameAndData(data.character, data.area, data.serverDate)
            // Tratativa de dados para update dos valores iniciais e finais
            if (session) {
                if (!data.initialValue) {
                    data.initialValue = session.initialValue
                    data.initialTime = session.initialTime
                }
                if (!data.finalValue) {
                    data.finalValue = session.finalValue
                    data.finalTime = session.finalTime
                }
                await this.sessionRepository.update(data, session)
            }
            else {
                throw new Error('Session cannot be found.')
            }
        } catch (err) {
            throw new Error(err.message || 'Unexpected Error')
        }
    }
}