import { PrismaClient } from "@prisma/client";
import { Character } from "../../entities/Character";
import { ICharacterRepositories } from "../ICharacterRepositories";

const prisma = new PrismaClient()

export class SqliteCharacterRepository implements ICharacterRepositories {
    private characters: Character[] = []

    async save(character: Character): Promise<void> {
        const userAlreadyExists = await this.findByName(character.name)
        console.log(userAlreadyExists)
        if(!userAlreadyExists) {
            await prisma.characters.create({
                data: character
            })
            console.log('User created successfully.')
        }
        else {
            console.log('User already exists.')
        }
    }

    async findByName(name: string): Promise<Character> {
        this.characters[0] = await prisma.characters.findFirst({
            where: { name }
        })
        console.log(this.characters[0])
        return this.characters[0]
    }

    async update(character: Character): Promise<void> {
    }

    async delete(name: string): Promise<void> {

    }
}

async function main() {

    const data = {
        id: 'eba433c5-7447-45b4-be0a-db6c194fe659',
        createdAt: '09/02/2022 21:05:16',
        name: 'Goku',
        darksteel: '0',
        email: 'null',
        characterPower: '0',
        hp: '0',
        mp: '0',
        physicalATK: '0',
        physicalDEF: '0',
        speelDEF: '0',
        level: '0',
        updatedAt: '09/02/2022 21:05:16'
    }

    const db = new SqliteCharacterRepository()
    try {
        // await db.save(data)
        // await db.findByName('Goku')
    } catch (err) {
        console.log(err)
    }
    await prisma.$disconnect()
}

main()
