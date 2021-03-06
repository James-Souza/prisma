import { PrismaClient } from "@prisma/client";
import { Character } from "../../entities/Character";
import { ICharacterRepository } from "../ICharacterRepository";

const prisma = new PrismaClient()

export class SqliteCharacterRepository implements ICharacterRepository {
    async save(character: Character): Promise<void> {
        await prisma.characters.create({
            data: character
        })
        await prisma.$disconnect()
    }

    async findByName(name: string): Promise<Character> {
        const character = await prisma.characters.findFirst({
            where: { name: name }
        })


        await prisma.$disconnect()
        return character
    }

    async findAll(): Promise<Array<Character>> {
        const characters = await prisma.characters.findMany({
            orderBy: {
                name: 'asc'
            }
        })
        await prisma.$disconnect()
        return characters
    }

    async update(character: Character): Promise<void> {
    }

    async delete(name: string): Promise<void> {

    }
}
