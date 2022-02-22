import { Session } from "../entities/Session";

export interface ISessionRepository {
    save(session: Session):Promise<void>
    findByNameAndData(name: string, area: string, createdAt: string):Promise<Session>
}