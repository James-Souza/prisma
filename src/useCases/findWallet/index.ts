import { SqliteWalletRepository } from "../../repositories/implementation/SqliteWalletRepository"
import { FindWalletController } from "./findWalletController"
import { FindWalletUseCases } from "./findWalletUseCases"

const sqliteWalletRepository = new SqliteWalletRepository()

const findWalletUseCases = new FindWalletUseCases(sqliteWalletRepository)

const findWalletController = new FindWalletController(findWalletUseCases)

export { findWalletController }