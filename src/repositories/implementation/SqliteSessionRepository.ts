import { PrismaClient } from "@prisma/client";
import { Session } from "../../entities/Session";
import { ISessionRepository } from "../ISessionrepository";

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
}