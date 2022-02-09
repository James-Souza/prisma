// import { PrismaClient } from "@prisma/client";
// import { iCharacter } from "./useCases/createCharacterDTO";

// const prisma = new PrismaClient()

// async function main(characters: iCharacter) {
//     await prisma.$queryRaw`INSERT INTO Characters (id, name, level, email, darksteel, createdAt, updateAt)
//     VALUES (${characters.id}, ${characters.name}, ${characters.level}, ${characters.characterPower}, ${characters.email}, ${characters.darksteel}, ${characters.createdAt}, ${characters.updateAt} )`
//     const character = await prisma.$queryRaw`SELECT * FROM Characters`
//     console.log(character)
// }

// main(Character)
//     .catch((e) => {
//         throw e
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })