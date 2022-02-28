import { SqliteSessonRepository } from "../../repositories/implementation/SqliteSessionRepository";
import { UpdateSessionControler } from "./UpdateSessionControler";
import { UpdateSessionUseCases } from "./UpdateSessionUseCases";


const sqliteSessionRepository = new SqliteSessonRepository()

const updateSessionUseCases = new UpdateSessionUseCases(sqliteSessionRepository)

const updateSessionControler = new UpdateSessionControler(updateSessionUseCases)

export { updateSessionControler }