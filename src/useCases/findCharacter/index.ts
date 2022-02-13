import { SqliteCharacterRepository } from "../../repositories/implementation/SqliteCharacterRepository";
import { FindCharacterUseCases } from "./findCharacterUseCases";
import { FindCharacterController } from "./findCharacterController";

const sqliteCharacterRepository = new SqliteCharacterRepository()

const findCharacterUseCases = new FindCharacterUseCases(sqliteCharacterRepository)

const findCharacterController = new FindCharacterController(findCharacterUseCases)

export { findCharacterController }