import { PrismaClient } from "@prisma/client";
import { Area } from "../../entities/Area";
import { IAreaRepository } from "../IAreaRepository";

const prisma = new PrismaClient()

export class SqliteAreaRepository implements IAreaRepository {
    async findAll(): Promise<Area[]> {
        try {
            const areas = await prisma.areas.findMany()
            await prisma.$disconnect()
            return areas
        } catch (err) {
            throw new Error(err.message)
        }
    }
}