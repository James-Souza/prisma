import { SqliteCharacterRepository } from "../../repositories/implementation/SqliteCharacterRepository";
import { CreateCharacterController } from "./createCharacterController";
import { CreateCharacterUseCases } from "./createCharacterUseCases";

const sqliteCharacterRepository = new SqliteCharacterRepository()

const createCharacterUseCases = new CreateCharacterUseCases(sqliteCharacterRepository)

const createCharacterController = new CreateCharacterController(createCharacterUseCases)

export { createCharacterUseCases, createCharacterController }