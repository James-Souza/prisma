import { SqliteAreaRepository } from "../../repositories/implementation/SqliteAreaRepository";
import { FindAllAreasController } from "./findAllAreasController";
import { FindaAllAreasUseCases } from "./findAllAreasUseCases";

const sqliteAreaRepository = new SqliteAreaRepository()

const findAllAreasUseCases = new FindaAllAreasUseCases(sqliteAreaRepository)

const findAllAreasController = new FindAllAreasController(findAllAreasUseCases)

export { findAllAreasController as findAllAreasController }