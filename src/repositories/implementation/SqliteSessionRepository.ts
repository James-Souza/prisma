import { PrismaClient } from "@prisma/client";
import { Session } from "../../entities/Session";
import { IUpdateSessionRequestDTO } from "../../useCases/updateSession/UpdateSessionRequestDTO";
import { ISessionRepository } from "../ISessionRepository";

const prisma = new PrismaClient()

export class SqliteSessonRepository implements ISessionRepository {
    async save(session: Session) {
        await prisma.session.create({
            data: session
        })
        await prisma.$disconnect()
    }
    async findByNameAndData(character: string, area: string, serverDate: string): Promise<Session> {
        const session = await prisma.session.findFirst({
            where: {
                character,
                area,
                serverDate
            }
        })
        await prisma.$disconnect()
        return session
    }
    async update(data: IUpdateSessionRequestDTO, sessionToUpdate: Session) {
        await prisma.session.update({
            where: {
                id: sessionToUpdate.id
            },
            data: {
                initialTime: data.initialTime,
                initialValue: data.initialValue,
                finalValue: data.finalValue,
                finalTime: data.finalTime,
                updatedAt: data.updatedAt
            }
        })
    }
}