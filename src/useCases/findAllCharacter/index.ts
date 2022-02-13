import { SqliteCharacterRepository } from "../../repositories/implementation/SqliteCharacterRepository";
import { FindAllCharacterUseCases } from "./findAllCharacterUseCases";
import { FindAllCharacterController } from "./findAllCharacterController";

const sqliteCharacterRepository = new SqliteCharacterRepository()

const findAllCharacterUseCases = new FindAllCharacterUseCases(sqliteCharacterRepository)

const findAllCharacterController = new FindAllCharacterController(findAllCharacterUseCases)

export { findAllCharacterController }