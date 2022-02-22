import { SqliteSessonRepository } from "../../repositories/implementation/SqliteSessionRepository";
import { CreateSessionController } from "./createSessionController";
import { CreateSessionUseCases } from "./createSessionUseCases";

const sqliteSessionRepository = new SqliteSessonRepository()

const createSessionUseCases = new CreateSessionUseCases(sqliteSessionRepository)

const createSessionController = new CreateSessionController(createSessionUseCases)

export { createSessionController }