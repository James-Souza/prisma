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
    async findByNameAndData(name: string, area: string, createdAt: Date): Promise<Session> {
        const session = await prisma.session.findFirst({
            where: {
                name,
                area,
                createdAt
            }
        })
        await prisma.$disconnect()
        return session
    }
}