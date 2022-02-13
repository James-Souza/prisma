import { SqliteCharacterRepository } from "../../repositories/implementation/SqliteCharacterRepository";
import { FindAllCharacterUseCases } from "./findAllCharactersUseCases";
import { FindAllCharacterController } from "./findAllCharactersController";

const sqliteCharacterRepository = new SqliteCharacterRepository()

const findAllCharacterUseCases = new FindAllCharacterUseCases(sqliteCharacterRepository)

const findAllCharacterController = new FindAllCharacterController(findAllCharacterUseCases)

export { findAllCharacterController }