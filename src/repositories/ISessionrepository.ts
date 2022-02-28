import { Session } from "../entities/Session";
import { IUpdateSessionRequestDTO } from '../useCases/updateSession/UpdateSessionRequestDTO'

export interface ISessionRepository {
    save(session: Session): Promise<void>
    findByNameAndData(name: string, area: string, createdAt: string): Promise<Session>
    update(data: IUpdateSessionRequestDTO, sessionToUpdate: Session):Promise<void>
}